import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CartItem({ item, onIncrement, onDecrement, onRemove }) {
    // Поддержка как фейковых данных (item.title), так и данных из Context API (item.product.name)
    const title =
        item.title ||
        item.product?.name ||
        item.product?.title ||
        "Без названия";
    const image = item.image || item.product?.image || "";
    const price = item.price || item.product?.price || 0;
    const quantity = item.quantity || 1;
    const total = price * quantity;

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                padding: "20px 24px",
                borderRadius: "4px",
                border: "1px solid #F1F5F9",
                mb: 2,
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.02)",
            }}
            className="max-mb:flex-col max-mb:items-start max-mb:gap-4"
        >
            <Box
                sx={{
                    width: "80px",
                    height: "80px",
                    flexShrink: 0,
                    mr: "24px",
                }}
                className="max-mb:mr-0 max-mb:w-full max-mb:h-[200px]"
            >
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>

            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "80px",
                }}
                className="max-mb:w-full"
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                    }}
                >
                    <Typography
                        sx={{
                            color: "#333",
                            fontSize: "16px",
                            pr: 2,
                            lineHeight: 1.4,
                        }}
                    >
                        {title}
                    </Typography>
                    <IconButton
                        onClick={onRemove}
                        sx={{
                            color: "#FF506F",
                            p: 0,
                            "&:hover": {
                                background: "transparent",
                                opacity: 0.7,
                            },
                        }}
                        disableRipple
                    >
                        <CloseIcon
                            sx={{
                                fontSize: "22px",
                                stroke: "#FF506F",
                                strokeWidth: 0.5,
                            }}
                        />
                    </IconButton>
                </Box>

                {/* Нижняя часть: Цена, счетчик, итого */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                    className="max-mb:flex-col max-mb:items-start max-mb:gap-4"
                >
                    {/* Контейнер для цены за шт и счетчика */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: "24px", md: "40px" },
                        }}
                        className="max-mb:w-full max-mb:justify-between"
                    >
                        <Typography
                            sx={{
                                color: "#64748B",
                                fontWeight: 700,
                                fontSize: "15px",
                            }}
                        >
                            {price.toLocaleString("ru-RU")} ₽/шт.
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                            }}
                        >
                            <button
                                onClick={onDecrement}
                                className="w-8 h-8 flex items-center justify-center border border-[#E2E8F0] text-[#64748B] hover:bg-[#F8FAFC] transition-colors cursor-pointer bg-white"
                            >
                                <RemoveIcon sx={{ fontSize: "16px" }} />
                            </button>
                            <Box className="w-8 h-8 flex items-center justify-center border border-[#E2E8F0] text-[#333] text-[14px] bg-white">
                                {quantity}
                            </Box>
                            <button
                                onClick={onIncrement}
                                className="w-8 h-8 flex items-center justify-center border border-[#E2E8F0] text-[#64748B] hover:bg-[#F8FAFC] transition-colors cursor-pointer bg-white"
                            >
                                <AddIcon sx={{ fontSize: "16px" }} />
                            </button>
                        </Box>
                    </Box>

                    {/* Итого */}
                    <Typography
                        sx={{
                            color: "#0A61DE",
                            fontWeight: 700,
                            fontSize: "16px",
                        }}
                    >
                        Итого: {total.toLocaleString("ru-RU")} ₽
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
