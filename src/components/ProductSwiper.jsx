import React, { useId } from "react";
import { Box, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductCard from "./ProductCard";

// Импорт стилей Swiper напрямую в код сборщика
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductSwiper({ products = [] }) {
    const uniqueId = useId().replace(/:/g, ""); // убираем двоеточия, чтобы селектор был валидным
    const prevBtnClass = `swiper-prev-btn-${uniqueId}`;
    const nextBtnClass = `swiper-next-btn-${uniqueId}`;

    return (
        <Box
            sx={{
                width: "100%",
                position: "relative",
                px: { xs: 0, md: 10 }, // Отступы для боковых стрелок на десктопе
                // Глубокая кастомизация внутренних стилей Swiper через корневой sx-объект
                "& .swiper": {
                    display: "flex",
                    paddingY: 2, // Дополнительный паддинг, чтобы тень карточек при ховере не обрезалась
                },
            }}
        >
            {/* Кнопки навигации — кастомные MUI-компоненты привязываются по классам к Swiper */}
            <IconButton
                className={prevBtnClass}
                sx={{
                    display: { xs: "none", md: "flex" },
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    border: "1px solid #707070",
                    borderRadius: "0px",
                    backgroundColor: "#FFFFFF",
                    color: "#707070",
                    width: "40px",
                    height: "40px",
                    "&:hover": { backgroundColor: "#F8FAFC", color: "#111111" },
                }}
            >
                <ArrowBackIosNewIcon sx={{ fontSize: "18px" }} />
            </IconButton>

            <IconButton
                className={nextBtnClass}
                sx={{
                    display: { xs: "none", md: "flex" },
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    border: "1px solid #707070",
                    borderRadius: "0px",
                    backgroundColor: "#FFFFFF",
                    color: "#707070",
                    width: "40px",
                    height: "40px",
                    "&:hover": { backgroundColor: "#F8FAFC", color: "#111111" },
                }}
            >
                <ArrowForwardIosIcon sx={{ fontSize: "18px" }} />
            </IconButton>

            {/* Инициализация Swiper */}
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    prevEl: `.${prevBtnClass}`,
                    nextEl: `.${nextBtnClass}`,
                }}
                breakpoints={{
                    480: { slidesPerView: 2, centeredSlides: false },
                    768: { slidesPerView: 3, centeredSlides: false },
                    1200: { slidesPerView: 4, centeredSlides: false },
                }}
            >
                {products?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ProductCard product={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
