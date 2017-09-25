/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import messages from "./messages";
import reducer from "./reducer";
import saga from "./saga";

export class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <h1>HELLO</h1>
      </div>
    );
  }
}

//const withConnect = connect(null, mapDispatchToProps);

const withReducer = injectReducer({ key: "home", reducer });
const withSaga = injectSaga({ key: "home", saga });

export default compose(withReducer, withSaga)(HomePage);
