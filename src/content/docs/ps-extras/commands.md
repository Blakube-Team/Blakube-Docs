---
title: Commands
description: Commands and their usage in PS-Extras
---

# Commands and permissions
PS-Extras automatically adds the subcommands to PS. Also, adds their own prefix.

## List of command, permissions, and descriptions
The format is: `/command` - `permission` - description.
- `/psextras reload` - `psextras.admin` - Reload the plugin configuration files.
- `/psextras ban <player>` - `psextras.ban` - Ban a player from entering regions.
- `/psextras unban <player>` - `psextras.unban` - Unban a player from entering regions.
- `/psextras kick <player>` - `psextras.kick` - Kick a player from regions.
- `/psextras manage <id>` - `psextras.manage` - Open the region management GUI.
- `/psextras manage` - `psextras.manage` - Open the region management GUI for the region you are currently in.
- `/psextras open` - `psextras.open` - Open the main menu of the plugin.

:::note
Subcommands are added to ps, so the full command is `/ps <subcommand>`.

Example: `/psextras ban <player>` is the same as `/ps ban <player>`.
:::