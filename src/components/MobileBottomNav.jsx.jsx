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

export default function MobileBottomNav({
    cats,
    cartCount,
    handleCategoryFilter,
}) {
    const [value, setValue] = useState(0);
    const [catalogOpen, setCatalogOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <Box sx={{ display: { xs: "block", md: "none" }, bgcolor: "#fff" }}>
            <Paper
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    bgcolor: "#fff",
                    py: "10px",
                    "& .MuiPaper-root": {
                        bgcolor: "#000",
                    },
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
                        bgcolor: "#fff",
                        "& .MuiButtonBase-root": { color: "gray" },
                        "& .Mui-selected": { color: "#0A61DE !important" },
                    }}
                >
                    <BottomNavigationAction
                        sx={{ fontSize: "16px" }}
                        label="Главная"
                        icon={<HomeIcon sx={{ fontSize: "26px" }} />}
                    />
                    <BottomNavigationAction
                        sx={{ fontSize: "16px" }}
                        label="Доставка"
                        icon={<LocalShippingIcon sx={{ fontSize: "26px" }} />}
                    />
                    <BottomNavigationAction
                        sx={{ fontSize: "16px" }}
                        label="Каталог"
                        icon={<GridViewIcon sx={{ fontSize: "26px" }} />}
                    />
                    <BottomNavigationAction
                        sx={{ fontSize: "16px" }}
                        label="Спецпред."
                        icon={<LocalOfferIcon sx={{ fontSize: "26px" }} />}
                    />
                    <BottomNavigationAction
                        sx={{ fontSize: "16px" }}
                        label="Корзина"
                        icon={
                            <div className="relative">
                                <CartIcon sx={{ fontSize: "26px" }} />
                                {cartCount > 0 && (
                                    <span className="bg-[#FF506F] absolute -top-1 -right-2 text-white w-[22px] h-[22px] text-[12px] rounded-[50%] flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
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
                        maxHeight: "80vh",
                        p: "16px 0",
                    },
                }}
            >
                <Container maxWidth={false}>
                    <div className="flex items-center justify-between  pb-3 mb-2 sticky top-0 bg-white z-10">
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
                        <React.Fragment key="all">
                            <ListItem
                                button
                                onClick={() => {
                                    handleCategoryFilter("all");
                                    setCatalogOpen(false);
                                }}
                                sx={{ py: 1.5, cursor: "pointer" }}
                            >
                                <ListItemText
                                    primary="Все"
                                    primaryTypographyProps={{
                                        fontSize: "16px",
                                        color: "#0A61DE",
                                        fontWeight: 600,
                                    }}
                                />
                            </ListItem>
                            <Divider sx={{ borderColor: "#F3F4F6" }} />
                        </React.Fragment>
                        {cats?.map((cat) => (
                            <React.Fragment key={cat.id}>
                                <ListItem
                                    button
                                    onClick={() => {
                                        handleCategoryFilter(cat.id);
                                        setCatalogOpen(false);
                                    }}
                                    sx={{ py: 1.5, cursor: "pointer" }}
                                >
                                    <ListItemText
                                        primary={cat.name}
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
