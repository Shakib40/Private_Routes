import './App.css';
import {Route , Routes} from "react-router-dom";
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';

import {Contact} from './components/Contact';
import {About} from './components/About';
import {Products} from './components/Products';
import {ProductDetails} from './components/ProductDetails';
import{Users} from './components/User';
import {UserDetails} from './components/UserDetails';

import {Login} from './components/Login';
import {Register} from './components/Register';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      
      <Routes>
        <Route path="/" element={ <Home/> }></Route>

        <Route path="/about" element={ <About/> }></Route>

        <Route path="/contactus" element={ <Contact/> }></Route>

        <Route path="/login" element={ <Login/> }></Route>
        <Route path="/register" element={ <Register/> }></Route>
         
        <Route path="/users" element={ <Users/> }></Route>
        <Route path="/users/:usersId" element={ <UserDetails />}></Route>

        <Route path="/products" element={ <Products/> }></Route>
        <Route path="/products/:productsId" element={ <ProductDetails/> }></Route>


        <Route path="*" element={ <div>Page not found</div> }></Route>

      </Routes>

    </div>
  );
}

export default App;
