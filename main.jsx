import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Dashboard from './pages/Pages-array1/Dashboard/Dashboard';
import Team from './pages/Pages-array1/Team/Team';
import Contact from './pages/Pages-array1/Contact/Contact';
import Calendar from './pages/Calander/Calendar';
import Profile from './pages/Pages-array2/Profile/Profile';
import FAQ from './pages/Pages-array2/FAQ';
import Barchart from './pages/Pages-arra3/Barchart';
import PieChart from './pages/Pages-arra3/PieChart';
import Linechart from './pages/Pages-arra3/Line/Linechart';
import Geographychart from './pages/Pages-arra3/Geography/Geographychart';
import Invoice from './pages/Pages-array1/invoice Data/Invoice.jsx'
import NotFound from './Notfound'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      
    <Route index element={<Dashboard />}/>
    <Route path='team' element={<Team/>} />
    <Route path='contact' element={<Contact/>}/>
    <Route path='invoice' element={<Invoice/>} />

    <Route path='Profile' element={<Profile/>}/>
    <Route path='Calendar' element={<Calendar/>} />
    <Route path='FAQ' element={<FAQ/>} />

    <Route path='barchart' element={<Barchart/>} />
    <Route path='PieChart' element={<PieChart/>} />
    <Route path='Linechart' element={<Linechart/>} />
    <Route path='geographychart' element={<Geographychart/>} />



    <Route path='*' element={<NotFound/>} />

    </Route>

  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

