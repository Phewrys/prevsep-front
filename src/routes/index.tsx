import { Switch, Route, Redirect } from 'react-router'

import Gestor from '../pages/gestor/Gestor'
import Medico from '../pages/medico/Medico'
import Enfermeiro from '../pages/enfermeiro/Enfermeiro'

import Login from '../pages/login/index'
import PrivateRoutes from './PrivateRoutes'
import Request from '../requests/Request'

const Routes = () => {
    
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoutes path='/gestor' component={Gestor} roleName="GESTOR" />
            <PrivateRoutes path='/medico' component={Medico} roleName="MEDICO" />
            <PrivateRoutes path='/enfermeiro' component={Enfermeiro} roleName="ENFERMEIRO" />
            <PrivateRoutes path='/teste' component={Request} />
            <Redirect from='*' to='/' />
        </Switch>
    )
}
export default Routes;