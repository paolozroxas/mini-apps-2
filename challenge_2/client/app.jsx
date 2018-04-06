import React, { Component } from 'react';
import _ from 'underscore';
import Home from './home.jsx'
import Form from './form.jsx';
import Confirmation from './confirmation.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isConfirmation: false,
      currentForm: 0,
      formMeta: this.props.formMeta
    };
  }

  componentDidMount() {

  }

  changeForm() {
    if (this.state.isHome) {
      this.setState({ isHome: false });
    } else if (this.state.currentForm === 2) {
      this.setState({ isConfirmation: true, currentForm: 0});
    } else if (this.state.isConfirmation) {
      this.setState({ isConfirmation: false, isHome: true });
    } else {
      this.setState({ currentForm: this.state.currentForm + 1 });
    }
  }

  submitForm() {
    console.log('submit form');
  }

  render() {
    console.log(this.state.isHome)
    //determines which component should be rendered
    var currentFormMeta = this.state.formMeta[this.state.currentForm];
    var currentComponent;
    if (this.state.isHome) {
      currentComponent = <Home changeForm={this.changeForm.bind(this)}/>;
    } else if (this.state.isConfirmation) {
      currentComponent = <Confirmation formMeta={this.state.formMeta}
        changeForm={this.changeForm.bind(this)}
        submitForm={this.submitForm.bind(this)} />;
    } else {
      currentComponent = <Form formMeta={currentFormMeta}
        changeForm={this.changeForm.bind(this)} />;
    }

    return (
      <div className='app'>
        <div className='header'>
          <div className='header-title'>Check Me Out</div>
        </div>
        { currentComponent }
        <div className="footer">
          By Paolo Z. Roxas
        </div>
      </div>
    );
  }
}

export default App;
