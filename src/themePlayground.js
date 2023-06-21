import WormholeBridge, { Theme, OPACITY, WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';
import { grey, green, orange, red, pink } from '@mui/material/colors';
import { Allotment } from "allotment";
import styled from "@emotion/styled";
import React, { Component } from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

const customized: Theme = {
  primary: grey,
  secondary: grey,
  divider: '#ffffff' + OPACITY[20], // color of divider for menus
  background: { // background color of the widget, 'wormhole' is an option
    default: '#131624', 
  },
  text: { // text colors for across the widget and other minor places
    primary: 'white', 
    secondary: grey[500], 
  },
  error: red, // color of the error divs
  info: pink, // color of the info divs
  success: green, // color of success divs
  warning: orange, // color of warning divs
  button: { // colors for all the buttons
    primary: '#ffffff' + OPACITY[10],//'#ff5cec', // default button background color 
    primaryText: '#ffffff' + OPACITY[40], // default button text color
    disabled: '#ffffff', // disabled ... bcolor
    disabledText: '#ffffff' + OPACITY[40], // disabled ... color
    action: '#5981f3', // ready to be clicked ... color
    actionText: '#ffffff', // ready to be clicked ... color
    hover: '#ffffff' + OPACITY[7], // hovered ... color
  },
  options: { // colors for anything that involves choosing from options of things
    hover: '#ffffff'+ OPACITY[10], // for hovering over the options under 'Gas payment'
    select: '#191d28' // for hovering over any option in a pop-up modal
  },
  card: { // colors and float for the bodies under each 'From' and 'To' section
    background: '#0e111b', // background color of the card
    secondary: '#141a29', // background color of the components in the card
    elevation: '0 0 0.25px 0.25px white', // https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
  },
  popover: { // colors for the menu when clicking on the wallet button when a wallet is selected
    background: '#0e111b', // background color of the menu
    secondary: '#ffffff' + OPACITY[5], // background color for the item being hovered over
    elevation: '0 0 0.25px 0.25px white', // https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow (not being used rn)
  },
  modal: { // color of the area that modals do not cover on the screen
    background: 'transparent',
  },
  font: { // font families across the widget for header and body 
    primary: '"Inter custom", sans-serif',
    header: '"Inter custom", sans-serif',
  },
};

const config: WormholeConnectConfig = {
  customTheme: customized,
};


class WHCConfig extends Component {
  state = {
    code: `function hello(bing) {\n  return "bong";\n}`
  }

  handleChange = (f) => {
    const n = f.search(/^(?:function hello\(bing\) {\n\s\sreturn ")(.*)(?:";\n})$/gm);
    
    if (n === 0) {
      this.setState({
        code: f
      });
    } else if (n === -1) {
      this.setState({
        code: this.state.code 
      });
    }
  }

  render() {
    return (
      <Editor
        value={this.state.code}
        onValueChange={this.handleChange}
        highlight={code => highlight(code, languages.js)}
        padding={15}
        style={{
          fontSize: 15,
          backgroundColor: "white",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    );
  }
}

function ThemePlayground() {
  return (
    <Container>
      <Allotment numViews={2}>
        <Allotment.Pane>
          <Code>
            <WHCConfig />
          </Code>
        </Allotment.Pane>
        <Allotment.Pane>
          <Widget>
            <WormholeBridge config={config} />
          </Widget>
        </Allotment.Pane>
      </Allotment>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const Code = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: white;
`;

const Widget = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 0px 0px 0px 5px;
`;

export default ThemePlayground;
