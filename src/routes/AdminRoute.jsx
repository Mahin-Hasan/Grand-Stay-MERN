import { Navigate } from 'react-router-dom';
import Loader from '../components/Shared/Loader';
import useRole from '../hooks/useRole';

const AdminRoute = ({ children }) => {
    const [role, isLoading] = useRole()//loading must be set = true or else it will directly return to dashboard 
    if (isLoading) return <Loader />
    if (role === 'admin') return children
    return <Navigate to='/dashboard' />
  
};

export default AdminRoute;