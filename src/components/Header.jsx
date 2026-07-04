import React, { useEffect, useState, useContext, useRef } from "react";
import logo from "../assets/icons/logo.png";
import {
    Divider,
    Drawer,
    IconButton,
    Container,
    Menu,
    MenuItem,
    ListItemText,
    Button,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router";
import PhoneIcon from "@mui/icons-material/Phone";
import Cart from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GridViewIcon from "@mui/icons-material/GridView";
import MobileBottomNav from "./MobileBottomNav.jsx";
import { api } from "../api/axios.js";
import { getProfile, removeProfile } from "../api/profile.js";
import PersonIcon from "@mui/icons-material/Person";
import { CartContext } from "../context/CartContext";
import { removeToken } from "../api/token.js";
import { useDebounce } from "use-debounce"; // Импортируем дебаунс

const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [cats, setCats] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const desktopCatalogOpen = Boolean(anchorEl);
    const user = getProfile();
    const navigate = useNavigate();

    const { cart } = useContext(CartContext);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    // --- СОСТОЯНИЯ ДЛЯ ПОИСКА ---
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchFocused, setSearchFocused] = useState(false);
    const [debouncedSearchQuery] = useDebounce(searchQuery, 400); // задержка 400мс
    const searchRef = useRef(null);

    useEffect((e) => {
        const handleClickOutside = (event) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target)
            ) {
                setSearchFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        async function fetchSearchResults() {
            if (debouncedSearchQuery.trim().length < 2) {
                setSearchResults([]);
                return;
            }
            try {
                const { data } = await api.get(
                    `products?search=${encodeURIComponent(debouncedSearchQuery)}`,
                );
                setSearchResults(data.data || []);
            } catch (err) {
                console.error("Ошибка при поиске товаров:", err);
            }
        }
        fetchSearchResults();
    }, [debouncedSearchQuery]);

    async function getCats() {
        try {
            const { data } = await api.get("catalogs");
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
    const handleCategoryFilter = (id) => {
        navigate(`/products-filter/${id}`);
        handleCatalogClose();
    };

    const RenderSearchResults = () => {
        if (!searchFocused || searchResults.length === 0) return null;

        return (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-[#CBD5E1] rounded-[4px] shadow-2xl z-[999] max-h-[400px] overflow-y-auto custom-scrollbar">
                {searchResults.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center gap-4 p-3 hover:bg-[#F1F5F9] cursor-pointer border-b border-[#F1F5F9] transition-colors"
                        onMouseDown={(e) => {
                            e.preventDefault(); 
                            navigate(`/product/${product.id}`);
                            setSearchFocused(false);
                            setSearchQuery("");
                        }}
                    >
                        <img
                            src={
                                product.image ||
                                product.images?.[0] ||
                                "placeholder.png"
                            }
                            alt={product.name}
                            className="w-[50px] h-[50px] object-contain rounded bg-gray-50 flex-shrink-0"
                        />
                        <div className="flex flex-col flex-1 min-w-0">
                            <span className="text-[15px] text-[#1E2126] font-medium truncate">
                                {product.name}
                            </span>
                            {product.price && (
                                <span className="text-[13px] text-[#0A61DE] font-bold">
                                    {product.price} ₽
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <header className="bg-white shadow-sm w-full sticky top-0 z-[100] shadow-xl">
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
                            <a className="font-bold text-[20px] text-[#333] hover:text-[#0A61DE] transition-colors cursor-pointer">
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
                            {cartCount > 0 && (
                                <span className="pointer-events-none bg-[#FF506F] absolute bottom-0 right-0 text-white p-1 leading-[16px] text-[14px] rounded-[50%] min-w-[24px] text-center">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        <div className="flex items-end gap-2 max-mb:hidden">
                            <PersonIcon
                                sx={{ color: "#0A61DE", fontSize: "28px" }}
                            />
                            <span className="text-[#333] text-[18px] font-medium ">
                                {user?.name?.split(" ")[0]}
                            </span>
                            {user?.role == "admin" ? (
                                <button
                                    className="animate-pulse cursor-pointer text-[#0A61DE] text-[18px] hover:opacity-80 transition-opacity"
                                    onClick={() => navigate("/dashboard")}
                                >
                                    Admin
                                </button>
                            ) : (
                                <span className="text-[#333] text-[18px] font-medium ">
                                    User
                                </span>
                            )}
                        </div>
                        <div className="max-mb:hidden">
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => {
                                    removeToken();
                                    removeProfile();
                                    navigate("/login");
                                }}
                            >
                                Logout
                            </Button>
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
                        MenuListProps={{ "aria-labelledby": "catalog-button" }}
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
                        <MenuItem
                            key="all"
                            onClick={() => handleCategoryFilter("all")}
                            sx={{
                                py: "10px",
                                px: "20px",
                                color: "#333333",
                                fontSize: "15px",
                                borderBottom: "1px solid #F1F5F9",
                                "&:hover": {
                                    backgroundColor: "#F1F5F9",
                                    color: "#0A61DE",
                                },
                            }}
                        >
                            <ListItemText
                                primary="Все"
                                primaryTypographyProps={{
                                    fontSize: "15px",
                                    fontWeight: 600,
                                }}
                            />
                        </MenuItem>
                        {cats.map((cat) => (
                            <MenuItem
                                key={cat.name}
                                onClick={() => handleCategoryFilter(cat.id)}
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

                    <div
                        ref={searchRef}
                        className="relative flex flex-1 items-center border border-[#CBD5E1] bg-white rounded-[4px] focus-within:border-[#0A61DE] transition-colors h-[46px]"
                    >
                        <input
                            type="text"
                            placeholder="Поиск"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setSearchFocused(true)}
                            className="w-full h-full px-4 text-[16px] outline-none text-[#1E2126] rounded-l-[4px]"
                        />
                        <button className="bg-[#0A61DE] text-white px-5 h-full flex items-center justify-center hover:bg-[#084eb4] transition-colors rounded-r-[4px]">
                            <SearchIcon />
                        </button>

                        <RenderSearchResults />
                    </div>

                    <div className="flex items-center gap-1 text-[#475569] hover:text-[#0A61DE] cursor-pointer transition-colors px-2"></div>
                </div>
            </div>

            {/* МОБИЛЬНЫЙ ПОИСК */}
            <div className="hidden max-mb:block px-4 pb-3 pt-1">
                <div
                    ref={searchRef}
                    className="relative flex items-center border border-[#E0E0E0] rounded-[4px] bg-white focus-within:border-[#0A61DE]"
                >
                    <input
                        type="text"
                        placeholder="Поиск"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setSearchFocused(true)}
                        className="w-full px-3 py-2 text-[14px] outline-none text-[#333] rounded-l-[4px]"
                    />
                    <button className="bg-[#0A61DE] p-2 text-white flex items-center justify-center min-w-[44px] rounded-r-[4px]">
                        <SearchIcon fontSize="small" />
                    </button>

                    {/* Результаты поиска для мобильных устройств */}
                    <RenderSearchResults />
                </div>
            </div>

            {/* БУРГЕР МЕНЮ */}
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
                    <div className="flex items-center gap-1 mt-8">
                        <span className="text-[#333] text-[24px] font-medium ">
                            {user?.name?.split(" ")[0]}
                        </span>
                        {user?.role == "admin" ? (
                            <button
                                className="animate-pulse cursor-pointer text-[#0A61DE] text-[24px] hover:opacity-80 transition-opacity"
                                onClick={() => navigate("/dashboard")}
                            >
                                Admin
                            </button>
                        ) : (
                            <span className="text-[#333] text-[18px] font-medium ">
                                User
                            </span>
                        )}
                    </div>
                    <div className="mt-8 ">
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => {
                                removeToken();
                                removeProfile();
                                navigate("/login");
                            }}
                        >
                            Logout
                        </Button>
                    </div>
                    <div className="flex items-center gap-2 pt-15">
                        <PhoneIcon sx={{ color: "#0A61DE" }} fontSize="small" />
                        <p className="text-[20px] font-medium">
                            8-800-550-01-09
                        </p>
                    </div>
                </Container>
            </Drawer>

            <MobileBottomNav
                handleCategoryFilter={handleCategoryFilter}
                cartCount={cartCount}
                cats={cats}
            />
        </header>
    );
};

export default Header;
