'use client'
import { Suspense } from "react";
import IsAuth from "../utils/auth";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import ECommerce from "../components/E-commerce";
 import Loader from "../components/Loader";

const Index = () => {
 
  return (
<Suspense fallback={<Loader />}>
    <DefaultLayout>
      {/* <main className=" h-screen flex justify-center items-center">
        <p>Dashboard {localStorage.getItem('username')}</p>
        <br />
        <button onClick={handleLogOut}>Logout</button>
      </main> */}
      <ECommerce />
      </DefaultLayout>
    </Suspense>
  );
};


export default IsAuth(Index);