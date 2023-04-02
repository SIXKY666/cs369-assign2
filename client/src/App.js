import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import layout
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home"
import Pokemon,{pokemonLoader,addAction} from "./Components/Pokemon"
import Add from "./Components/Add"
import './App.css';
import Detail,{detailLoader} from "./Components/Detail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />}/>
      <Route path="pokemon" element={<Pokemon/>} loader={pokemonLoader} action={addAction}/>
      <Route path="pokemon/:id" element={<Detail/>} loader={detailLoader}/>
      <Route path="pokemon/:id/add" element={<Add/>}/>
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;
export default App;
