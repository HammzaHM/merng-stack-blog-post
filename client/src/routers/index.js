import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { MenuBar } from '../components'

import { Home, Login, Register } from '../containers'

export const AppRouter = () => {
  return (
    <Router>
      <Container>
        <MenuBar />
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/register' component={Register} exact />
      </Container>
    </Router>
  )
}
