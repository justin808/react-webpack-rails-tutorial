import React, { PropTypes } from 'react';

import CommentBox from '../CommentBox/CommentBox';
import css from './CommentScreen.scss';
import BaseComponent from 'libs/components/BaseComponent';

export default class CommentScreen extends BaseComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    locationState: PropTypes.object,
  };

  _renderNotification() {
    const { locationState } = this.props;

    if (!locationState || !locationState.redirectFrom) return null;

    return (
      <div className={`bg-success ${css.notification}`}>
        You've been redirected from <strong>{locationState.redirectFrom}</strong>
      </div>
    );
  }

  render() {
    const { data, actions } = this.props;

    return (
      <div>
        {this._renderNotification()}
        <div>
          <CommentBox
            pollInterval={10000}
            data={data}
            actions={actions}
            ajaxCounter={data.get('ajaxCounter')}
          />
          <div className="container">
            <a href="http://www.shakacode.com">
              <h3>
                <div className={css.logo} />
                Example of styling using image-url and Open Sans Light custom font
              </h3>
            </a>
            <a href="https://twitter.com/railsonmaui">
              <div className={css.twitterImage} />
              Rails On Maui on Twitter
            </a>
          </div>
          <div className="container">
            <h2>Example of Font Awesome using the font-awesome-loader</h2>
            <div className="row col-items">
              <div className="col-md-4 col-item">
                <span className="fa fa-headphones"></span>
                <span className="text">It.</span>
              </div>
              <div className="col-md-4 col-item">
                <span className="fa fa-glass"></span>
                <span className="text">Just.</span>
              </div>
              <div className="col-md-4 col-item">
                <span className="fa fa-thumbs-up"></span>
                <span className="text">Works.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
