//dhyaan dene ki zarurat hai
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Buy from './pages/Buy'
import { Route, Routes } from 'react-router-dom'
// import Product from './components/Product/Product'

function App(){
  return (
      <div className="container">
        <Routes>
          <Route path ="/" element={<Home />}></Route>
          <Route path ="/Cart" element={<Cart />}></Route>
          <Route path ="/Profile" element={<Profile />}></Route>
          <Route path ="/Auth" element={<Auth />}></Route>
          <Route path ="/Buy/:productId" element={<Buy />}>
            {/* <Route path=":productId" element={<Product />}/> */}
          </Route>
        </Routes>
      </div>
  );
}
export default App
