import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import MyContainer from './MyContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <div>
    <App />
    <MyContainer />
  </div>, document.getElementById('root') as HTMLElement);
registerServiceWorker();
