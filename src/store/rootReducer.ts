import { combineReducers } from '@reduxjs/toolkit';

import app from './app';
import states from './states';

const rootReducer = combineReducers({
  app,
  states,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
