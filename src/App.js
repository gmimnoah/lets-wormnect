import WormholeBridge, { Theme, OPACITY, WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';
import { lightBlue, grey, green, orange, red } from '@mui/material/colors';

const customized: Theme = {
  primary: grey,
  secondary: grey,
  divider: '#ffffff' + OPACITY[20],
  background: {
    default: 'wormhole',
  },
  text: {
    primary: '#ffffff',
    secondary: grey[500],
  },
  error: red,
  info: lightBlue,
  success: green, 
  warning: orange, 
  button: {
    primary: '#ffffff' + OPACITY[10],
    primaryText: '#ffffff',
    disabled: '#ffffff' + OPACITY[7],
    disabledText: '#ffffff' + OPACITY[40],
    action: '#ffffff',
    actionText: '#000000',
    hover: '#ffffff' + OPACITY[7],
  },
  options: {
    hover: '#ffffff' + OPACITY[7],
    select: '#ffffff' + OPACITY[10],
  },
  card: {
    background: '#ffffff' + OPACITY[5],
    secondary: '#ffffff' + OPACITY[5],
    elevation: 'none',
  },
  popover: {
    background: '#1b2033',
    secondary: '#ffffff' + OPACITY[5],
    elevation: 'none',
  },
  modal: {
    background: '#0F1024',
  },
  font: { // for widget-wide font typing
    primary: '"Inter", sans-serif',
    header: '"IBM Plex Mono", monospace',
  },
};

const config: WormholeConnectConfig = {
  customTheme: customized,
}

function App() {
  return (
    <WormholeBridge config={config} />
  );
}

export default App;
