---
title: BK-Gradients
description: Advanced Visual Identity & Cosmetics System for Paper Minecraft Servers.
---

# BK-Gradients

Advanced Visual Identity & Cosmetics System for Paper Minecraft Servers.

BK-Gradients is a cosmetics plugin for **Paper 1.21+** that lets players fully customize how they appear across the server — in chat, tab list, scoreboard, and beyond. Through four independent modules (Prefix, Nick, Suffix, Tags), each player can build a unique visual identity using HEX color gradients, decorative symbols, and rich text styling.

All GUIs are driven entirely by YAML files — no recompilation needed. Every menu, message, sound, and behavior can be edited and reloaded live with `/bkg reload`.

## Modules

| Module     | What it does                                                                 |
|------------|------------------------------------------------------------------------------|
| **Prefix** | Custom text before the player name, rendered as a HEX gradient               |
| **Nick**   | Gradient color applied to the player's display name (username unchanged)     |
| **Suffix** | Custom text after the player name, rendered as a HEX gradient                |
| **Tags**   | Decorative symbols (❤ ★ ⚔ …) with per-player gradient colors and categories |

## Key Features

- **100% YAML-driven GUIs** — menus, items, lore, actions, and layouts are fully editable
- **MiniMessage support** everywhere — gradient tags, HEX colors, bold, italic, hover/click events
- **Per-player history** — every saved cosmetic is stored; players can restore previous looks
- **PlaceholderAPI integration** — exposes legacy and MiniMessage placeholders for TAB, EssentialsX, scoreboards, and more
- **SQLite & MySQL** — single-server or multi-server (shared database) setups
- **Cooldown & validation system** — configurable per module: length limits, character blacklist, cooldown between saves
- **Permission-locked tags** — specific tags can require a permission node (e.g. for rank-gated cosmetics)
- **Live reload** — `/bkg reload` applies all config and menu changes instantly, no restart needed
