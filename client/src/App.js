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
import Edit from "./Components/Edit"
import './App.css';
import Detail,{detailLoader,edit,remove} from "./Components/Detail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />}/>
      <Route path="pokemon" element={<Pokemon/>} loader={pokemonLoader} action={addAction}/>
      <Route path="pokemon/:id" element={<Detail/>} loader={detailLoader} action={edit}/>
      <Route path="pokemon/:id/add" element={<Add/>}/>
      <Route path="pokemon/:id/edit" element={<Edit/>} loader={detailLoader} />
      <Route path="pokemon/:id/remove" element={<Detail/>} action={remove} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;
export default App;
