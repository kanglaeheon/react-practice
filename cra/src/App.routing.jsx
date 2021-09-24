import RouteHeader from './components/RouteHeader';
import RouteHomePage from './components/RouteHomePage';
import RouteAboutPage from './components/RouteAboutPage';

import { Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <RouteHeader />
            <Route exact path="/" component={RouteHomePage} />
            <Route exact path="/about" component={RouteAboutPage} />
        </div>
    )
}

export default App;