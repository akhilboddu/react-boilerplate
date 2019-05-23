import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
// import Dashboard from './components/templates/Dashboard'
// import Wizard from './components/templates/Wizard'
// import Cards from './components/templates/Cards'
// import Main from './components/pages/Main'
// import Signup from './components/templates/Signup'
import ScrollToTop from './components/util/ScrollTop'
import Regression from './components/pages/ML/Regression';
import NeuralNetwork from './components/pages/ML/NeuralNetwork'

export default props => (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/core' component={ Regression } />
          <Route exact path='/layers' component={ NeuralNetwork } />{/*
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/wizard' component={ Wizard } />
          <Route exact path='/cards' component={ Cards } /> */}
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  )