import React from "react";
import Hero from "../components/Home/Hero";
import CatalogSection1 from "../components/Home/CatalogSection1";
import CatalogSection2 from "../components/Home/CatalogSection2";
import { Button, Divider } from "@mui/material";
import CatalogSection3 from "../components/Home/CatalogSection3";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Hero />
            <CatalogSection1 />
            <Divider sx={{ my: "20px" }} />
            <CatalogSection2 />
            <Divider sx={{ my: "20px" }} />
            <CatalogSection3 />
            <Button
                onClick={() => {
                    navigate("/products-filter/all");
                }}
                variant="contained"
                sx={{
                    textAlign: "center",
                    display: "block",
                    bgcolor: "#167FFE",
                    fontSize: "20px",
                    px: "60px",
                    py: "10px",
                    margin: "0 auto 60px auto",
                }}
            >
                Показать еще
            </Button>
        </div>
    );
};

export default Home;
