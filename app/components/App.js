import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    }
  }

  switchToSignin() {
    this.setState({login: false});
  }
  switchToLogin() {
    this.setState({login: true});
  }

  render() {
    return (
      <div className="form-webservice">
        <div className="row">
          <div className="col-md-8 col-md-offset-4">
            <h2> {this.state.login? 'Authenticate': 'Register'} to the WebService</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <a href="#signin" onClick={this.switchToSignin.bind(this)}>Signin</a>
          </div>
          <div className="col-md-6">
            <a href="#login" onClick={this.switchToLogin.bind(this)}>Login</a>
          </div>
        </div>
        <hr/>
        <div className="row">
          <p>ici le bon form</p>
        </div>
      </div>
    );
  }

};
