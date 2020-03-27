import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import jobsiteReducer from './store/reducers/jobsite';
import JobSiteNavigator from './navigation/JobSiteNavigator';

const rootReducer = combineReducers({
    jobs: jobsiteReducer
});

const store = createStore(rootReducer);


export default function App() {
  return (
      <Provider store={store}>
        <JobSiteNavigator />
      </Provider>
  );
}
