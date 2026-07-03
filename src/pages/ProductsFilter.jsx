import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router";
import { api } from "../api/axios";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
const ProductsFilter = () => {
    const [catalog, setCatalog] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    const isAll = id === "all";

    async function getCatalog() {
        if (isAll) return;
        try {
            const data = await api.get(`catalogs/${id}`);
            setCatalog(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    async function getProducts() {
        try {
            const url = isAll
                ? `products?limit=100`
                : `products?catalogId=${id}`;
            const data = await api.get(url);
            setProducts(data.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setLoading(true);
        setCatalog([]);
        setProducts([]);
        Promise.all([getCatalog(), getProducts()]).finally(() =>
            setLoading(false),
        );
    }, [id]);

    return (
        <div className="py-12">
            <div className="max-w-[1620px] mx-auto">
                <Breadcrumbs
                    separator={
                        <NavigateNextIcon
                            sx={{ fontSize: "16px", color: "#287FE8" }}
                        />
                    }
                    sx={{ mb: 4 }}
                >
                    <Link
                        underline="hover"
                        color="#707070"
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/");
                        }}
                        sx={{
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        Главная
                    </Link>
                    <Typography color="#111111" sx={{ fontSize: "14px" }}>
                        {isAll ? "Все товары" : catalog.name}
                    </Typography>
                </Breadcrumbs>
                {loading ? (
                    <Loader size="64px" />
                ) : (
                    <div className="grid grid-cols-4 gap-15 max-mb:grid-cols-1">
                        {products.length > 0 ? (
                            products.map((item) => (
                                <ProductCard key={item.id} product={item} />
                            ))
                        ) : (
                            <div className="text-[30px] text-[#707070]">
                                Товаров нет...
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsFilter;
