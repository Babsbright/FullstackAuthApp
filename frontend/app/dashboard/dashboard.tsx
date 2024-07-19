'use client'
import IsAuth from "../utils/auth";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import ECommerce from "../components/E-commerce";

const Index = () => {
 
  return (
    <DefaultLayout>
      <ECommerce />
      </DefaultLayout>
  );
};


export default IsAuth(Index);