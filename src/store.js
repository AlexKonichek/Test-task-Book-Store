import { createStore} from 'redux';
import {loadState, saveState } from './localStorage'
import  reducer from './reducers';


const data = loadState();
const persistedState = data.state;

const store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState({
    state:store.getState()
  });
  console.log(store.getState())
});

export default store;