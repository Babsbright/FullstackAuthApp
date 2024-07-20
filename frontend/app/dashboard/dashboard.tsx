'use client'
import WithAuth from "../ProctectedRoute";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import ECommerce from "../components/E-commerce";

const Dash = () => {
 
  return (
    <DefaultLayout>
      <ECommerce />
      </DefaultLayout>
  );
};


export default WithAuth(Dash);