import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import {redA200} from 'material-ui/styles/colors';

interface HeaderProps extends React.Props<any> {
  title: string;
}

const stepLabelStyle = {
  backgroundColor: redA200
};

class Header extends React.Component<HeaderProps, any> {
  render() {
    return (
      <AppBar
        style={stepLabelStyle}
        showMenuIconButton={false}
        title={this.props.title}
      />
    );
  }
}

export default Header;
