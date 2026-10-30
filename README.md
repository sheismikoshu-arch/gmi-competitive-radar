# GMI Competitive Radar

AI cloud market intelligence for GMI Cloud's product and marketing teams: industry trends, competitor positioning, product capability adoption, GTM tactics and a sourced feed of competitor moves.

## Views
- **Insights**: the 8 shifts reshaping the market, positioning map, focus matrix, GMI playbook
- **Product lens**: capability adoption (table stakes vs. white space), shipping timeline, competitor direction
- **Marketing lens**: marketing calendar, GTM tactic matrix, each competitor's narrative
- **Players**: per-competitor profile, direction and threat to GMI product lines
- **Live feed**: every sourced move, filterable by trend, competitor and date
- **Admin** (`admin.html`): add or edit moves and competitors, import JSON, export `data.js`

## Run locally
Static site, no build step:

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765.

## Files
| File | What it holds |
|---|---|
| `data.js` | Published competitor moves (source URL, trend tags, "why it matters") |
| `insights.js` | Analyst layer: trends, map, capabilities, tactics, narratives, playbook. Refresh monthly. |
| `WEEKLY_COLLECTION.md` | The weekly collection process (also used by the scheduled Thursday run) |
| `staging/` | Raw JSON from each collection run |
| `tools/merge.js` | Merges `staging/*.json` into `data.js` (dedupes by URL) |

## Live site
https://sheismikoshu-arch.github.io/gmi-competitive-radar/ (GitHub Pages, redeploys on every push to `main`).

## Run or deploy without Claude
It's plain HTML/CSS/JS with no build step and no backend, so any static host works.

- **On your own computer**: install Python 3, then
  ```bash
  git clone https://github.com/sheismikoshu-arch/gmi-competitive-radar.git
  cd gmi-competitive-radar
  python3 -m http.server 8765
  ```
  and open http://localhost:8765.
- **Another host**: drag the folder into Netlify Drop (app.netlify.com/drop), or connect the repo to Cloudflare Pages or Vercel. Use no build command and `/` as the output folder.
- **Custom domain**: in GitHub, Settings → Pages → Custom domain (e.g. `radar.yourdomain.com`), then add a CNAME record at your DNS provider pointing to `sheismikoshu-arch.github.io`.
- **Update data without Claude**: open `admin.html`, add moves, click *Export data.js*, then upload it on GitHub (*Add file → Upload files*). The site refreshes in about a minute.

## Updating
1. Collect new moves into `staging/auto-YYYY-MM-DD.json` (format in `WEEKLY_COLLECTION.md`), or add them in Admin and export `data.js`.
2. Run `node tools/merge.js`.
3. Commit and push.

Sources: competitors' official newsrooms and blogs; Similarweb public estimates. Map positions, threat scores and playbook are analyst judgment.
