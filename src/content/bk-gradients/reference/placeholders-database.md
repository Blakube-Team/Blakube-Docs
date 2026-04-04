---
title: PlaceholderAPI & Database
description: PlaceholderAPI integration and database schema for BK-Gradients.
---

# PlaceholderAPI & Database

## PlaceholderAPI

BK-Gradients registers placeholders automatically when PlaceholderAPI is installed.

### Legacy placeholders (`%bkgradients_..%`)

| Placeholder                    | Returns                                              |
|--------------------------------|------------------------------------------------------|
| `%bkgradients_prefix%`         | Player's current prefix (legacy color codes)         |
| `%bkgradients_prefix_text%`    | Raw prefix text                                      |
| `%bkgradients_prefix_color1%`  | Start color HEX                                      |
| `%bkgradients_prefix_color2%`  | End color HEX                                        |
| `%bkgradients_nick%`           | Player's display name (legacy colored)               |
| `%bkgradients_nick_color1%`    | Nick start color HEX                                 |
| `%bkgradients_nick_color2%`    | Nick end color HEX                                   |
| `%bkgradients_suffix%`         | Player's current suffix (legacy color codes)         |
| `%bkgradients_suffix_text%`    | Raw suffix text                                      |
| `%bkgradients_suffix_color1%`  | Suffix start color HEX                               |
| `%bkgradients_suffix_color2%`  | Suffix end color HEX                                 |
| `%bkgradients_tag%`            | Player's active tag symbol (legacy colored)          |
| `%bkgradients_tag_name%`       | Active tag display name                              |
| `%bkgradients_tag_id%`         | Active tag ID key                                    |
| `%bkgradients_tag_color1%`     | Tag start color HEX                                  |
| `%bkgradients_tag_color2%`     | Tag end color HEX                                    |

### MiniMessage placeholders (`<bkgradients:...>`)

| Placeholder                   | Returns                                               |
|-------------------------------|-------------------------------------------------------|
| `<bkgradients:prefix>`        | Player's prefix in full MiniMessage gradient          |
| `<bkgradients:nick>`          | Player's colored display name in MiniMessage          |
| `<bkgradients:suffix>`        | Player's suffix in full MiniMessage gradient          |
| `<bkgradients:tag>`           | Player's active tag in MiniMessage gradient           |

:::note
MiniMessage placeholders require a TAB or plugin that supports MiniMessage parsing natively. Legacy `%..%` placeholders work anywhere PlaceholderAPI is supported (EssentialsX, scoreboards, etc.).
:::

---

## Database

BK-Gradients stores all player data in SQL. Supports both SQLite (single-server) and MySQL (multi-server network).

### Tables

| Table                | Contents                                                      |
|----------------------|---------------------------------------------------------------|
| `bkg_prefix`         | Each player's prefix text, colors, styles, and visibility     |
| `bkg_prefix_history` | Prefix history                                                |
| `bkg_nick`           | Each player's nick colors and styles                          |
| `bkg_nick_history`   | Nick history                                                  |
| `bkg_suffix`         | Each player's suffix                                          |
| `bkg_suffix_history` | Suffix history                                                |
| `bkg_tags`           | Each player's active tag (id, colors, visibility)             |
| `bkg_tags_history`   | Tag history                                                   |
| `bkg_tags_favourites`| Favourite tag IDs per player                                  |

:::caution
Do not manually edit database tables while the plugin is running. Always stop the server or use `/bkg reload` after making direct database changes.
:::
