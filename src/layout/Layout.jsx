import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
