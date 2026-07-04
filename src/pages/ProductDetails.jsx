import React, { useEffect, useState, useContext, useId } from "react";
import { useParams, useNavigate } from "react-router";
import { api } from "../api/axios";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import {
    Container,
    Grid,
    Box,
    Typography,
    Rating,
    Button,
    Tab,
    Tabs,
    IconButton,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import {
    Remove,
    Add,
    ShoppingCartOutlined,
    FavoriteBorder,
} from "@mui/icons-material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedPackage, setSelectedPackage] = useState(10);
    const [tabValue, setTabValue] = useState(0);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [products, setProducts] = useState([]);

    const { addToCart } = useContext(CartContext);

    const uniqueId = useId().replace(/:/g, "");
    const prevBtnClass = `swiper-prev-btn-details-${uniqueId}`;
    const nextBtnClass = `swiper-next-btn-details-${uniqueId}`;

    async function getProduct() {
        try {
            const data = await api.get(`products/${id}`);
            console.log(data.data);

            setProduct(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getRelatedProducts() {
        try {
            const data = await api.get("products?limit=4");
            setProducts(data.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
        getRelatedProducts();
    }, [id]);

    const handleAddToCart = () => {
        if (!product) return;
        addToCart(product, quantity);
        setQuantity(1);
    };

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-gray-500">Загрузка...</div>
            </div>
        );
    }

    // Генерируем несколько изображений для галереи (в реальности приходят с сервера)

    return (
        <Container
            maxWidth="false"
            sx={{
                maxWidth: "1600px",
                mt: { xs: 2, md: 4 },
                mb: 8,
                px: { xs: 2, md: 3 },
            }}
        >
            {isMobile && (
                <IconButton
                    onClick={() => navigate(-1)}
                    sx={{ mb: 2, color: "#3D3D3D" }}
                >
                    <ArrowBackIosNew fontSize="small" />
                </IconButton>
            )}

            <Grid container spacing={{ xs: 2, md: 6 }}>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: 2,
                            position: "relative",
                        }}
                    >
                        {!isMobile && (
                            <Box sx={{ width: "80px", flexShrink: 0 }}>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    direction="vertical"
                                    spaceBetween={8}
                                    slidesPerView={4}
                                    watchSlidesProgress={true}
                                    modules={[Thumbs]}
                                    style={{ height: "320px" }}
                                >
                                    {product?.images?.map((img, idx) => (
                                        <SwiperSlide
                                            key={idx}
                                            style={{
                                                cursor: "pointer",
                                                overflow: "visible",
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={img}
                                                sx={{
                                                    width: "100%",
                                                    height: "80px",
                                                    objectFit: "contain",
                                                    bgcolor: "#F5F5F5",
                                                    borderRadius: "4px",
                                                    border: "2px solid transparent",
                                                    boxSizing: "border-box",
                                                    transition: "all 0.2s",
                                                    "&:hover": {
                                                        borderColor: "#1D6BDD",
                                                    },
                                                }}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Box>
                        )}

                        <Box
                            sx={{
                                flexGrow: 1,
                                bgcolor: "#F5F5F5",
                                borderRadius: "4px",
                                overflow: "hidden",
                                p: 1,
                                height: { xs: "300px", md: "320px" },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Swiper
                                spaceBetween={10}
                                pagination={
                                    isMobile ? { clickable: true } : false
                                }
                                thumbs={{
                                    swiper:
                                        thumbsSwiper && !thumbsSwiper.destroyed
                                            ? thumbsSwiper
                                            : null,
                                }}
                                modules={[Pagination, Thumbs]}
                                className="mySwiper2"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    "--swiper-pagination-color": "#1D6BDD",
                                }}
                            >
                                {product?.images?.map((img, idx) => (
                                    <SwiperSlide
                                        key={idx}
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={img}
                                            sx={{
                                                maxHeight: "100%",
                                                maxWidth: "100%",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {isMobile && (
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        top: 12,
                                        right: 12,
                                        bgcolor: "white",
                                        boxShadow: 1,
                                        "&:hover": { bgcolor: "white" },
                                        zIndex: 2,
                                    }}
                                >
                                    <FavoriteBorder sx={{ color: "#3D3D3D" }} />
                                </IconButton>
                            )}
                        </Box>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            color: "#1E2126",
                            mb: 2,
                            fontSize: { xs: "20px", md: "24px" },
                        }}
                    >
                        {product?.name}
                    </Typography>

                    {/* Цена */}
                    <Box sx={{ mb: 3 }}>
                        <Typography
                            variant="body2"
                            sx={{ color: "#727272", fontSize: "12px", mb: 0.5 }}
                        >
                            Цена за штуку
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{ fontWeight: 700, color: "#1D6BDD", mb: 1 }}
                        >
                            {product?.price?.toLocaleString("ru-RU") || "0"} ₽
                        </Typography>
                    </Box>

                    {/* Толщина */}
                    <Box sx={{ mb: 3 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontWeight: 600,
                                color: "#1E2126",
                                mb: 1.5,
                                fontSize: "13px",
                            }}
                        >
                            Толщина в мм
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            {product?.options?.thickness?.length ? (
                                product?.options?.thickness.map((thickness) => (
                                    <Button
                                        key={thickness}
                                        onClick={() =>
                                            setSelectedSize(
                                                thickness.toString(),
                                            )
                                        }
                                        sx={{
                                            minWidth: "50px",
                                            px: 2,
                                            py: 1,
                                            border: `1px solid ${selectedSize === thickness.toString() ? "#1D6BDD" : "#DCDCDC"}`,
                                            backgroundColor:
                                                selectedSize ===
                                                thickness.toString()
                                                    ? "#EBF4FE"
                                                    : "white",
                                            color:
                                                selectedSize ===
                                                thickness.toString()
                                                    ? "#1D6BDD"
                                                    : "#727272",
                                            fontWeight:
                                                selectedSize ===
                                                thickness.toString()
                                                    ? 600
                                                    : 400,
                                            fontSize: "13px",
                                            textTransform: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                            "&:hover": {
                                                borderColor: "#1D6BDD",
                                                backgroundColor: "#EBF4FE",
                                            },
                                        }}
                                    >
                                        {thickness}
                                    </Button>
                                ))
                            ) : (
                                <Typography>Нет вариантов</Typography>
                            )}
                        </Box>
                    </Box>

                    {/* Кол-во в упаковке */}
                    <Box sx={{ mb: 3 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontWeight: 600,
                                color: "#1E2126",
                                mb: 1.5,
                                fontSize: "13px",
                            }}
                        >
                            Кол-во шт. в упаковке
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            {product?.options?.packageQty?.length > 0 ? (
                                product?.options?.packageQty.map((pack) => (
                                    <Button
                                        key={pack}
                                        onClick={() => setSelectedPackage(pack)}
                                        sx={{
                                            minWidth: "50px",
                                            px: 2,
                                            py: 1,
                                            border: `1px solid ${selectedPackage === pack ? "#1D6BDD" : "#DCDCDC"}`,
                                            backgroundColor:
                                                selectedPackage === pack
                                                    ? "#EBF4FE"
                                                    : "white",
                                            color:
                                                selectedPackage === pack
                                                    ? "#1D6BDD"
                                                    : "#727272",
                                            fontWeight:
                                                selectedPackage === pack
                                                    ? 600
                                                    : 400,
                                            fontSize: "13px",
                                            textTransform: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                            "&:hover": {
                                                borderColor: "#1D6BDD",
                                                backgroundColor: "#EBF4FE",
                                            },
                                        }}
                                    >
                                        {pack}
                                    </Button>
                                ))
                            ) : (
                                <Typography>Нет вариантов</Typography>
                            )}
                        </Box>
                    </Box>

                    {/* Цвет */}
                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontWeight: 600,
                                color: "#1E2126",
                                mb: 1.5,
                                fontSize: "13px",
                            }}
                        >
                            Цвет
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1.5 }}>
                            {product.options?.colors?.length > 0 ? (
                                product?.options?.colors.map((color, idx) => (
                                    <Box
                                        onClick={() => setSelectedSize(idx)}
                                        sx={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "4px",
                                            backgroundColor: color,
                                            border: `2px solid ${selectedSize === color ? "#1E2126" : "transparent"}`,
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                            },
                                        }}
                                    />
                                ))
                            ) : (
                                <Typography>Нет вариантов</Typography>
                            )}
                        </Box>
                    </Box>

                    {/* Количество и кнопки */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            flexWrap: "wrap",
                        }}
                    >
                        {/* Счетчик */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #DCDCDC",
                                borderRadius: "4px",
                                backgroundColor: "white",
                            }}
                        >
                            <IconButton
                                size="small"
                                onClick={() =>
                                    setQuantity((q) => Math.max(1, q - 1))
                                }
                                sx={{
                                    color: "#727272",
                                    p: 0.5,
                                    "&:hover": {
                                        backgroundColor: "#F5F5F5",
                                    },
                                }}
                            >
                                <Remove fontSize="small" />
                            </IconButton>
                            <Box
                                sx={{
                                    px: 1.5,
                                    py: 0.5,
                                    minWidth: "35px",
                                    textAlign: "center",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                }}
                            >
                                {quantity}
                            </Box>
                            <IconButton
                                size="small"
                                onClick={() => setQuantity((q) => q + 1)}
                                sx={{
                                    color: "#727272",
                                    p: 0.5,
                                    "&:hover": {
                                        backgroundColor: "#F5F5F5",
                                    },
                                }}
                            >
                                <Add fontSize="small" />
                            </IconButton>
                        </Box>

                        {/* Кнопка В КОРЗИНУ */}
                        <Button
                            onClick={handleAddToCart}
                            variant="contained"
                            disableElevation
                            sx={{
                                bgcolor: "#1D6BDD",
                                color: "white",
                                textTransform: "none",
                                fontWeight: 700,
                                px: 4,
                                py: 1,
                                borderRadius: "4px",
                                fontSize: "14px",
                                flexGrow: { xs: 1, sm: 0 },
                                "&:hover": {
                                    bgcolor: "#1654B8",
                                },
                            }}
                        >
                            В КОРЗИНУ
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {/* ВКЛАДКИ С ХАРАКТЕРИСТИКАМИ И ОПИСАНИЕМ */}
            <Box sx={{ mt: 8 }}>
                <Box sx={{ borderBottom: "1px solid #EAEAEA", mb: 3 }}>
                    <Tabs
                        value={tabValue}
                        onChange={(e, newValue) => setTabValue(newValue)}
                        textColor="inherit"
                        TabIndicatorProps={{
                            style: { backgroundColor: "#1D6BDD" },
                        }}
                    >
                        <Tab
                            label="Характеристики"
                            sx={{
                                textTransform: "none",
                                fontWeight: tabValue === 0 ? 700 : 400,
                                color: tabValue === 0 ? "#1D6BDD" : "#727272",
                                fontSize: "14px",
                            }}
                        />
                        <Tab
                            label="Описание"
                            sx={{
                                textTransform: "none",
                                fontWeight: tabValue === 1 ? 700 : 400,
                                color: tabValue === 1 ? "#1D6BDD" : "#727272",
                                fontSize: "14px",
                            }}
                        />
                    </Tabs>
                </Box>

                {tabValue === 0 && (
                    <Box>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    md: "1fr 1fr",
                                },
                                gap: 0,
                                backgroundColor: "#FFFFFF",
                                borderRadius: "4px",
                                overflow: "hidden",
                            }}
                        >
                            {product?.characteristics &&
                                Object.entries(product.characteristics).map(
                                    ([key, value], index) => (
                                        <Box
                                            key={key}
                                            sx={{
                                                display: "grid",
                                                gridTemplateColumns: "1fr 1fr",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    px: 3,
                                                    py: 2,
                                                    backgroundColor: "#F9F9F9",
                                                    fontWeight: 600,
                                                    color: "#3D3D3D",
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {key
                                                    .replace(/([A-Z])/g, " $1")
                                                    .replace(/^./, (str) =>
                                                        str.toUpperCase(),
                                                    )}
                                            </Box>
                                            <Box
                                                sx={{
                                                    px: 3,
                                                    py: 2,
                                                    color: "#727272",
                                                    fontSize: "13px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                {typeof value === "object"
                                                    ? JSON.stringify(value)
                                                    : String(value)}
                                            </Box>
                                        </Box>
                                    ),
                                )}
                        </Box>
                    </Box>
                )}

                {tabValue === 1 && (
                    <Box
                        sx={{
                            color: "#727272",
                            fontSize: "14px",
                            lineHeight: "24px",
                        }}
                    >
                        <Typography variant="body2" paragraph>
                            {product?.description || "Описание отсутствует"}
                        </Typography>
                    </Box>
                )}

                {/* Связанные товары */}
                <Box sx={{ mt: 8 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            color: "#1D6BDD",
                            mb: 3,
                            fontSize: "18px",
                            pb: 2,
                            borderBottom: "1px solid #E0E0E0",
                        }}
                    >
                        Related Products
                    </Typography>

                    <div className="grid grid-cols-4 max-mb:grid-cols-1 gap-8">
                        {products?.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </Box>
            </Box>
        </Container>
    );
};

export default ProductDetails;
