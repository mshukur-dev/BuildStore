import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home"));
export const Contact = lazy(() => import("../pages/Contact"));
export const Payment = lazy(() => import("../pages/Payment"));
export const Delivery = lazy(() => import("../pages/Delivery"));
export const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
export const NotFound = lazy(() => import("../pages/NotFound"));
export const Login = lazy(() => import("../pages/Login"));
export const Cart = lazy(() => import("../pages/Cart"));
export const ProductsFilter = lazy(() => import("../pages/ProductsFilter"));
export const ProductDetails = lazy(() => import("../pages/ProductDetails"));
