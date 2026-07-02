import React from "react";
import {
    Box,
    Button,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import packImage from "../../assets/images/sever-pack.png";
import heroBg from "../../assets/images/homeHero.png";
export default function Hero() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            sx={{
                width: "100%",
                pb: "60px",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: { xs: "520px", md: "620px" },
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `linear-gradient(90deg, #1E2122f1 0%), url(${heroBg})`,
                    display: "flex",
                    alignItems: "center",
                    p: { xs: 3, sm: 6, md: "0 80px" },
                    color: "#FFFFFF",
                }}
            >
                <div className="max-w-[1620px] mx-auto">
                    <Grid
                        container
                        spacing={{ xs: 2, md: 20 }}
                        sx={{ width: "100%", alignItems: "center" }}
                    >
                        <Grid
                            size={{ xs: 12, md: 6 }}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: { xs: "center", md: "flex-start" },
                                textAlign: { xs: "center", md: "left" },
                                order: { xs: 2, md: 1 },
                                mt: { xs: 4, md: 0 },
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: {
                                        xs: "32px",
                                        sm: "40px",
                                        md: "48px",
                                    },
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                    mb: 1.5,
                                    letterSpacing: "0.5px",
                                }}
                            >
                                Новинка в России
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: {
                                        xs: "16px",
                                        sm: "18px",
                                        md: "20px",
                                    },
                                    mb: 4,
                                    maxWidth: "400px",
                                    fontWeight: 400,
                                }}
                            >
                                Север – теплоизоляция для сурового климата
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    gap: 1,
                                    mb: 4,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: "20px", sm: "24px" },
                                    }}
                                >
                                    от
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "46px", sm: "56px" },
                                        fontWeight: 900,
                                        lineHeight: 1,
                                    }}
                                >
                                    850 ₽
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "20px", sm: "30px" },
                                        fontWeight: 900,
                                    }}
                                >
                                    за
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "46px", sm: "56px" },
                                        fontWeight: 900,
                                    }}
                                >
                                    3м²
                                </Typography>
                            </Box>

                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#287FE8",
                                    color: "#FFFFFF",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    padding: "12px 48px",
                                    borderRadius: "4px",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    boxShadow: "none",
                                    width: { xs: "100%", sm: "auto" },
                                    "&:hover": {
                                        backgroundColor: "#084eb4",
                                    },
                                    "&:active": {
                                        transform: "scale(0.98)",
                                    },
                                }}
                            >
                                Подробнее
                            </Button>
                        </Grid>

                        <Grid
                            size={{ xs: 12, md: 6 }}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                order: { xs: 1, md: 2 },
                                height: {
                                    xs: "200px",
                                    sm: "260px",
                                    md: "360px",
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={packImage}
                                alt="Теплоизоляция Север"
                                sx={{
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    objectFit: "contain",
                                    filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.6))",
                                    transition: "transform 0.5s ease",
                                    "&:hover": {
                                        transform: "scale(1.04)",
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </Box>
    );
}
