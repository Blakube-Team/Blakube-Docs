---
title: tags.yml
description: Tag definitions, categories, and color presets for BK-Gradients.
---

# Tags — `tags.yml`

## Categories

```yaml
Categories:
  default:                          # Category ID — referenced in tags and category-slots
    Name: '<white>Sʏᴍʙᴏʟs'         # MiniMessage supported
    Description:
      - 'Basic icon collection'
      - 'and geometric shapes.'
    Icon:
      Material: PAPER               # Bukkit material for the GUI button icon
      Custom_Model_Data: 9001       # Optional: resource pack model override
    Priority: 0                     # Display order (lower = first)

  premium:
    Name: '<gradient:#FFD700:#FF8C00>Premium</gradient>'
    Description:
      - 'Exclusive VIP designs.'
    Icon:
      Material: PLAYER_HEAD
      Base64: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6..."
    Priority: 1
```

**Icon field reference:**

| Field               | Type                 | Description                                      |
|---------------------|----------------------|--------------------------------------------------|
| `Material`          | Bukkit material name | Required. Use `PLAYER_HEAD` for skull textures   |
| `Base64`            | Base64 string        | Optional. Custom skull texture                   |
| `Custom_Model_Data` | Integer              | Optional. For resource pack custom model override |

---

## Tags

```yaml
Tags:
  heart_solid:                      # Tag ID — used in permissions and config references
    Name: 'Hᴇᴀʀᴛ'                  # Display name shown in the GUI
    Tag: '❤'                        # The symbol displayed in chat, tab, scoreboard
    Colors: true                    # true = player can colorize; false = fixed colors
    Permission: false               # true = requires bkgradients.tags.heart_solid
    Priority: 0                     # Order within the category (lower = first)
    Category: default               # Must match a key in Categories
    Material: RED_DYE               # Bukkit material for the GUI list icon
    Custom_Model_Data: 1001         # Optional: resource pack model override
```

**Tag with a custom skull icon:**
```yaml
Tags:
  vip_crown:
    Name: '<gold>Cᴏʀᴏɴᴀ'
    Tag: '♛'
    Colors: true
    Permission: true
    Priority: 0
    Category: premium
    Material: PLAYER_HEAD
    Base64: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6..."
```

**Fixed-color tag** using legacy `&` codes:
```yaml
Tags:
  colombia:
    Name: 'Cᴏʟᴏᴍʙɪᴀ'
    Tag: '&eᴄ&9ᴏ&cʟ'              # & legacy codes define fixed colors
    Colors: false
    Permission: true
    Priority: 2
    Category: countries
    Material: GOLD_NUGGET
```

---

## Color Presets

```yaml
Colors:
  red:
    Display_Name: 'Red'
    Icon:
      Material: RED_DYE
    HEX: '#FF5555'

  purple:
    Display_Name: 'Purple'
    Icon:
      Material: PURPLE_DYE
    HEX: '#A855F7'
```

These entries appear in the tag color picker screen for tags with `Colors: true`. Add or remove presets freely — changes apply on `/bkg reload`.
