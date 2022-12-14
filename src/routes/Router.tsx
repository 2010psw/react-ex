import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId/*" element={<Coin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
