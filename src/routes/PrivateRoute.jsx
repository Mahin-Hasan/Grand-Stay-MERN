import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Shared/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) return <Loader />
    if (user) return children
    return <Navigate to='/login' state={{ from: location }} replace='true' />
    //state is used to store the redirected url location to later replace to that exact location when being logged in
};

export default PrivateRoute;