import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PlatformReviewPage from './components/PlatformReviewPage'
import ReportingPortal from './components/ReportingPortal'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PlatformReviewPage} />
      <Route exact path="/portal" component={ReportingPortal} />
    </Switch>
  </BrowserRouter>
)

export default App
