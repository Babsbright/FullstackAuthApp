
import Cookies from 'universal-cookie';
import { redirect } from 'next/navigation';

function ProctectedRoute(WrappedComponent) {
  return (props) => {
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");

    if (!token) {
      redirect('/login');
    }

    return <WrappedComponent {...props} />;
  }
};

ProctectedRoute.displayName = 'ProctectedRoute';

export default ProctectedRoute;