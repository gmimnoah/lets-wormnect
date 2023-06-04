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
