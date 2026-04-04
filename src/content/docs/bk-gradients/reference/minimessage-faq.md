---
title: MiniMessage & FAQ
description: MiniMessage formatting reference and frequently asked questions for BK-Gradients.
---

# MiniMessage & FAQ

## MiniMessage Formatting

All `display_name`, `lore`, `title`, message, and description values support MiniMessage syntax.

### Colors

```
<red>         <green>       <blue>        <yellow>
<gray>        <dark_gray>   <white>       <black>
<gold>        <aqua>        <dark_aqua>   <light_purple>
<dark_purple> <dark_red>    <dark_green>  <dark_blue>

<#RRGGBB>            — any HEX color
<color:#RRGGBB>      — same as above
```

### Gradients

```
<gradient:#FF0000:#0000FF>text</gradient>
<gradient:#FF0000:#00FF00:#0000FF>text</gradient>   — 3-stop gradient
```

### Text Styles

```
<bold>          <b>
<italic>        <i>
<underlined>    <u>
<strikethrough> <st>
<obfuscated>    <obf>
<!italic>            — explicitly removes italic (useful in lore lines)
```

### Decorations & Events

```
<reset>                          — clear all active formatting
<newline>                        — line break

<hover:show_text:'tooltip'>text</hover>
<click:run_command:'/bkg'>text</click>
<click:suggest_command:'/prefix'>text</click>
<click:open_url:'https://...'>text</click>
```

### Examples

```yaml
display_name: "<gradient:#A855F7:#EC4899><bold>VIP</bold></gradient>"
display_name: "<dark_gray>(<#00FFAA>⭐<dark_gray>) <white>My Item"
lore:
  - "<!italic><gray>Normal lore line"
  - "<!italic><#FF5555> ▸ Click to use!"
```

---

## FAQ

**Q: Why does the plugin require Paper and not Spigot?**  
BK-Gradients uses Paper's Adventure API for MiniMessage rendering and Paper's `AsyncChatEvent` for chat input interception. Both are unavailable on Spigot or Bukkit.

---

**Q: How do I add a new tag?**  
Add an entry under `Tags:` in `tags.yml` with a unique ID, then run `/bkg reload`. No restart needed.

---

**Q: How do I add a new tag category?**  
Add an entry under `Categories:` in `tags.yml`, assign tags to it via their `Category:` field, and add a new slot in `category-slots:` in `tags_categories.yml`. Run `/bkg reload`.

---

**Q: How do I give a player access to a locked tag?**  
Grant `bkgradients.tags.<tag_id>` via your permissions plugin. Example with LuckPerms:
```
/lp user Steve permission set bkgradients.tags.crown true
```

---

**Q: A player has the tag permission but it still shows as locked. Why?**  
The permission node must exactly match the YAML key under `Tags:` (it's case-sensitive). Double-check that `bkgradients.tags.<tag_id>` matches the key in `tags.yml` precisely.

---

**Q: How do I disable a module without losing player data?**  
Set `enabled: false` in that module's section in `config.yml`. All player data is preserved in the database and will be restored when you re-enable it.

---

**Q: Can multiple servers share the same cosmetic data?**  
Yes. Set `database.type: MYSQL` and point all servers to the same MySQL database.

---

**Q: How do I reload the plugin without restarting?**  
Run `/bkg reload`. This reloads `config.yml`, `messages.yml`, `tags.yml`, and all menu files. Active player sessions are not interrupted.

---

**Q: How do I use custom skull textures for tag or category icons?**  
Set `Material: PLAYER_HEAD` and provide the `Base64:` texture string. Base64 texture values can be found at [minecraft-heads.com](https://minecraft-heads.com) — look for the "Value" field under "Other".

---

**Q: Can I combine Base64 and Custom_Model_Data?**  
No. `Base64` only works with `Material: PLAYER_HEAD`. `Custom_Model_Data` works with any other material.

---

**Q: How do I clear a player's tag as an admin?**  
```
/tags admin clear <player>
```
