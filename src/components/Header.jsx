import React, { useEffect, useState } from "react";
import logo from "../assets/icons/logo.png";
import {
    Divider,
    Drawer,
    IconButton,
    Container,
    Menu,
    MenuItem,
    ListItemText,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router";
import PhoneIcon from "@mui/icons-material/Phone";
import Cart from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GridViewIcon from "@mui/icons-material/GridView";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MobileBottomNav from "./MobileBottomNav.jsx";
import { api } from "../api/axios.js";

const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [cats, setCats] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const desktopCatalogOpen = Boolean(anchorEl);

    const navigate = useNavigate();

    async function getCats() {
        try {
            const { data } = await api.get("catalogs");
            console.log(data);
            setCats(data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCats();
    }, []);
    const navLinks = [
        { title: "Доставка", path: "/delivery" },
        { title: "Оплата", path: "/payment" },
        { title: "Контакты", path: "/contacts" },
    ];

    const handleCatalogClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCatalogClose = () => {
        setAnchorEl(null);
    };

    const handleCategorySelect = (path) => {
        navigate(path);
        handleCatalogClose();
    };

    return (
        <header className="bg-white shadow-sm w-full">
            <div className="py-4 px-4 border-b border-[#F3F4F6] max-mb:py-3">
                <div className="max-w-[1620px] mx-auto flex justify-between items-center gap-3">
                    <div className="flex items-center max-mb:items-end gap-[56px] max-mb:gap-[8px]">
                        <img
                            src={logo}
                            alt="logo"
                            className="max-mb:w-[120px] w-[170px] object-contain cursor-pointer"
                            onClick={() => navigate("/")}
                        />
                        <Divider
                            sx={{
                                height: "24px",
                                background: "#C7C7C7",
                                width: "1px",
                                display: { xs: "none", md: "block" },
                            }}
                            orientation="vertical"
                        />
                        <p className="text-[#707070] text-[16px] max-mb:text-[12px] max-mb:leading-tight">
                            От завода без посредников
                        </p>
                    </div>

                    <div className="flex items-center gap-12 max-mb:hidden">
                        <div className="flex gap-10">
                            {navLinks.map((el) => (
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-[#0A61DE] text-[16px] underline underline-offset-6 decoration-[2px] font-medium"
                                            : "text-[#0A61DE] text-[16px] hover:opacity-80 transition-opacity"
                                    }
                                    key={el.title}
                                    to={el.path}
                                >
                                    {el.title}
                                </NavLink>
                            ))}
                        </div>

                        <div className="flex items-center gap-[6px]">
                            <PhoneIcon
                                sx={{ color: "#0A61DE", fontSize: "20px" }}
                            />
                            <a
                                href="tel:88005500109"
                                className="font-bold text-[20px] text-[#333] hover:text-[#0A61DE] transition-colors"
                            >
                                8-800-550-01-09
                            </a>
                        </div>

                        <div
                            className="relative cursor-pointer"
                            onClick={() => navigate("/cart")}
                        >
                            <IconButton sx={{ color: "#0A61DE" }}>
                                <Cart />
                            </IconButton>
                            <span className="pointer-events-none bg-[#FF506F] absolute bottom-0 right-0 text-white w-[20px] h-[20px] text-[12px] rounded-[50%] flex items-center justify-center">
                                30
                            </span>
                        </div>
                    </div>

                    <div className="hidden max-mb:block">
                        <IconButton
                            sx={{ color: "#0A61DE" }}
                            onClick={() => setBurgerOpen(true)}
                        >
                            <MenuIcon sx={{ fontSize: "28px" }} />
                        </IconButton>
                    </div>
                </div>
            </div>

            <div className="py-3 px-4 bg-[#EDEDED] border-b border-[#E2E8F0] max-mb:hidden">
                <div className="max-w-[1620px] mx-auto flex items-center gap-4">
                    <button
                        id="catalog-button"
                        aria-controls={
                            desktopCatalogOpen ? "catalog-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={desktopCatalogOpen ? "true" : undefined}
                        onClick={handleCatalogClick}
                        className="bg-[#0A61DE] text-white px-6 py-3 rounded-[4px] font-medium text-[16px] flex items-center gap-2 hover:bg-[#084eb4] transition-colors min-w-[160px] justify-center"
                    >
                        <GridViewIcon fontSize="small" />
                        КАТАЛОГ
                    </button>

                    <Menu
                        id="catalog-menu"
                        anchorEl={anchorEl}
                        open={desktopCatalogOpen}
                        onClose={handleCatalogClose}
                        MenuListProps={{
                            "aria-labelledby": "catalog-button",
                        }}
                        elevation={4}
                        sx={{
                            mt: "8px",
                            "& .MuiPaper-root": {
                                width: "280px",
                                borderRadius: "4px",
                                border: "1px solid #E2E8F0",
                                p: 0,
                            },
                        }}
                    >
                        {cats.map((cat) => (
                            <MenuItem
                                key={cat.name}
                                onClick={() => handleCategorySelect(cat.slug)}
                                sx={{
                                    py: "10px",
                                    px: "20px",
                                    color: "#333333",
                                    fontSize: "15px",
                                    borderBottom: "1px solid #F1F5F9",
                                    "&:last-child": { borderBottom: "none" },
                                    "&:hover": {
                                        backgroundColor: "#F1F5F9",
                                        color: "#0A61DE",
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={cat.name}
                                    primaryTypographyProps={{
                                        fontSize: "15px",
                                        fontWeight: 400,
                                    }}
                                />
                            </MenuItem>
                        ))}
                    </Menu>

                    <div className="flex flex-1 items-center border border-[#CBD5E1] bg-white rounded-[4px] overflow-hidden focus-within:border-[#0A61DE] transition-colors h-[46px]">
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="w-full px-4 py-2 text-[15px] outline-none text-[#333]"
                        />
                        <button className="bg-[#0A61DE] text-white px-5 h-full flex items-center justify-center hover:bg-[#084eb4] transition-colors">
                            <SearchIcon />
                        </button>
                    </div>

                    <div className="flex items-center gap-1 text-[#475569] hover:text-[#0A61DE] cursor-pointer transition-colors px-2"></div>
                </div>
            </div>

            <div className="hidden max-mb:block px-4 pb-3 pt-1">
                <div className="flex items-center border border-[#E0E0E0] rounded-[4px] overflow-hidden bg-white">
                    <input
                        type="text"
                        placeholder="Поиск"
                        className="w-full px-3 py-2 text-[14px] outline-none text-[#333]"
                    />
                    <button className="bg-[#0A61DE] p-2 text-white flex items-center justify-center min-w-[44px]">
                        <SearchIcon fontSize="small" />
                    </button>
                </div>
            </div>

            <Drawer
                anchor="right"
                open={burgerOpen}
                onClose={() => setBurgerOpen(false)}
                sx={{ "& .MuiPaper-root": { width: "260px", p: "16px 0" } }}
            >
                <Container maxWidth={false}>
                    <div className="flex items-center justify-between pb-2 mb-4">
                        <p className="font-bold text-[#0A61DE] text-[18px]"></p>
                        <IconButton
                            sx={{ color: "#1D6BDD" }}
                            onClick={() => setBurgerOpen(false)}
                        >
                            <CloseIcon sx={{ fontSize: "36px" }} />
                        </IconButton>
                    </div>
                    <div className="flex flex-col gap-5 px-2">
                        {navLinks.map((el) => (
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[#0A61DE] text-[18px] underline underline-offset-6 decoration-2 font-medium"
                                        : "text-[#0A61DE] text-[18px]"
                                }
                                key={el.title}
                                to={el.path}
                                onClick={() => setBurgerOpen(false)}
                            >
                                {el.title}
                            </NavLink>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 pt-15">
                        <PhoneIcon sx={{ color: "#0A61DE" }} fontSize="small" />
                        <p className="text-[18px] font-medium">
                            8-800-550-01-09
                        </p>
                    </div>
                </Container>
            </Drawer>

            <MobileBottomNav cats={cats} />
        </header>
    );
};

export default Header;
