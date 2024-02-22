import './App.css'
import Header from './components/common/header/Header'
import Category from './components/category/Category'
import Products from './components/Products/Products'
import Footer from './components/common/footer/Footer'
import Admin from './components/category/Admin/Admin'
import SignUp from './components/Login/signup/SignUp'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import Profile from './components/Profile/Profile'



function App() {


  return (
    <>
      <Header />
      <Category />
      <Products />
      <Footer />
      <Login />
      <SignUp />
      <Cart />
      <Profile />
      <Admin />
    </>
  )
}

export default App
