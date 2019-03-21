import React, {Component, Fragment} from 'react';
import MainContainer from "./containers/MainContainer/MainContainer";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import NewMessage from "./containers/NewMessage/NewMessage";
import Toolbar from "./components/Toolbar/Toolbar";

class App extends Component {
  render() {
    return (
      <Fragment>
          <header>
            <Toolbar/>
          </header>
          <Container >
              <Switch>
                  <Route path="/" exact component={MainContainer}/>
                  <Route path="/message/new" exact component={NewMessage} />
              </Switch>
          </Container>
      </Fragment>
    );
  }
}

export default App;
