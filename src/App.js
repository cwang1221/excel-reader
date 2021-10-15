import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { NotFoundPage, SignInPage, HomePage } from './pages'
import './App.less'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" component={HomePage} />
        <Route path="/signIn" component={SignInPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
