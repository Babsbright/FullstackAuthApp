'use client'
import { Suspense } from "react";
import isAuth from "../utils/auth";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import ECommerce from "../components/E-commerce";
 

const Index = () => {
 
  return (
<>
    <DefaultLayout>
      {/* <main className=" h-screen flex justify-center items-center">
        <p>Dashboard {localStorage.getItem('username')}</p>
        <br />
        <button onClick={handleLogOut}>Logout</button>
      </main> */}
      <ECommerce />
      </DefaultLayout>
    </>
  );
};


export default isAuth(Index);