"use client";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";


export default function IsAuth(Component: any) {
  return function isAuth(props: any) {
    const cookies = new Cookies();
    const router = useRouter()
    const token = cookies.get("TOKEN");

    useEffect(() => {
      if (!token) {
        router.push("/");
      }

    }, []);

    if (!token) {
      router.push("/");
      return null;
    }
    return <Component {...props} />;
  }
}