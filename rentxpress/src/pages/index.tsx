import React from 'react';
import Home from "./home";
import LoaderComponent  from '../components/home/loader/main-load';
const index: React.FC = () => {
  return (
    <div className='w-full h-auto'>
      {/* <LoaderComponent /> */}
      <Home/>
    </div>
  );
};

export default index;