'use client' 
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";


export default function Home() {
  const router = useRouter();
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  useEffect(() => {
      if (token) {
          router.push("/dashboard");
      }else{
        router.push("/login");
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
  <>
 
  </>
  );
}
