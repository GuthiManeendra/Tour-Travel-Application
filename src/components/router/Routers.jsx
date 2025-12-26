import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"

export const Routers =()=>{
    return(
         <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/home' element={<Home/> } />
        {/* <Route path='/tours' element={<Tours/> } />
        <Route path='/tours/:id' element={<TourDetails/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/register' element={<Register/> } />
        <Route path='/tours/search' element={<SearchResultList/> } />
        <Route path='/thank-you' element={<ThankYou/> } /> */}
    </Routes>
    )
}