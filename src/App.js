import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages";
import SigninPage from "./pages/signin";
import Form from "./components/Signup/Form";
import SignUp from "./components/Signin/Signup";



function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path='/signin' component={SigninPage} exact />
            <Route path='/signup' component={SignUp} exact />
            <Route path='/Form' component={Form} exact />


        </Switch>
     </Router>
  );
}

export default App;
