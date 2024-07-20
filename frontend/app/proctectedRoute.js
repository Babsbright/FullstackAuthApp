
import Cookies from 'universal-cookie';
import { redirect } from 'next/navigation';

function WithAuth(WrappedComponent) {
  return (props) => {
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");

    if (!token) {
      redirect('/login');
    }

    return <WrappedComponent {...props} />;
  }
};

WithAuth.displayName = 'WithAuth';

export default WithAuth;