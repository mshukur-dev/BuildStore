import React from "react";
import not from "../assets/icons/notFound.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="py-[100px] px-4">
            <div className="max-w-[1620px] mx-auto flex flex-col justify-center items-center text-center gap-[30px]">
                <img src={not} alt="" />
                <div>
                    <h1 className="text-[50px] text-[#1E2126] ">404</h1>
                    <p className="text-[#1E2126] font-bold text-[20px]">
                        Ошибка
                    </p>
                </div>
                <p className="text-[#707070] text-[20px] max-mb:text-[16px] ">
                    Возможно, вы попытались зайти на несуществующую или
                    удалённую страницу. <br />{" "}
                    <br className="hidden max-mb:block" /> Нам очень жаль, что
                    вы не нашли страницу, которую искали. Попробуйте начать с
                    главной.
                </p>
                <Button
                    onClick={() => navigate("/")}
                    sx={{
                        bgcolor: "#167FFE",
                        color: "#fff",
                        px: "60px",
                        py: "10px",
                    }}
                >
                    На главную
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
