import AppDispatcher from './AppDispatcher';
import * as FluxUtils from 'flux/utils';

class MyStore extends FluxUtils.ReduceStore<any,any> {
  getInitialState():any[] {
    return [];
  }

  reduce(state:any, action:any) {
    switch (action.type) {
      case 'a':
        return action.data;
      case 'b':
        return state.concat(action.data);
      default:
        return state;
    }
  }
}

export default new MyStore(AppDispatcher);
