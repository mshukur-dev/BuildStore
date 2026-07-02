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
import { Contact, Home } from "./router/router";
import Layout from "./layout/Layout";

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
                        <Suspense fallback={loaderFallback}>
                            <Home />
                        </Suspense>
                    ),
                },
                {
                    path: "/contact",
                    element: (
                        <Suspense fallback={loaderFallback}>
                            <Contact />
                        </Suspense>
                    ),
                },
            ],
        },
    ]);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
