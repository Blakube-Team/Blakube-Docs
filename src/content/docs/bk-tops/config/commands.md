---
title: Command list
description: List of all commands available in BK-Tops.
---

# Commands

All commands require the `bk-tops.admin` permission.

| Command | Description |
|---|---|
| `/bktops reload` | Reloads all configuration files (including `notifications.yml` and `discord.yml`), tops, and settings. |
| `/bktops reset <top-id>` | Immediately resets a top, clearing its stored data. Useful for timed tops or after changing a top's `provider`. |
| `/bktops compare <player1> <player2>` | Compares two players side by side across all registered tops. |
| `/bktops debug <player>` | Inspects a player live for every top: bypass permission, conditions, the value read directly from the provider, and current position. |
| `/bktops notify test update` | Fires a sample `top-position-update` notification (run as a player) to test `notifications.yml` / `discord.yml`. |
| `/bktops notify test reset` | Fires a sample `timed-top-reset` notification. |
| `/bktops rewards additem <topId> <position> <amount>` | Adds the item in your main hand as a reward for the given position. |
| `/bktops rewards addcommand <topId> <position> <command>` | Adds a command to the given reward position. |
| `/bktops rewards list <topId>` | Lists the configured rewards for a top. |
| `/bktops history export <topId>` | Saves a snapshot of a top's current leaderboard to `history/exports`. Works with any top at any time. |
| `/bktops history list <reset\|exports> [topId]` | Lists saved history files. Without a top ID it lists the tops that have history; with one, its saved dates. |
| `/bktops history show <reset\|exports> <topId> <date> [page]` | Prints a saved leaderboard, 10 positions per page. |

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

## `/bktops debug`

Reads each top **live** for the given player — it calls the provider directly instead of showing the stored leaderboard value. For every top it reports the bypass permission, whether conditions pass, the parsed value, and the current position.

This is the fastest way to tell a parsing/provider problem apart from stale data: if `debug` shows the correct value but the leaderboard shows a wrong one, the stored data is simply out of date (re-process the player, or run `/bktops reset <top-id>` after changing a `provider`).

## `/bktops notify test`

Simulates a notification so you can preview your `notifications.yml` and `discord.yml` without waiting for a real leaderboard change. `update` must be run by a player (it targets you as the involved player); `reset` can be run from console. See [Notifications](/bk-tops/addons/notify).

## `/bktops rewards`

Manages the rewards configured for timed tops. Use `additem` to capture the item in your main hand, `addcommand` to attach console commands, and `list` to inspect the configured positions and reward counts. See [Rewards](/bk-tops/addons/rewards).

## `/bktops history`

Reads and creates human-readable snapshots of leaderboards stored on disk (never in the database). Timed tops save a snapshot automatically every time they reset; `export` lets you snapshot any top on demand. Files are grouped by type: `reset` for automatic reset snapshots and `exports` for manual ones.

- `export <topId>` captures the top's **current** leaderboard right now.
- `list <reset|exports> [topId]` browses what has been saved.
- `show <reset|exports> <topId> <date> [page]` prints a saved leaderboard, 10 positions per page.

The `<reset|exports>` type, top IDs and dates are all tab-completable. See [History](/bk-tops/config/history) for the folder layout and file format.
