import React, { useState } from "react";
import {
    Box,
    Paper,
    BottomNavigation,
    BottomNavigationAction,
    Drawer,
    Container,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Divider,
} from "@mui/material";
import { useNavigate } from "react-router";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShippingOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import LocalOfferIcon from "@mui/icons-material/LocalOfferOutlined";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";

export default function MobileBottomNav() {
    const [value, setValue] = useState(0);
    const [catalogOpen, setCatalogOpen] = useState(false);
    const navigate = useNavigate();

    const categories = [
        { title: "Теплоизоляция", path: "/catalog/teploizolyaciya" },
        { title: "Листовой материал", path: "/catalog/listovoy-material" },
        { title: "Кровля и водосток", path: "/catalog/krovlya" },
        { title: "Заборы", path: "/catalog/zabory" },
        { title: "Строительный Блок", path: "/catalog/bloki" },
        { title: "Сухие смеси, профили", path: "/catalog/smesi" },
        { title: "Мембраны", path: "/catalog/membrany" },
    ];

    return (
        <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Paper
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    borderTop: "1px solid #E5E7EB",
                }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        if (newValue === 2) {
                            setCatalogOpen(true);
                        } else {
                            setValue(newValue);
                            if (newValue === 0) navigate("/");
                            if (newValue === 1) navigate("/delivery");
                            if (newValue === 3) navigate("/special");
                            if (newValue === 4) navigate("/cart");
                        }
                    }}
                    sx={{
                        "& .Mui-selected": { color: "#0A61DE !important" },
                    }}
                >
                    <BottomNavigationAction
                        label="Главная"
                        icon={<HomeIcon />}
                    />
                    <BottomNavigationAction
                        label="Доставка"
                        icon={<LocalShippingIcon />}
                    />
                    <BottomNavigationAction
                        label="Каталог"
                        icon={<GridViewIcon />}
                    />
                    <BottomNavigationAction
                        label="Спецпред."
                        icon={<LocalOfferIcon />}
                    />
                    <BottomNavigationAction
                        label="Корзина"
                        icon={
                            <div className="relative">
                                <CartIcon />
                                <span className="bg-[#FF506F] absolute -top-1 -right-2 text-white w-[22px] h-[22px] text-[12px] rounded-[50%] flex items-center justify-center">
                                    30
                                </span>
                            </div>
                        }
                    />
                </BottomNavigation>
            </Paper>
            <Drawer
                anchor="bottom"
                open={catalogOpen}
                onClose={() => setCatalogOpen(false)}
                sx={{
                    "& .MuiPaper-root": {
                        minHeight: "80vh",
                        p: "16px 0",
                    },
                }}
            >
                <Container maxWidth={false}>
                    <div className="flex items-center justify-between  pb-3 mb-2">
                        <p className="font-bold text-[#0A61DE] text-[24px]">
                            Каталог товаров
                        </p>
                        <IconButton
                            sx={{ color: "#1D6BDD" }}
                            onClick={() => setCatalogOpen(false)}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>

                    <List disablePadding>
                        {categories.map((cat) => (
                            <React.Fragment key={cat.title}>
                                <ListItem
                                    button
                                    onClick={() => {
                                        navigate(cat.path);
                                        setCatalogOpen(false);
                                    }}
                                    sx={{ py: 1.5 }}
                                >
                                    <ListItemText
                                        primary={cat.title}
                                        primaryTypographyProps={{
                                            fontSize: "16px",
                                            color: "#333333",
                                        }}
                                    />
                                </ListItem>
                                <Divider sx={{ borderColor: "#F3F4F6" }} />
                            </React.Fragment>
                        ))}
                    </List>
                </Container>
            </Drawer>
        </Box>
    );
}
