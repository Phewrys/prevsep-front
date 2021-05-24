import { Switch, Route, Redirect } from 'react-router'

import Home from './pages/Home'
import Gestor from './pages/gestor/Gestor'
import Medico from './pages/medico/Medico'
import Enfermeiro from './pages/enfermeiro/Enfermeiro'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/gestor' component={Gestor} />
        <Route path='/medico' component={Medico} />
        <Route path='/enfermeiro' component={Enfermeiro} />
        <Redirect from='*' to='/' />
    </Switch>
);
export default Routes