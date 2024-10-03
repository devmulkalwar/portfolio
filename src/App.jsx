import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <div className="flex flex-col min-h-screen max-w-full">
      <Header />
      <main className="flex flex-grow ">
        <Outlet />
      </main>
     <Footer/>
    </div>
  );
}

export default App;
