"use client";
import { JSX, useEffect } from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";


export default function isAuth(Component: any) {

  return (props: JSX.IntrinsicAttributes) => {
    const cookies = new Cookies();
    const router = useRouter()
    const token = cookies.get("TOKEN");
    useEffect(() => {
      // If the user is not authenticated, redirect to the login page
      if (!token) {
        router.push('/login');
      }
    }, [token, router]);

    // If the user is authenticated, render the WrappedComponent
    // Otherwise, render null while the redirection is in progress
    return token ? <Component {...props} /> : null;
  };
}