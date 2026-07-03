import React, { useContext } from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import CartItem from "../components/cart/CartItem";
import OrderForm from "../components/cart/OrderForm";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
    const { cart, updateQuantity, removeFromCart, clearCart } =
        useContext(CartContext);
    console.log(cart);

    const handleIncrement = (productId) => {
        const item = cart.find((i) => i.product.id === productId);
        if (item) updateQuantity(productId, item.quantity + 1);
    };

    const handleDecrement = (productId) => {
        const item = cart.find((i) => i.product.id === productId);
        if (item) updateQuantity(productId, item.quantity - 1);
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = cart.reduce(
        (acc, item) => acc + (item.product?.price || 0) * item.quantity,
        0,
    );

    return (
        <Box
            sx={{
                backgroundColor: "#FAFAFA",
                minHeight: "100vh",
                pt: "40px",
                pb: "8px",
            }}
        >
            {/* Хлебные крошки сверху макета */}
            <Container maxWidth={false} sx={{ maxWidth: "1620px" }}>
                <Typography
                    sx={{ fontSize: "12px", color: "#94A3B8", mb: "24px" }}
                >
                    Главная &nbsp;•&nbsp;{" "}
                    <Box component="span" sx={{ color: "#1E293B" }}>
                        Корзина
                    </Box>
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        mb: "32px",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            color: "#0F172A",
                            fontSize: "32px",
                        }}
                    >
                        Корзина
                    </Typography>
                    {cart.length > 0 && (
                        <Button
                            onClick={clearCart}
                            sx={{
                                color: "#64748B",
                                fontSize: "20px",
                                textTransform: "none",
                                fontWeight: 500,
                                "&:hover": {
                                    backgroundColor: "transparent",
                                    color: "#0F172A",
                                },
                            }}
                        >
                            Очистить корзину
                        </Button>
                    )}
                </Box>

                {cart.length === 0 ? (
                    <Typography sx={{ color: "#64748B", mt: 4 }}>
                        Ваша корзина пуста.
                    </Typography>
                ) : (
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, lg: 8 }}>
                            {cart.map((item) => (
                                <CartItem
                                    key={item.product.id}
                                    item={item}
                                    onIncrement={() =>
                                        handleIncrement(item.product.id)
                                    }
                                    onDecrement={() =>
                                        handleDecrement(item.product.id)
                                    }
                                    onRemove={() =>
                                        removeFromCart(item.product.id)
                                    }
                                />
                            ))}
                        </Grid>

                        <Grid size={{ xs: 12, lg: 4 }}>
                            <OrderForm
                                totalItems={totalItems}
                                totalAmount={totalAmount}
                            />
                        </Grid>
                    </Grid>
                )}
            </Container>
        </Box>
    );
}
