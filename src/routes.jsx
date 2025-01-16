import Address from "./Pages/Address"
import CheckOut from "./Pages/CheckOut"
import Index from "./Pages/Index"
import Coupon from "./Pages/Coupon"
import EditProfile from "./Pages/EditProfile"
import Order from "./Pages/Order"
import Product from "./Pages/Product"
import ProductCategory from "./Pages/ProductCategory"
import Purchase from "./Pages/Purchase"
import WishList from "./Pages/WishList"

const routes = [
    { path: '/', element: <Index /> },
    { path: '/address', element: <Address /> },
    { path: '/check-out', element: <CheckOut /> },
    { path: '/coupon', element: <Coupon /> },
    { path: '/edit-profile', element: <EditProfile /> },
    { path: '/order', element: <Order /> },
    { path: '/product', element: <Product /> },
    { path: '/product-category', element: <ProductCategory /> },
    { path: '/purchase', element: <Purchase /> },
    { path: '/wish-list', element: <WishList /> },
]

export default routes