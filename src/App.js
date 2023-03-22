import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import layout
import MainLayout from "./Layout/MainLayout";
import Navbar from "./Components/Navbar";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
    </>
  )
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
  //       <Route index element={<Home />} />
  //       <Route path="products" element={<ProductLayout />}>
  //         <Route index element={<ProductsPage />} loader={productsLoader} errorElement={<ErrorPage />} />
  //         <Route path=":id" element={<ProductDetailPage />} loader={detailLoader} />
  //       </Route>
  //       <Route path="about" element={<About />} />
  //     </Route>
  //   )
  // );

}

export default App;
