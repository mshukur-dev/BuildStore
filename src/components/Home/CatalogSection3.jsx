import React, { useEffect, useState } from "react";
import ProductSwiper from "../ProductSwiper";
import { Button } from "@mui/material";
import { api } from "../../api/axios";
import { useNavigate } from "react-router";
import Loader from "../Loader";

export default function CatalogSection3() {
    const navigate = useNavigate();
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    async function getProducts() {
        try {
            const { data } = await api.get(`products?catalogId=3`);
            setProducts(data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div className="px-4 py-10">
            <div className=" max-w-[1620px] mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[50px] max-mb:text-[30px]">
                        Кровля и водосток
                    </h2>
                    <Button
                        sx={{
                            display: { xs: "none", md: "block" },
                            bgcolor: "#167FFE",
                            color: "white",
                            px: "50px",
                            py: "10px",
                            fontSize: "20px",
                        }}
                        onClick={() => navigate(`/products-filter/3`)}
                    >
                        Смотреть все
                    </Button>
                </div>
                {loading ? (
                    <Loader />
                ) : (
                    <ProductSwiper products={products} />
                )}
                <div className="flex justify-center items-center mt-6">
                    <Button
                        sx={{
                            display: { xs: "block", md: "none" },
                            bgcolor: "#167FFE",
                            color: "white",
                            px: "50px",
                            py: "10px",
                            fontSize: "20px",
                        }}
                    >
                        Смотреть все
                    </Button>
                </div>
            </div>
        </div>
    );
}
