---
title: Placeholder list
description: All placeholders provided by BK-Tops via PlaceholderAPI.
---

# Placeholders

## Format

| Placeholder | Description |
|---|---|
| `%bktops_name_<top-id>_<position>%` | Name of the player (or team) at the given position. |
| `%bktops_value_<top-id>_<position>%` | Score of the player (or team) at the given position. |
| `%bktops_spaced_<top-id>_<position>%` | Filler characters to align name and value (configured in `config.yml`). |
| `%bktops_time_<top-id>%` | Time remaining until the next reset of a timed top. |
| `%bktops_myposition_<top-id>%` | The requesting player's position in the top, or a configurable fallback if they are not ranked. |
| `%bktops_displayname_<top-id>%` | The display name configured for the top, or the top ID if none is set. |
| `%bktops_distance_above_<top-id>%` | Score difference between the requesting player and the entry directly above them. |
| `%bktops_distance_below_<top-id>%` | Score difference between the requesting player and the entry directly below them. |
| `%bktops_above_name_<top-id>%` | Name of the player (or team) ranked directly above the requesting player. |
| `%bktops_below_name_<top-id>%` | Name of the player (or team) ranked directly below the requesting player. |

- `<top-id>` is the ID of the top as defined in `tops.yml`.
- `<position>` is the 1-based rank. Do not exceed the configured top size.

## Value format modifier

Append `:<MODE>` to `bktops_value` to override the display format for that placeholder only, regardless of what is configured globally or per-top.

```
%bktops_value:<MODE>_<top-id>_<position>%
```

**Available modes:**

| Mode | Description | Example output |
|---|---|---|
| `EXACT` | Exact number with decimals | `1,234,567.89` |
| `ROUNDED` | Rounds to whole number | `1,234,568` |
| `COMPACT` | Compact notation with decimals | `1.23M` |
| `COMPACT_ROUNDED` | Compact notation without decimals | `1M` |
| `TIME` | Treats the value as seconds and formats it as a human-readable duration | `19h 49m 12s` |

```
%bktops_value:COMPACT_money_1%       → 1.23M
%bktops_value:ROUNDED_money_1%       → 1,234,568
%bktops_value:TIME_time_played_1%    → 19h 49m 12s
```

The `spaced` and `distance_above`/`distance_below` placeholders also respect the format configured for the top (see [value-format in tops.yml](/bk-tops/config/how-to#value-format)).

## Examples

```
%bktops_name_money_1%            → NoHugsOnlyBugs
%bktops_value_money_1%           → 1,234,567.00
%bktops_myposition_money%        → 3   (or "You are not in the top!" if unranked)
%bktops_time_kills_monthly%      → 12d 4h
%bktops_displayname_money%       → &6&lMoney Top
%bktops_distance_above_money%    → 142,300.00  (points needed to reach the player above)
%bktops_above_name_money%        → PepitoPerez
```

## Spaced alignment example

Using the `spaced` placeholder to align leaderboard lines in chat or holograms:

```
&e1. &f%bktops_name_money_1% %bktops_spaced_money_1%&a$%bktops_value:COMPACT_money_1%
&e2. &f%bktops_name_money_2% %bktops_spaced_money_2%&a$%bktops_value:COMPACT_money_2%
&e3. &f%bktops_name_money_3% %bktops_spaced_money_3%&a$%bktops_value:COMPACT_money_3%
&74. &f%bktops_name_money_4% %bktops_spaced_money_4%&a$%bktops_value:COMPACT_money_4%
&75. &f%bktops_name_money_5% %bktops_spaced_money_5%&a$%bktops_value:COMPACT_money_5%
```

Result:
```
1. NoHugsOnlyBugs --------- $1.2M
2. PepitoPerez ------------ $242K
3. MenganitoIto ----------- $104K
4. JuanitoGomez ----------- $89K
5. LuisitoDeCadiz --------- $76K
```

The filler character and total line length are configured via `spaced.char` and `spaced.length` in `config.yml`.

:::note
If you need a placeholder that is not listed here, open an issue on GitHub or ask on Discord.
:::
