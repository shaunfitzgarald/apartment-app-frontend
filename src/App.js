import React, {useState} from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentEdit from "./pages/ApartmentEdit"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import mockApartments from "./mockApartments.js"
import mockUsers from "./mockUsers.js"
import './App.css';
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex"
import background from './assets/back.jpg'


const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
    <Header/>
    <Home />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apartments" element={<ApartmentIndex />} />
      <Route path="/apartmentsshow" element={<ApartmentShow />} />
      <Route path="/apartmentsnew" element={<ApartmentNew />} />
      <Route path="/apartmentsedit" element={<ApartmentEdit />} />
      <Route path="/myapartments" element={<ApartmentProtectedIndex />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
