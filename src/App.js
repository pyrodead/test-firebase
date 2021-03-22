import { useSelector, useDispatch } from "react-redux";
import './App.scss';
import {
    setInitialized,
} from './actions';
import {
    HashRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import routes from './components/routes';

export const AppContent = () => {
    const initialized = useSelector(state => state.initialized);
    // const dispatch = useDispatch();
    // Use of dispatch example:
    // dispatch(setInitialized(true))

    if (!initialized) {
        return null;
    }

    return (
        <HashRouter>
            <Switch>
                {routes.map((route) =>
                    <Route key={route.path} path={route.path} exact strict={route.strict} component={route.component}/>
                )}
                <Redirect to="/" />
            </Switch>
        </HashRouter>
    );
}

export default AppContent;
