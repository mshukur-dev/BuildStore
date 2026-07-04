import React, { useState, useContext } from "react";
import { Box, Typography, IconButton, InputBase, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

export default function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();
    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () =>
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1);
    };

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product?.id}`);
            }}
            className="h-[500px] flex flex-col gap-6 w-full max-w-[320px] mx-auto shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white"
        >
            <div className="relative">
                <img
                    className="w-full h-[220px] object-cover"
                    src={product?.image}
                    alt={product?.name || "Product"}
                />
                {product?.discount && (
                    <span className="absolute top-[10px] left-[0px] bg-[#FF506F] text-white text-xs px-2 py-1 rounded">
                        Это хит
                    </span>
                )}
            </div>
            <div className="text-center flex flex-col gap-[30px] py-[20px] px-[20px]">
                <h3 className="text-[16px] text-[#1E2126] ">
                    {product?.name ||
                        "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3"}
                </h3>
                <h2 className=" font-black text-[30px] text-[#1D6BDD] ">
                    {product?.price
                        ? `${product.price.toLocaleString("ru-RU")} ${product?.currency}/${product?.unit}.`
                        : "2 491 ₽/шт."}
                </h2>
                <div className="flex items-center justify-between">
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDecrement();
                        }}
                        sx={{
                            border: "1px solid #C7C7C7",
                            borderRadius: "0",
                            color: "#1E2126",
                        }}
                    >
                        <RemoveIcon sx={{ fontSize: "26px" }} />
                    </IconButton>
                    <span className="border border-[#C7C7C7] px-4 py-2 mx-2 text-center">
                        {quantity}
                    </span>
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation();
                            handleIncrement();
                        }}
                        sx={{
                            border: "1px solid #C7C7C7",
                            borderRadius: "0",
                            color: "#1E2126",
                        }}
                    >
                        <AddIcon sx={{ fontSize: "26px" }} />
                    </IconButton>
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart();
                        }}
                        sx={{
                            borderRadius: "0",
                            bgcolor: "#1D6BDD",
                            ml: 2,
                            "&:hover": {
                                backgroundColor: "#145EB5",
                            },
                        }}
                    >
                        <ShoppingCartIcon
                            sx={{ color: "white", fontSize: "26px" }}
                        />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
