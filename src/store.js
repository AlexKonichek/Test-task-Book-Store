import { createStore} from 'redux';
import {saveState } from './localStorage'
import  reducer from './reducers';


//const data = loadState();
//const persistedState = data.state;

const store = createStore(reducer);

store.subscribe(() => {
  saveState({
    state:store.getState()
  });
  console.log(store.getState())
});

export default store;