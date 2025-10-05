import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Address from "./Pages/Address";
import CheckOut from "./Pages/CheckOut";
import Index from "./Pages/Index";
import Coupon from "./Pages/Coupon";
import Profile from "./Pages/Profile";
import Order from "./Pages/Order";
import Product from "./Pages/Product";
import ProductCategory from "./Pages/ProductCategory";
import Purchase from "./Pages/Purchase";
import WishList from "./Pages/WishList";
import Root from "./Pages/Root";
import EditProfile from "./Pages/EditProfile";

const routes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Index /> },
      {
        path: "profile",
        element: <Profile />,
        children: [
          { path: "edit-profile", element: <EditProfile /> },
          { path: "address", element: <Address /> },
          { path: "coupon", element: <Coupon /> },
          { path: "order", element: <Order /> },
          { path: "wish-list", element: <WishList /> },
        ],
      },
      { path: "check-out", element: <CheckOut /> },
      { path: "product", element: <Product /> },
      { path: "product-category", element: <ProductCategory /> },
      { path: "purchase", element: <Purchase /> },
    ],
  },
];

export default routes;
