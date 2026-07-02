import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Stack,
    Link,
    Divider,
} from "@mui/material";
import TelegramIcon from "../assets/icons/tg.png";
import WhatsAppIcon from "../assets/icons/whatsup.png";
import VkIcon from "../assets/icons/vk.png";
import InstagramIcon from "../assets/icons/insta.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StorefrontIcon from "@mui/icons-material/Storefront";
import logo from "../assets/icons/logo_wh.png";
import { NavLink, useNavigate } from "react-router";
export default function Footer() {
    const navigate = useNavigate();
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "#1E2126",
                color: "#ffffff",
                pt: { xs: 4, md: 12 },
                pb: 8,
                fontFamily: "sans-serif",
            }}
        >
            <Container maxWidth={false} sx={{ maxWidth: "1620px" }}>
                <Grid
                    container
                    spacing={{ xs: 4, md: 2 }}
                    justifyContent="space-between"
                >
                    <Grid size={{ xs: 12, md: 3.5 }}>
                        <Stack
                            spacing={2}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "15px",
                                alignItems: {
                                    xs: "flex-start",
                                    md: "flex-start",
                                },
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                            >
                                <img src={logo} alt="logo" />
                            </Stack>

                            <Box sx={{ mt: 1 }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 500,
                                        mb: 0.5,
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    8-800-550-01-09
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#C7C7C7",
                                        fontSize: "1rem",
                                    }}
                                >
                                    postav.irk@mail.ru
                                </Typography>
                            </Box>

                            <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                                <Link
                                    href="#"
                                    sx={{
                                        color: "#29a9ea",
                                        "&:hover": { opacity: 0.8 },
                                    }}
                                >
                                    <img src={TelegramIcon} alt="" />
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: "#25d366",
                                        "&:hover": { opacity: 0.8 },
                                    }}
                                >
                                    <img src={WhatsAppIcon} alt="" />
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: "#0077ff",
                                        "&:hover": { opacity: 0.8 },
                                    }}
                                >
                                    <img src={VkIcon} alt="" />
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: "#125688",
                                        "&:hover": { opacity: 0.8 },
                                    }}
                                >
                                    <img src={InstagramIcon} alt="" />
                                </Link>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid
                        size={{ xs: 12 }}
                        sx={{
                            display: { xs: "block", md: "none" },
                            py: "0 !important",
                        }}
                    >
                        <Divider sx={{ borderColor: "#2c3034" }} />
                    </Grid>

                    <Grid
                        size={{ md: 0.5 }}
                        sx={{
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                        }}
                    >
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                borderColor: "#2c3034",
                                height: "80%",
                                alignSelf: "center",
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 3.5 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 600,
                                mb: { xs: 2, md: 3 },
                                fontSize: "1rem",
                            }}
                        >
                            Информация
                        </Typography>
                        <Stack spacing={1.5}>
                            <Link
                                onClick={() => navigate("/payment")}
                                underline="none"
                                sx={{
                                    color: "#C7C7C7",
                                    "&:hover": { color: "#ffffff" },
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                }}
                            >
                                Оплата
                            </Link>
                            <Link
                                onClick={() => navigate("/delivery")}
                                underline="none"
                                sx={{
                                    color: "#C7C7C7",
                                    "&:hover": { color: "#ffffff" },
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                }}
                            >
                                Доставка
                            </Link>
                            <NavLink
                                to={"/privacy-policy"}
                                className={
                                    "text-[#C7C7C7] hover:text-[#ffffff] text-[1rem] cursor-pointer animate-pulse"
                                }
                            >
                                Политика обработки персональных данных
                            </NavLink>
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 600,
                                mb: { xs: 2, md: 3 },
                                fontSize: "1rem",
                            }}
                        >
                            Центральный офис и склад
                        </Typography>
                        <Stack spacing={2}>
                            <Stack
                                direction="row"
                                spacing={1.5}
                                alignItems="flex-start"
                            >
                                <LocationOnIcon
                                    sx={{
                                        color: "#1976d2",
                                        fontSize: "1.3rem",
                                        mt: 0.2,
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#C7C7C7",
                                        fontSize: "1rem",
                                    }}
                                >
                                    г. Иркутск ул. Ракитная стр 4 корп 11
                                </Typography>
                            </Stack>

                            <Stack
                                direction="row"
                                spacing={1.5}
                                alignItems="center"
                            >
                                <PhoneIcon
                                    sx={{
                                        color: "#1976d2",
                                        fontSize: "1.3rem",
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#C7C7C7",
                                        fontSize: "1rem",
                                    }}
                                >
                                    8-800-550-01-09
                                </Typography>
                            </Stack>

                            <Stack
                                direction="row"
                                spacing={1.5}
                                alignItems="flex-start"
                            >
                                <AccessTimeIcon
                                    sx={{
                                        color: "#1976d2",
                                        fontSize: "1.3rem",
                                        mt: 0.2,
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#C7C7C7",
                                        fontSize: "1rem",
                                    }}
                                >
                                    Режим работы: Пн-Пт с 9:00 до 18:00, Сб с
                                    9:00 до 14:00
                                </Typography>
                            </Stack>

                            <Stack
                                direction="row"
                                spacing={1.5}
                                alignItems="center"
                            >
                                <StorefrontIcon
                                    sx={{
                                        color: "#1976d2",
                                        fontSize: "1.3rem",
                                    }}
                                />
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "#C7C7C7",
                                        "&:hover": { color: "#ffffff" },
                                        fontSize: "1rem",
                                    }}
                                >
                                    Региональные склады
                                </Link>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        mt: { xs: 4, md: 6 },
                        pt: 3,
                        borderTop: "1px solid #2c3034",
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            color: "#555555",
                            fontSize: "0.8rem",
                            display: "block",
                            pl: { md: 0 },
                        }}
                    >
                        © 2023 все права защищены
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
