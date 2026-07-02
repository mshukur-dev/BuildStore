import React from "react";
import { Container, Typography, Breadcrumbs, Link, Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router";
// Иконки из пакета @mui/icons-material (или замени на свои SVG / картинки)
import QrCodeScannerIcon from "../assets/icons/qr.png";
import AccountBalanceWalletIcon from "../assets/icons/pay1.png";
import ReceiptLongIcon from "../assets/icons/pay2.png";

export default function PaymentPage() {
    const navigate = useNavigate();

    const blockTitleStyles = {
        fontSize: "20px",
        fontWeight: 700,
        color: "#1E2126",
        mb: 1,
    };

    const blockDescStyles = {
        fontSize: "14px",
        fontWeight: 400,
        color: "#707070",
        lineHeight: 1.6,
    };

    const reqRowStyles = {
        fontSize: "16px",
        fontWeight: 400,
        color: "#707070",
        lineHeight: 1.8,
    };

    return (
        <Container
            maxWidth={false}
            sx={{
                maxWidth: "1620px",
                px: { xs: 2, md: 4 },
                py: { xs: 3, md: 6 },
                backgroundColor: "#FFFFFF",
            }}
        >
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
                    Оплата
                </Typography>
            </Breadcrumbs>

            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: "28px", md: "44px" },
                    fontWeight: 700,
                    color: "#111111",
                    mb: 6,
                }}
            >
                Оплата
            </Typography>

            <Grid container spacing={{ xs: 6, md: 4 }}>
                <Grid size={{ xs: 12, md: 4.5 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 5,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    p: 1,
                                    border: "2px solid #0A61DE",
                                    borderRadius: "8px",
                                    color: "#0A61DE",
                                }}
                            >
                                <img src={QrCodeScannerIcon} alt="" />
                            </Box>
                            <Box>
                                <Typography sx={blockTitleStyles}>
                                    QR-кодом
                                </Typography>
                                <Typography sx={blockDescStyles}>
                                    Оплата моментально поступает на счёт
                                    продавца и позволяет избежать кассовых
                                    разрывов.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    p: 1,
                                    border: "2px solid #0A61DE",
                                    borderRadius: "8px",
                                    color: "#0A61DE",
                                }}
                            >
                                <img src={AccountBalanceWalletIcon} alt="" />
                            </Box>
                            <Box>
                                <Typography sx={blockTitleStyles}>
                                    Наличными
                                </Typography>
                                <Typography sx={blockDescStyles}>
                                    Прямая передача денег продавцу «из рук в
                                    руки».
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    p: 1,
                                    border: "2px solid #0A61DE",
                                    borderRadius: "8px",
                                    color: "#0A61DE",
                                }}
                            >
                                <img src={ReceiptLongIcon} alt="" />
                            </Box>
                            <Box>
                                <Typography sx={blockTitleStyles}>
                                    Безналичный расчет
                                </Typography>
                                <Typography sx={blockDescStyles}>
                                    Перевод осуществляется на основании
                                    указанных в реквизитах данных организации.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            pr: { md: 4 },
                        }}
                    >
                        <Typography
                            sx={{ ...blockDescStyles, color: "#555555" }}
                        >
                            Мы любим животных и стараемся поддерживать тех из
                            них, кому не посчастливилось иметь ласковых хозяев и
                            тёплый кров. Один из проверенных способов это
                            сделать — помочь благотворительному фонду «Луч
                            Добра». Благодаря их труду ежегодно сотни питомцев
                            находят свой новый дом.
                        </Typography>
                        <Typography
                            sx={{ ...blockDescStyles, color: "#555555" }}
                        >
                            Противоположная точка зрения подразумевает, что
                            независимые государства лишь добавляют фракционных
                            разногласий и представлены.
                        </Typography>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 3.5 }}>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#111111",
                            mb: 3,
                        }}
                    >
                        Платежные реквизиты:
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <Typography sx={reqRowStyles}>
                            ООО "Поставщик"
                        </Typography>

                        <Typography sx={reqRowStyles}>
                            ИНН 7713522570 / КПП 771301001
                        </Typography>

                        <Typography sx={reqRowStyles}>
                            Расчетный счет № 40702810400180000662
                        </Typography>

                        <Typography sx={reqRowStyles}>
                            ОАО «Отп банк» г. Москва
                        </Typography>

                        <Typography sx={reqRowStyles}>
                            Кор. Счет № 30101810000000000311
                        </Typography>

                        <Typography sx={reqRowStyles}>
                            БИК 044525311.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
