import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CryptoGraph from './components/CryptoGraph.jsx';
// import ConnexionStart from './components/ConnexionStart.jsx';
import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Home',
      showLogin: false,
      showReg: false,
    };
    this.hundlePage = this.hundlePage.bind(this);
  }

  hundlePage(e) {
	  console.log('register clicked ',e)
	//   e.preventDefault()
    this.setState({ view: e.target.name });
  }
  changeIt(v) {
    this.setState({
      view: 'Login',
      showLogin: v,
    });
  }
  changeItReg(v) {
    this.setState({
      view: 'Registration',
      showReg: v,
    });
  }
  // handleChangeReservation = ({ target }) => {
  // 	this.setState({ [target.name]: target.value });
  // 	console.log(this.state);
  //   };
  render() {
    let render;
    switch (this.state.view) {
      case 'Home':
        render = <Home hundlePage={this.hundlePage}/>;
        break;
      case 'Login':
        render = <Login />;
        break;
      case 'Registration':
        render = <Registration />;
        break;
      case 'AboutUs':
        render = <AboutUs />;
        break;

      case 'CryptoGraph':
        render = <CryptoGraph />;
        break;
    }
    console.log(render);
    return (
      <div>
        <NavBar
          hundlePage={(e) => {
            this.hundlePage(e);
          }}
          changeView={(v) => {
            this.changeIt(v);
          }}
        />
        {this.state.showLogin && <Login />}

        {render}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
