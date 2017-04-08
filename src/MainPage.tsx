import * as React from 'react';
import './MainPage.scss';
import Header from './header/Header';

class MainPage extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Header title="AppZ" />
      </div>
    );
  }
}

export default MainPage;
