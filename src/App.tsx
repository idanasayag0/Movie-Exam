import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  SEARCH_PAGE_PATH,
  ORDER_PAGE_PATH,
  HISTORY_PAGE_PATH,
} from './constants';

import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import HistoryPage from "./pages/HistoryPage";
import './App.css';
import { MovieProvider } from './components/MovieProvider';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={SEARCH_PAGE_PATH} element={<Navbar />}>
      <Route index element={<HomePage />}/>
      <Route path={`${ORDER_PAGE_PATH}:id`} element={<OrderPage />} />
      <Route path={HISTORY_PAGE_PATH} element={<HistoryPage />} />
    </Route>
  )
);

const App = ()=>{
  return(
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  ) 
}

export default App;
