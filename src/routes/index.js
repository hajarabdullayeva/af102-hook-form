import MainRoot from "../Pages/Client/MainRoot";
import Home from "../Pages/Client/Home";
import About from "../Pages/Client/About";
import Products from "../Pages/Client/Products";
// import ProductDetail from "../Pages/Client/ProductDetail";
import AdminRoot from "../Pages/Admin/AdminRoot";
import Dashbord from "../Pages/Admin/Dashbord";
import ProductsTable from "../Pages/Admin/ProductsTable"
import AddProducts from "../Pages/Admin/AddProducts";

export const ROUTES = [
  {
    path: "",
    element: <MainRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      // {
      //   path: "/products/:id",
      //   element: <ProductDetail />,
      // },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      { 
        path: "", 
        element: <Dashbord/>
      },
      {
        path: "admin/products-table",
        element: <ProductsTable/>
      }, 
      {
        path: "admin/add-products",
        element: <AddProducts/>
      }
    ]
  },
];

