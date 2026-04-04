---
title: Commands
description: All available commands for BK-Gradients.
---

# Commands

## `/bkgradients` · Aliases: `/bkg`, `/bkgrad`, `/gradients`

| Subcommand     | Description                        | Permission          |
|----------------|------------------------------------|---------------------|
| `/bkg`         | Open the main hub GUI              | `bkgradients.use`   |
| `/bkg reload`  | Reload all configs and menus       | `bkgradients.admin` |
| `/bkg help`    | Show available commands            | `bkgradients.use`   |
| `/bkg version` | Show the installed plugin version  | `bkgradients.use`   |

---

## `/prefix`

| Subcommand               | Description                               | Permission               |
|--------------------------|-------------------------------------------|--------------------------|
| `/prefix`                | Open the prefix editor GUI                | `bkgradients.prefix.use` |
| `/prefix enable`         | Make prefix visible in chat               | `bkgradients.prefix.use` |
| `/prefix disable`        | Hide prefix                               | `bkgradients.prefix.use` |
| `/prefix history`        | Open the prefix history GUI               | `bkgradients.prefix.use` |
| `/prefix cancel`         | Cancel an active chat input prompt        | `bkgradients.prefix.use` |
| `/prefix reset <player>` | Reset another player's prefix to default  | `bkgradients.admin`      |
| `/prefix help`           | Show prefix command list                  | `bkgradients.prefix.use` |

---

## `/nick`

| Subcommand             | Description                             | Permission             |
|------------------------|-----------------------------------------|------------------------|
| `/nick`                | Open the nick color editor GUI          | `bkgradients.nick.use` |
| `/nick reset-colors`   | Reset gradient to white (`#FFFFFF`)     | `bkgradients.nick.use` |
| `/nick history`        | Open the nick history GUI               | `bkgradients.nick.use` |
| `/nick cancel`         | Cancel an active chat input prompt      | `bkgradients.nick.use` |
| `/nick reset <player>` | Reset another player's nick to default  | `bkgradients.admin`    |
| `/nick help`           | Show nick command list                  | `bkgradients.nick.use` |

---

## `/suffix`

Same subcommands as `/prefix` — replace `prefix` with `suffix` in every command and permission.

---

## `/tags`

| Subcommand                   | Description                         | Permission             |
|------------------------------|-------------------------------------|------------------------|
| `/tags`                      | Open the tag category browser       | `bkgradients.tags.use` |
| `/tags remove`               | Remove the currently equipped tag   | `bkgradients.tags.use` |
| `/tags enable`               | Make tag visible                    | `bkgradients.tags.use` |
| `/tags disable`              | Hide tag                            | `bkgradients.tags.use` |
| `/tags help`                 | Show tags command list              | `bkgradients.tags.use` |
| `/tags admin clear <player>` | Clear a player's equipped tag       | `bkgradients.admin`    |
