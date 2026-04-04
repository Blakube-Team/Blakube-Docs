---
title: GUI Menus
description: How to configure GUI menus in BK-Gradients.
---

# GUI Menus — `menus/*.yml`

## Item Structure

```yaml
items:
  any_unique_key:                    # Key name is arbitrary, must be unique within the file
    slot: 22                         # Single slot
    # Alternative formats:
    # slot: "0,8,36-44"             # Range or comma-separated list (as string)
    # slots: [10, 11, 12]           # YAML list

    material: DIAMOND
    display_name: "<gradient>Text"   # MiniMessage supported
    lore:
      - "<gray>Line one"
      - "<gray>Line two"

    # Optional fields:
    glow: true                       # Enchantment glow with no visible enchantment text
    custom_model_data: 1001
    amount: 1

    # Skull options (both optional):
    base64: "eyJ..."                 # Custom skull texture
    player_name: "%player%"         # Use the player's own skin

    actions:
      - "[action here]"
```

**Slot reference — 54-slot inventory (6 rows):**
```
 0  1  2  3  4  5  6  7  8
 9 10 11 12 13 14 15 16 17
18 19 20 21 22 23 24 25 26
27 28 29 30 31 32 33 34 35
36 37 38 39 40 41 42 43 44
45 46 47 48 49 50 51 52 53
```

---

## Actions Reference

### General Actions

| Action                   | Description                                              |
|--------------------------|----------------------------------------------------------|
| `[close]`                | Close the inventory and end the current session          |
| `[close_hub]`            | Close the inventory and open the main hub (`/bkg`)       |
| `[open_menu] <menuId>`   | Open any plugin menu by its file ID (e.g. `main_menu`)  |
| `[player] /command`      | Execute a command as the player                          |

### Nick Module Actions

Used in `nick_menu.yml` and `nick_styles.yml`:

| Action                                         | Description                      |
|------------------------------------------------|----------------------------------|
| `[player] /nick_internal set_color1`           | Open chat input for start color  |
| `[player] /nick_internal set_color2`           | Open chat input for end color    |
| `[player] /nick_internal save`                 | Save and apply nick changes      |
| `[player] /nick_internal toggle_bold`          | Toggle bold style                |
| `[player] /nick_internal toggle_italic`        | Toggle italic style              |
| `[player] /nick_internal toggle_underline`     | Toggle underline style           |
| `[player] /nick_internal toggle_strikethrough` | Toggle strikethrough style       |
| `[player] /nick_internal toggle_smallcaps`     | Toggle small caps style          |
| `[player] /nick reset-colors`                  | Reset gradient to white          |

### Tags Module Actions

| Action                          | Description                                                       |
|---------------------------------|-------------------------------------------------------------------|
| `[tags_back]`                   | Navigate back one screen                                          |
| `[tags_remove]`                 | Remove the active tag                                             |
| `[tags_open_category <catId>]`  | Open the tag list for a specific category                         |
| `[tags_open_colours]`           | Open the color picker (requires active tag with `Colors: true`)   |
| `[tags_open_favourites]`        | Open the favourites screen                                        |
| `[tags_hex_input]`              | Start custom HEX chat input for the active tag                    |
| `[tags_set_color <#HEX>]`       | Apply a specific HEX color to the active tag                      |
| `[tags_toggle_fav <tagId>]`     | Toggle a specific tag as a favourite                              |
| `[tags_equip <tagId>]`          | Equip a specific tag directly                                     |
| `[tags_page_next]`              | Go to the next page                                               |
| `[tags_page_prev]`              | Go to the previous page                                           |

---

## Placeholders in Menus

### Available in all menus

| Placeholder | Description       |
|-------------|-------------------|
| `%player%`  | Player's username |

### Prefix menus

| Placeholder           | Description                              |
|-----------------------|------------------------------------------|
| `%prefix_text%`       | Current prefix text                      |
| `%prefix_color1%`     | Current start color (HEX)                |
| `%prefix_color2%`     | Current end color (HEX)                  |
| `%prefix_preview%`    | Fully rendered prefix in MiniMessage     |
| `%prefix_color1_bar%` | Visual bar rendered in the start color   |
| `%prefix_color2_bar%` | Visual bar rendered in the end color     |

### Nick menus

| Placeholder        | Description                            |
|--------------------|----------------------------------------|
| `%nick_color1%`    | Current start color                    |
| `%nick_color2%`    | Current end color                      |
| `%nick_preview%`   | Fully rendered nick                    |
| `%nick_color1_bar%`| Visual bar rendered in the start color |
| `%nick_color2_bar%`| Visual bar rendered in the end color   |

### Tags menus

| Placeholder       | Description                              |
|-------------------|------------------------------------------|
| `%tag_preview%`   | Active tag rendered with current colors  |
| `%tag_name%`      | Active tag display name                  |
| `%tag_id%`        | Active tag ID key                        |
| `%page_current%`  | Current page number                      |
| `%page_total%`    | Total pages                              |
| `%category_name%` | Current category name (plain text)       |
| `%favs_count%`    | Number of saved favourites               |
| `%hex_color1%`    | Current applied start color (HEX)        |
| `%hex_color2%`    | Current applied end color (HEX)          |
| `%color_page%`    | Color picker current page                |
| `%color_total%`   | Color picker total pages                 |
| `%fav_page%`      | Favourites current page                  |
| `%fav_total%`     | Favourites total pages                   |
