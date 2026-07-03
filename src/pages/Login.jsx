import { Button } from "@mui/material";
import React from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router";
import { setProfile } from "../api/profile";
import { setToken } from "../api/token";

const Login = () => {
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let response = await api.post("auth/login", {
                email: e.target.email.value,
                password: e.target.password.value,
            });
            if (!response.data.token) {
                alert("Ошибка: токен не получен. Проверьте ответ от сервера.");
                return;
            }

            setProfile(response.data.user);
            setToken(response.data.token);
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("Ошибка входа: " + (error.response?.data?.message || "неверные данные или проблема с сервером"));
        }
    }
    return (
        <div className="min-h-screen flex justify-center items-center px-5">
            <div className="bg-black p-7 py-14 w-full max-w-[420px] rounded-xl shadow-[4px_3px_30px_black]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <h1 className="text-[48px] font-medium text-white text-center">
                        Login
                    </h1>
                    <div className="flex flex-col gap-5">
                        <input
                            className="focus:outline-0 placeholder:text-gray-400 text-white w-full px-5 py-3 border rounded-[4px]"
                            name="email"
                            type="email"
                            placeholder="Email..."
                        />
                        <input
                            className="focus:outline-0 placeholder:text-gray-400 text-white w-full px-5 py-3 border rounded-[4px]"
                            name="password"
                            type="text"
                            placeholder="Password..."
                        />
                    </div>
                    <Button
                        type="submit"
                        sx={{
                            bgcolor: "transparent",
                            color: "white",
                            fontSize: "20px",
                            border: "1px solid white",
                            borderRadius: "0",
                        }}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
