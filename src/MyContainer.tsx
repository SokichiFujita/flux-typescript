import * as React from 'react';
import MyStore from './MyStore';
import { Container } from 'flux/utils';

class MyApp extends React.Component {
  static getStores() {
    return [MyStore];
  }

  static calculateState() {
    return {
      news: MyStore.getState(),
    };
  }

  render() {
    return (<div>aaa</div>);
  }
}

const MyContainer = Container.create(MyApp);
export default MyContainer;
