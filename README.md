# lets-wormnect
let's see what you can do with wormhole connect

## some raw notes on custom themes

### color foundations
* the only options that require `@mui/material/colors` objects are ([ref](https://mui.com/material-ui/customization/color/)):
  - `primary`
  - `secondary`
  - `error`
  - `info`
  - `success`
  - `warning`
* the opacity options for the `OPACITY` object imported from the `wormhole-connect` package are: `0`, `5`, `7`, then multiples of 5 from `10` to `100` ([source](https://github.com/wormhole-foundation/wormhole-connect/blob/e032790ba4496ce6068222bf89da332d3bf99610/wormhole-connect-loader/src/theme.ts#L74))

### random observations
* the `background` default `wormhole` is a full-on generated background image ([source](https://github.com/wormhole-foundation/wormhole-connect/blob/e032790ba4496ce6068222bf89da332d3bf99610/wormhole-connect/src/components/Background/BackgroundImage.tsx#L16))
* maybe for the options under the 'Gas payment' section, the selected option should have a noticeable checkmark showing that that option is the selected one. right now, it's pretty hard to tell which option is selected + if there are even options in the first place
* the use of the `options`'s `hover` and `select` configs are kind of inconsistent. for pop-up menus, when you hover over an item, it uses the `select` color. for the 'Gas payment' section, the selected item uses the `select` color and the item being hovered over uses the `hover` color.
* `primary`, `secondary`, and `popover.elevation` aren't not being used (and probably should?)
* the `divider` color is also used for the border of the search box (which it shouldn't?)
