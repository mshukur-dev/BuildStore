import React from "react";
import Hero from "../components/Home/Hero";
import CatalogSection1 from "../components/Home/CatalogSection1";
import CatalogSection2 from "../components/Home/CatalogSection2";
import { Divider } from "@mui/material";

const Home = () => {
    return (
        <div>
            <Hero />
            <CatalogSection1 />
            <Divider sx={{ my: "20px" }} />
            <CatalogSection2 />
        </div>
    );
};

export default Home;
