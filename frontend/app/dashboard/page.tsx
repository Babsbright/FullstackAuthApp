'use client'
import dynamic from 'next/dynamic'
 
const DashBoardPage = dynamic(() => import("./dashboard"), {
  ssr: false,
});
const Dashboard = () => {
  return (
   <div>
    <DashBoardPage />
   </div>
  );
};


export default (Dashboard);