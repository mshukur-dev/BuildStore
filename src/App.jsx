import { createBrowserRouter, RouterProvider } from "react-router";
import { Suspense, useEffect } from "react";
import {
    Box,
    CircularProgress,
    createTheme,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Aos from "aos";
import "aos/dist/aos.css";
import {
    Cart,
    Contact,
    Delivery,
    Home,
    NotFound,
    Payment,
    PrivacyPolicy,
    ProductDetails,
    ProductsFilter,
} from "./router/router";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import { GuestRoute } from "./components/auth/GuestRoute";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { CartProvider } from "./context/CartContext";

const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#fff",
        },
        text: {
            primary: "#000",
            secondary: "#B3B3B2",
        },
    },
    typography: {
        fontFamily: '"Lexend", sans-serif',
        fontSize: 18,
        h1: {
            fontWeight: 500,
        },
        button: {
            textTransform: "none",
        },
    },
});

function App() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);
    const loaderFallback = (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                bgcolor: "background.default",
            }}
        >
            <CircularProgress color="primary" />
        </Box>
    );

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: (
                        <ProtectedRoute>
                            <Suspense fallback={loaderFallback}>
                                <Home />
                            </Suspense>
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/contacts",
                    element: (
                        <ProtectedRoute>
                            <Suspense fallback={loaderFallback}>
                                <Contact />
                            </Suspense>
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/delivery",
                    element: (
                        <ProtectedRoute>
                            <Suspense fallback={loaderFallback}>
                                <Delivery />
                            </Suspense>
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/payment",
                    element: (
                        <ProtectedRoute>
                            <Suspense fallback={loaderFallback}>
                                <Payment />
                            </Suspense>
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/privacy-policy",
                    element: (
                        <ProtectedRoute>
                            <Suspense fallback={loaderFallback}>
                                <PrivacyPolicy />
                            </Suspense>
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/cart",
                    element: (
                        <ProtectedRoute>
                            <Suspense fallback={loaderFallback}>
                                <Cart />
                            </Suspense>
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/products-filter/:id",
                    element: (
                        <ProtectedRoute>
                            <Suspense fallback={loaderFallback}>
                                <ProductsFilter />
                            </Suspense>
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/product/:id",
                    element: (
                        <ProtectedRoute>
                            <Suspense fallback={loaderFallback}>
                                <ProductDetails />
                            </Suspense>
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "*",
                    element: (
                        <ProtectedRoute>
                            <Suspense fallback={loaderFallback}>
                                <NotFound />
                            </Suspense>
                        </ProtectedRoute>
                    ),
                },
            ],
        },
        {
            path: "/login",
            element: (
                <GuestRoute>
                    <Suspense fallback={loaderFallback}>
                        <Login />
                    </Suspense>
                </GuestRoute>
            ),
        },
    ]);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <CartProvider>
                    <RouterProvider router={router} />
                </CartProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
