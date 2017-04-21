// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import commentFormSelector from '../../../selectors/commentFormSelector';
import { actions } from '../sagas';
import Add from '../components/Add/Add';

export type AddPropsType = {
  author?: string,
  text?: string,
  actions: {
    fetch: () => void,
    updateForm: (payload: Object) => void,
    createComment: (payload: Object) => void,
  }
}

const mapStateToProps = createSelector(
  commentFormSelector,
  (commentForm: any) => commentForm.toJS()
);

const mapDispatchToProps = (dispatch: Function) => ({
  actions: bindActionCreators(actions, dispatch),
});

const AddContainer = (props: AddPropsType) => <Add {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(AddContainer);
