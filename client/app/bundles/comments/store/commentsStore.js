import React from 'react';
import Immutable from 'immutable';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from '../../../libs/middlewares/loggerMiddleware';
import reducers, { initialStates } from '../reducers';

export default (props, railsContext) => {
  const initialComments = props.comments;
  const { $$commentsState } = initialStates;

  for (const comment of initialComments) {
    comment.nodeRef = React.createRef(null);
  }

  // initialComments.forEach((comment) => {
  //   comment.nodeRef = React.createRef(null);
  // });
  const initialState = {
    $$commentsStore: $$commentsState.merge({
      $$comments: Immutable.fromJS(initialComments),
    }),
    railsContext,
  };

  const reducer = combineReducers(reducers);
  const composedStore = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));

  return composedStore(createStore)(reducer, initialState);
};
