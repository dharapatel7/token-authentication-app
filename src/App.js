import Navbar from './LayoutComponet/Navbar';
import React,{useEffect, useState} from'react'
import NavbarLogin from './LayoutComponet/NavbarLogin';


function App() {
  const [login, setlogin] = useState(false);
  useEffect(() => {
    //below code works
    if(localStorage.getItem('login')==null)
    {
      setlogin(false);
    }
    else{
          const{login} =JSON.parse( localStorage.getItem('login'));
          setlogin(login);
          // console.log(login);
          // console.log(token);
    }
        });
  return (

    <>
    {
      !login?<Navbar/>:<NavbarLogin/>
    }

<br></br>

    </>
  );
}

export default App;
