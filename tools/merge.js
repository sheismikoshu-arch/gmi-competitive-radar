// Merge staging/*.json into data.js (dedupe by url, generate ids).
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "data.js"), "utf8");
const ctx = { window: {} }; vm.runInNewContext(src, ctx);
const data = ctx.window.CI_SEED;
const header = src.slice(0, src.indexOf("window.CI_SEED"));
const seen = new Set(data.items.map((i) => i.url));
let added = 0;
for (const f of fs.readdirSync(path.join(root, "staging")).filter((f) => f.endsWith(".json")).sort()) {
  for (const it of JSON.parse(fs.readFileSync(path.join(root, "staging", f), "utf8"))) {
    if (seen.has(it.url)) continue;
    const slug = it.competitor.toLowerCase().replace(/[^a-z0-9]+/g, "");
    let id = `${slug}-${it.date.replace(/-/g, "")}`, n = 1;
    while (data.items.some((x) => x.id === id)) id = `${slug}-${it.date.replace(/-/g, "")}-${++n}`;
    data.items.push({ id, ...it }); seen.add(it.url); added++;
  }
}
data.items.sort((a, b) => b.date.localeCompare(a.date));
data.updatedAt = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(root, "data.js"), header + "window.CI_SEED = " + JSON.stringify(data, null, 2) + ";\n");
console.log(`added ${added}, total ${data.items.length}`);
const by = {}; data.items.forEach((i) => (by[i.competitor] = (by[i.competitor] || 0) + 1)); console.log(by);
