import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const DrugsList = lazy(() => import("../components/DrugsList")); 

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/shops" element={<Home />} >
          <Route path=":id" element={<DrugsList />} />
          </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Route>
    </Routes>
  );
};
