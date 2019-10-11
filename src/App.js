import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, history } from './redux-saga/store/store';
import Routes from './routes/routes';
import Header from './containers/header/index';
import Footer from './containers/footer/index';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Header />
            {Routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props) => {
                  if (!route.private) {
                    // console.log('route.path', route)
                    return (<div>
                      {/* <p>Public Route</p> */}
                      {route.component(props)}
                    </div>)
                  } else if (route.private) {
                    return (<div>
                      {/* <p>Private Route</p> */}
                      {route.component(props)}
                    </div>)
                  }
                }}
              />))
            }
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
