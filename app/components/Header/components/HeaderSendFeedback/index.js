import React from 'react';

//import styles
import styles from './styles.scss';

export default class HeaderSendFeedback extends React.Component {
  render() {
    return (
      <div className="m-headerSendFeedback">
        <div className="m-headerSendFeedback-text">Send Feedback</div>
        <div className="m-headerSendFeedback-emailIconWrapper">
          <svg className="email" width="14" height="11" viewBox="0 0 14 11" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 3.547V9.75c0 .688-.563 1.25-1.25 1.25H1.25C.562 11 0 10.437 0 9.75V3.547c.234.258.5.484.79.68 1.296.882 2.608 1.765 3.882 2.695C5.328 7.406 6.142 8 6.992 8h.016c.85 0 1.664-.594 2.32-1.078 1.274-.922 2.586-1.813 3.89-2.695.282-.196.548-.422.782-.68zm0-2.297c0 .875-.648 1.664-1.336 2.14-1.22.844-2.445 1.688-3.656 2.54C8.5 6.28 7.64 7 7.008 7h-.016c-.633 0-1.492-.72-2-1.07-1.21-.852-2.437-1.696-3.648-2.54C.79 3.017 0 2.134 0 1.423 0 .656.414 0 1.25 0h11.5C13.43 0 14 .563 14 1.25z"/>
          </svg>
        </div>
      </div>
    )
  }
}
