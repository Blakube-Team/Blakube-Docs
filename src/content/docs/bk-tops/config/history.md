---
title: History & Exports
description: Human-readable snapshots of your leaderboards saved to disk.
---

# History & Exports

BK-Tops can save **human-readable** snapshots of any leaderboard to disk as `.yml` files. These are meant to be read by people — you never need the database or an extra tool to look back at a past ranking.

There are two kinds of snapshot:

- **Reset history** — saved **automatically** every time a timed top resets, capturing the leaderboard exactly as it was right before the reset.
- **Exports** — saved **on demand** with `/bktops history export`, capturing a top's current leaderboard at that moment. Works with any top (permanent or timed) and at any time, so you can grab a mid-cycle snapshot without waiting for a reset.

Both player tops and team/clan tops are supported.

## Folder layout

Everything lives under the plugin's data folder:

```
plugins/BK-Tops/history/
├── reset/     # automatic snapshots, one per top reset
└── exports/   # manual snapshots created with /bktops history export
```

Each snapshot is a single file named `<top-id>_<yyyy-MM-dd_HH-mm-ss>.yml`, for example `kills_2026-09-05_14-30-00.yml`.

## File format

```yml
top-id: kills
schedule: DAILY          # the reset schedule, or EXPORT for manual exports
reset-at: 1757075400000  # snapshot time (epoch millis)
reset-date: '2026-09-05 14:30:00'
entries:
  - position: 1
    name: Steve
    value: '1,523'       # formatted with the top's value-format
    raw-value: 1523.0    # exact numeric value
    uuid: 069a79f4-fda1-4a17-9f8b-...
  - position: 2
    name: Alex
    value: '980'
    raw-value: 980.0
    uuid: ec561538-f333-4a2a-a1a6-...
```

For team/clan tops, `name` is the team's display name and `uuid` holds the team identifier.

## Commands

All history commands require the `bk-tops.admin` permission. The type (`reset` / `exports`), top IDs and dates are all tab-completable.

| Command | Description |
|---|---|
| `/bktops history export <topId>` | Snapshot a top's current leaderboard into `history/exports`. |
| `/bktops history list <reset\|exports> [topId]` | List the tops that have snapshots, or the saved dates for one top. |
| `/bktops history show <reset\|exports> <topId> <date> [page]` | Print a saved leaderboard, 10 positions per page. |

Example:

```
──────────────────────────────
kills | 2026-09-05 14:30:00 (page 1/3)
──────────────────────────────
  #1 Steve — 1,523
  #2 Alex — 980
  ...
──────────────────────────────
Next: /bktops history show reset kills 2026-09-05_14-30-00 2
```

:::note
Snapshots are never deleted automatically — they are kept until you remove the files yourself. If a timed top resets while it is still empty (for example a catch-up reset right after startup), no file is written.
:::
