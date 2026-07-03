import React from "react";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";

export default function OrderForm({ totalItems, totalAmount }) {
    return (
        <Box
            sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #F1F5F9",
                borderRadius: "4px",
                p: "40px 32px",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700,
                    color: "#0F172A",
                    textAlign: "center",
                    mb: "32px",
                    fontSize: "20px",
                }}
            >
                Оформление заказа
            </Typography>

            {/* Поля ввода */}
            <TextField
                fullWidth
                label="Имя"
                required
                variant="outlined"
                placeholder="Имя"
                slotProps={{ inputLabel: { shrink: true } }}
                sx={{
                    mb: "20px",
                    "& .MuiOutlinedInput-root": { borderRadius: "4px" },
                }}
            />

            <TextField
                fullWidth
                label="Номер телефона"
                required
                variant="outlined"
                placeholder="Номер телефона"
                slotProps={{ inputLabel: { shrink: true } }}
                sx={{
                    mb: "20px",
                    "& .MuiOutlinedInput-root": { borderRadius: "4px" },
                }}
            />

            <TextField
                fullWidth
                label="Почта"
                variant="outlined"
                placeholder="Почта"
                slotProps={{ inputLabel: { shrink: true } }}
                sx={{
                    mb: "20px",
                    "& .MuiOutlinedInput-root": { borderRadius: "4px" },
                }}
            />

            <TextField
                fullWidth
                select
                label="Выберите склад"
                defaultValue=""
                variant="outlined"
                sx={{
                    mb: "32px",
                    "& .MuiOutlinedInput-root": { borderRadius: "4px" },
                }}
            >
                <MenuItem value="irkutsk">
                    г. Иркутск, ул. Ракитная, стр 4
                </MenuItem>
                <MenuItem value="sklad_2">Региональный склад Сев-Зад</MenuItem>
            </TextField>

            {/* Блок суммирования */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "24px",
                }}
            >
                <Typography
                    sx={{ fontSize: "16px", fontWeight: 600, color: "#475569" }}
                >
                    {totalItems} товаров
                </Typography>
                <Typography
                    sx={{ fontSize: "20px", fontWeight: 700, color: "#0A61DE" }}
                >
                    Итого: {totalAmount.toLocaleString("ru-RU")} ₽
                </Typography>
            </Box>

            {/* Основная синяя кнопка */}
            <Button
                fullWidth
                variant="contained"
                disableElevation
                sx={{
                    backgroundColor: "#0A61DE",
                    color: "#FFFFFF",
                    py: "14px",
                    fontSize: "14px",
                    fontWeight: 600,
                    borderRadius: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    "&:hover": {
                        backgroundColor: "#024EB8",
                    },
                }}
            >
                Оформить заказ
            </Button>

            {/* Дисклеймер соглашения */}
            <Typography
                sx={{
                    fontSize: "10px",
                    color: "#94A3B8",
                    textAlign: "center",
                    lineHeight: "14px",
                    mt: "16px",
                    px: 1,
                }}
            >
                Нажимая кнопку "оформить заказ", вы автоматически соглашаетесь с{" "}
                <Box
                    component="span"
                    sx={{ textDecoration: "underline", cursor: "pointer" }}
                >
                    политикой обработки персональных данных
                </Box>{" "}
                и предоставляете{" "}
                <Box
                    component="span"
                    sx={{ textDecoration: "underline", cursor: "pointer" }}
                >
                    согласие
                </Box>{" "}
                на обработку ваших персональных данных
            </Typography>
        </Box>
    );
}
