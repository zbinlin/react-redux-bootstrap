"use strict";

import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actionCreators from "../../actions";

class Root extends Component {
    submit() {
        if (this.refs.ipt.value == "") {
            alert("Please Enter Your Name!");
        } else {
            this.props.sayHello(this.refs.ipt.value);
        }
    }
    render() {
        let { username } = this.props;
        let ret;
        if (username) {
            ret = (
                <div className="jumbotron">
                    <h1>Hello, {username}!</h1>
                </div>
            );
        } else {
            ret = (
                <div>
                    <div className="form-group">
                        <label>What's Your Name?</label>
                    </div>
                    <div className="form-group">
                        <input className="form-control" ref="ipt" />
                    </div>
                    <div className="form-group">
                        <input type="button" value="Submit"
                               className="btn btn-primary btn-block"
                               onClick={ this.submit.bind(this) } />
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                <div className="center-block text-xs-center" style={{ maxWidth: "20rem", paddingTop: "3rem" }}>
                    {ret}
                </div>
            </div>
        );
    }
}
Root.proptypes = {
    username: PropTypes.string,
    sayHello: PropTypes.func.isRequired,
};


function mapStateToProps(state, ownProps) {
    return {
        username: state.sayHello.username,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        sayHello: bindActionCreators(actionCreators.sayHello, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
