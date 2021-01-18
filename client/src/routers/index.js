import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { MenuBar, PageNotFound } from '../components'

import { Home, Login, Register } from '../containers'
import { AuthRoute } from './AuthRoute'

export const AppRouter = () => {
  return (
    <Router>
      <Container>
        <MenuBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <AuthRoute path='/login' component={Login} exact />
          <AuthRoute path='/register' component={Register} exact />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </Router>
  )
}
