'use client'
import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('./dashboard'), { ssr: false })

const Dashboard = () => {
  return (
   <div>
    <NoSSR />
   </div>
  );
};


export default (Dashboard);