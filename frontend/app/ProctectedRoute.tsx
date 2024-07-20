
import Cookies from 'universal-cookie';
import { redirect } from 'next/navigation';
import { JSX } from 'react';

function ProctectedRoute(WrappedComponent:any) {
  return (props:any) => {
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