import { useContext} from 'react';
import { AuthContext } from '../Context/AuthContext';
function PrivateRoute(){
    const [isAuth]=useContext(AuthContext)
}
export default PrivateRoute;