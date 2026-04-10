---
title: Permissions
description: All permissions available in BK-Tops.
---

# Permissions

## Admin

| Permission | Description |
|---|---|
| `bk-tops.admin` | Grants access to all `/bktops` commands. |

## Bypass

| Permission | Description |
|---|---|
| `bktops.bypass.<top-id>` | Prevents the player from appearing in the specified top. |

`<top-id>` is the ID of the top as defined in `tops.yml`.

To prevent a player from appearing in multiple tops, grant each bypass permission individually:

```
bktops.bypass.money
bktops.bypass.kills_monthly
```

Bypass is checked before any value is read from PlaceholderAPI, so bypassed players produce no unnecessary processing overhead.
