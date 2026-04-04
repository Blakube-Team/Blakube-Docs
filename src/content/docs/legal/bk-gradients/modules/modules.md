---
title: Modules
description: Overview of all four BK-Gradients cosmetic modules.
---

# Modules

BK-Gradients is divided into four independent cosmetic modules. Each can be enabled or disabled individually in `config.yml` without affecting the others or losing player data.

---

## Prefix

Players set a custom text string that appears before their name in chat. The text is rendered as a two-color HEX gradient. Players can also apply text styles (bold, italic, underline, small caps) and browse/restore previous prefixes from a history screen.

**Editor navigation:**

```
/prefix
  └── Prefix Editor
        ├── First Color    → Chat input: type a HEX code or color alias
        ├── Second Color   → Chat input: type a HEX code or color alias
        ├── Prefix Text    → Chat input: type the prefix text
        ├── Styles         → Sub-menu: Bold, Italic, Underline, Small Caps
        ├── Preview        → Live rendered preview
        ├── History        → Previous prefixes (click any to restore)
        └── Save / Cancel
```

**Chat input prompts:** When a color or text prompt is open, the player types their value in chat. Typing the configured cancel keyword (default: `cancel`) aborts the input. Prompts expire automatically after `input.timeout-seconds` seconds.

**Cooldown:** After saving, players must wait `modules.prefix.cooldown.time` seconds before saving again. Players with `bkgradients.admin` bypass this restriction.

---

## Nick

Colors the player's display name with a two-color HEX gradient. The actual Minecraft username never changes — only the visual color applied to it.

**Editor navigation:**

```
/nick
  └── Nick Editor
        ├── Color 1        → Chat input: start color
        ├── Color 2        → Chat input: end color
        ├── Styles         → Bold, Italic, Underline, Small Caps
        ├── Preview        → Shows the colored display name
        ├── Reset Colors   → Resets gradient to white (#FFFFFF)
        ├── History        → Previous color combinations
        └── Save / Cancel
```

:::note
The nick name is always the player's real Minecraft username. Only the gradient colors and styles are editable.
:::

---

## Suffix

Identical to the Prefix module but the text appears **after** the player's name. Uses the same editor layout, same validation options, and the same permission structure — just replace `prefix` with `suffix` in every command and permission node.

---

## Tags

A full tagging system with categories, a GUI color picker, custom HEX input, and a favourites system. Players browse categories, pick a tag symbol, and optionally apply a gradient color to it.

**Navigation flow:**

```
/tags
  └── Categories Screen
        └── [click category]
              └── Tag List Screen
                    ├── [left-click tag — Colors: true]   → Equips tag, stays in list
                    ├── [left-click tag — Colors: false]  → Equips tag, closes menu
                    ├── [right-click any tag]             → Toggle favourite
                    ├── [click "Paint Tags"]
                    │     └── Color Picker Screen
                    │           ├── [click preset color]  → Apply to tag
                    │           └── [click "HEX Custom"]
                    │                 └── Chat input:
                    │                       1-char tag  → 1 HEX → solid color
                    │                       2+ char tag → 2 HEX prompts → gradient
                    └── [click "Favourites"]
                          └── Favourites Screen
                                ├── [left-click]  → Equip
                                └── [right-click] → Remove from favourites
```

**Tag color modes:**

| `Colors:` value | Behavior                                                                              |
|-----------------|---------------------------------------------------------------------------------------|
| `true`          | Player can apply a gradient or solid color. Opening the color picker requires this.   |
| `false`         | Colors are fixed via `&` legacy codes in the `Tag:` field. Color picker is disabled. |

**Permission-locked tags:** If a tag has `Permission: true` and the player lacks `bkgradients.tags.<id>`, clicking it shows the `tags.locked` message and plays the error sound.

**Custom HEX input flow:**
- **1-character tag** → 1 chat prompt → solid color
- **2+ character tag** → 2 chat prompts → full gradient
- Entering the same HEX twice on a multi-character tag produces a solid color
