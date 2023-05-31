import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import HistoryPage from "./pages/HistoryPage";
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<HomePage />}/>
      <Route path="/order" element={<OrderPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Route>
  )
);

const App = ()=>{
  return <RouterProvider router={router} />;
}

export default App;