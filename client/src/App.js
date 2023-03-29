import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import layout
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home"
import Pokemon,{pokemonLoader} from "./Components/Pokemon"
import './App.css';
import Detail,{detailLoader} from "./Components/Detail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />}/>
      <Route path="pokemon" element={<Pokemon/>} loader={pokemonLoader}/>
      <Route path="pokemon/:id" element={<Detail/>} loader={detailLoader}/>
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;
export default App;
