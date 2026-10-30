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

## Updating
1. Collect new moves into `staging/auto-YYYY-MM-DD.json` (format in `WEEKLY_COLLECTION.md`), or add them in Admin and export `data.js`.
2. Run `node tools/merge.js`.
3. Commit and push.

Sources: competitors' official newsrooms and blogs; Similarweb public estimates. Map positions, threat scores and playbook are analyst judgment.
