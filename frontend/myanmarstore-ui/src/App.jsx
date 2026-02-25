import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import { Outlet, useNavigation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigation = useNavigation();
console.log(navigation.state);
  return (
    <>
    <Header />
    {
      navigation.state === "loading" ? (

        <div className="flex items-center justify-center min-h-[852px]">
          <span className="text-4xl font-semibold text-primary dark:text-light">
            Loading...
          </span>
        </div>
      ): (<Outlet/>)
    }
    <Footer />
    </>
  );
}

export default App;
