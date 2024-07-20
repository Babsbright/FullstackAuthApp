'use client'
import DefaultLayout from "../components/Layouts/DefaultLayout";
import ECommerce from "../components/E-commerce";
import ProctectedRoute from "../ProctectedRoute";
localStorage.theme = 'light'
const Dash = () => {
 
  return (
    <DefaultLayout>
      <ECommerce />
      </DefaultLayout>
  );
};


export default ProctectedRoute(Dash);