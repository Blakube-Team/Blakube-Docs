---
title: Installation
description: How to install BK-Gradients on your Paper server.
---

# Installation

## Requirements

| Requirement     | Details                                            |
|-----------------|----------------------------------------------------|
| Server software | Paper 1.21 or newer (Spigot/Bukkit not supported)  |
| Java            | 17 or newer                                        |
| PlaceholderAPI  | Optional — required only for external placeholders |

:::note[Why Paper only?]
BK-Gradients uses Paper's Adventure API for MiniMessage rendering and Paper's `AsyncChatEvent` for intercepting chat input. Both are unavailable on Spigot.
:::

## Steps

1. Drop `BKGradients.jar` into your server's `plugins/` folder
2. Start the server — all configuration files are generated automatically
3. Edit `config.yml`, `messages.yml`, `tags.yml`, and files inside `menus/` as needed
4. Run `/bkg reload` to apply changes without restarting the server

## File Structure

After the first start, the following files will be generated:

```
plugins/BKGradients/
├── config.yml              ← Main configuration (database, modules, sounds, colors)
├── messages.yml            ← All player-facing messages (MiniMessage format)
├── tags.yml                ← Tag definitions, categories, and color presets
├── data.db                 ← SQLite database (auto-created; not present with MySQL)
└── menus/
    ├── main_menu.yml
    ├── prefix_menu.yml
    ├── prefix_styles.yml
    ├── prefix_history.yml
    ├── nick_menu.yml
    ├── nick_styles.yml
    ├── nick_history.yml
    ├── suffix_menu.yml
    ├── suffix_styles.yml
    ├── suffix_history.yml
    ├── tags_categories.yml
    ├── tags_list.yml
    ├── tags_colors.yml
    └── tags_favourites.yml
```
