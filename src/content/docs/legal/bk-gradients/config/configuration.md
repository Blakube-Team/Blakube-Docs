---
title: config.yml
description: Main configuration file reference for BK-Gradients.
---

# Configuration — `config.yml`

## `gui`

```yaml
gui:
  states:
    enabled:  "<gradient:#55FF55:#00AA00>✔ Enabled</gradient>"
    disabled: "<gradient:#FF5555:#AA0000>✘ Disabled</gradient>"
```

MiniMessage text displayed on style toggle buttons. Edit to match your server's language or style.

---

## `command-aliases`

```yaml
command-aliases:
  - bkg
  - bkgrad
  - gradients
```

Additional aliases for `/bkgradients`. Changes take effect on reload — no restart required.

---

## `database`

```yaml
database:
  type: SQLITE   # SQLITE or MYSQL

  sqlite:
    file: data.db

  mysql:
    host: localhost
    port: 3306
    database: bkgradients
    username: root
    password: ""
    pool:
      maximum-pool-size: 10
      minimum-idle: 2
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000
```

Use `SQLITE` for single-server setups. Use `MYSQL` for networks where multiple servers share the same player data.

---

## `modules`

```yaml
modules:
  prefix:
    enabled: true
    default:
      text:   "Player"
      color1: "#A855F7"
      color2: "#EC4899"
    validation:
      min-length: 1
      max-length: 16
      allowed-characters: "^[a-zA-Z0-9 _\\-\\[\\]\\(\\)]+$"
      blacklist:
        - "admin"
        - "mod"
        - "owner"
    cooldown:
      enabled: true
      time: 300          # seconds between saves
    history-size: 10     # history entries kept per player

  nick:
    enabled: true
    default:
      color1: "#FFFFFF"
      color2: "#FFFFFF"
    # validation and cooldown use the same structure as prefix

  suffix:
    enabled: true
    # same structure as prefix

  tags:
    enabled: true
    history-size: 10
    max-favourites: 9    # maximum favourite tags per player
```

**Notes:**
- Setting `enabled: false` disables a module entirely without deleting existing player data
- `allowed-characters` is a Java regex. The default allows A–Z, a–z, 0–9, spaces, `_`, `-`, `[]`, `()`
- The `bypass` permission (`bkgradients.prefix.bypass`) skips the blacklist and character regex, but does **not** bypass length limits
- `history-size` controls how many past cosmetics are stored per player per module

---

## `sounds`

```yaml
sounds:
  open:    { enabled: true, name: BLOCK_CHEST_OPEN,      volume: 0.6, pitch: 1.2 }
  close:   { enabled: true, name: BLOCK_CHEST_CLOSE,     volume: 0.6, pitch: 1.2 }
  click:   { enabled: true, name: UI_BUTTON_CLICK,       volume: 1.0, pitch: 1.0 }
  toggle:  { enabled: true, name: UI_BUTTON_CLICK,       volume: 1.0, pitch: 2.0 }
  success: { enabled: true, name: ENTITY_PLAYER_LEVELUP, volume: 1.0, pitch: 2.0 }
  error:   { enabled: true, name: BLOCK_NOTE_BLOCK_BASS, volume: 1.0, pitch: 0.5 }
  cancel:  { enabled: true, name: UI_TOAST_OUT,          volume: 1.0, pitch: 1.0 }
```

Each key maps to a specific UI action. Set `enabled: false` to silence any individual sound.

---

## `input`

```yaml
input:
  timeout-seconds: 30
  cancel-keyword: "cancel"
  cancel-button:
    text:    " <bold><#FF0040>[CANCEL]"
    hover:   "<gray>Click to cancel editing"
    command: "/prefix cancel"
  text:
    title:    "<#D500F9>Pʀᴇꜰɪx Eᴅɪᴛɪɴɢ"
    subtitle: "<gray>Type your new prefix in chat"
  color:
    title:    "<#00FF88>Cᴏʟᴏʀ Eᴅɪᴛɪɴɢ"
    subtitle: "<gray>Type a HEX code or color name"
```

---

## `colors` — HEX Aliases

```yaml
colors:
  rose:      "#FF007F"
  sky:       "#87CEEB"
  mint:      "#98FF98"
  lavender:  "#E6E6FA"
  coral:     "#FF7F50"
  turquoise: "#40E0D0"
  violet:    "#EE82EE"
  amber:     "#FFBF00"
  emerald:   "#50C878"
  # add your own aliases here...
```

Players can type these names in chat instead of a full HEX code when responding to a color prompt.
