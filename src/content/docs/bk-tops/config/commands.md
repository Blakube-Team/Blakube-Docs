---
title: Command list
description: List of all commands available in BK-Tops.
---

# Commands

All commands require the `bk-tops.admin` permission.

| Command | Description |
|---|---|
| `/bktops reload` | Reloads all configuration files, tops, and settings. |
| `/bktops reset <top-id>` | Immediately resets a timed top without waiting for its scheduled reset. |
| `/bktops compare <player1> <player2>` | Compares two players side by side across all registered tops. |

## `/bktops compare`

Displays each registered top alongside both players' positions and scores, and the difference between them.

Example output:
```
──────────────────────────────
BK-Tops | Steve vs Alex
──────────────────────────────
  &6Money: #2 (1.2M) vs #5 (340K) [+860K]
  &cKills: #1 (4,210) vs #3 (2,890) [+1,320]
  &eTeam Money: N/A vs #4 (980K)
──────────────────────────────
```

The label shown for each top is its `display-name` if configured, otherwise the top ID. Scores are formatted using the configured number format.
