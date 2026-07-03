import { Breadcrumbs, Divider, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
const Contact = () => {
    const navigate = useNavigate();
    return (
        <div className="px-4 py-[60px]">
            <div className="max-w-[1620px] mx-auto">
                <Breadcrumbs
                    separator={
                        <NavigateNextIcon
                            sx={{ fontSize: "16px", color: "#287FE8" }}
                        />
                    }
                    sx={{ mb: 4 }}
                >
                    <Link
                        underline="hover"
                        color="#707070"
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/");
                        }}
                        sx={{
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        Главная
                    </Link>
                    <Typography color="#111111" sx={{ fontSize: "14px" }}>
                        Контакты
                    </Typography>
                </Breadcrumbs>

                <div>
                    <h1 className="text-[50px] text-[#1E2126]  ">Контакты</h1>
                </div>
                <div className="flex flex-col gap-10">
                    <div className=" max-w-[1346px] mx-auto flex justify-between mt-[30px] gap-20 max-mb:flex-col max-mb:items-center">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-[20px] font-bold">
                                Центральный офис и склад
                            </h2>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <PhoneIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        +7 (3952) 648-139
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MailIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        postav.irk@mail.ru
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <WhatsAppIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        +7(924) 626-33-40
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <LocationOnIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        г. Иркутск ул. Ракитная стр 4 корп 11
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <WatchLaterIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        Пн-Пт с 9:00 до 18:00, сб с 09:00 до
                                        14:00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6239.450956693631!2d68.75614209608577!3d38.56313829793656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1783055916327!5m2!1sru!2s"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                className="w-[935px] h-[434px] rounded-[10px] max-mb:w-full max-mb:h-[500px]"
                            ></iframe>
                        </div>
                    </div>
                    <Divider variant="fullWidth"></Divider>
                    <div className=" max-w-[1346px] mx-auto flex justify-between mt-[30px] gap-20 max-mb:flex-col max-mb:items-center">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-[20px] font-bold">
                                Центральный офис и склад
                            </h2>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <PhoneIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        +7 (3952) 648-139
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MailIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        postav.irk@mail.ru
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <WhatsAppIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        +7(924) 626-33-40
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <LocationOnIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        г. Иркутск ул. Ракитная стр 4 корп 11
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <WatchLaterIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        Пн-Пт с 9:00 до 18:00, сб с 09:00 до
                                        14:00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6239.450956693631!2d68.75614209608577!3d38.56313829793656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1783055916327!5m2!1sru!2s"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                className="w-[935px] h-[434px] rounded-[10px] max-mb:w-full max-mb:h-[500px]"
                            ></iframe>
                        </div>
                    </div>
                    <Divider variant="fullWidth"></Divider>
                    <div className=" max-w-[1346px] mx-auto flex justify-between mt-[30px] gap-20 max-mb:flex-col max-mb:items-center">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-[20px] font-bold">
                                Центральный офис и склад
                            </h2>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <PhoneIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        +7 (3952) 648-139
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MailIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        postav.irk@mail.ru
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <WhatsAppIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        +7(924) 626-33-40
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <LocationOnIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        г. Иркутск ул. Ракитная стр 4 корп 11
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <WatchLaterIcon sx={{ color: "#287FE8" }} />
                                    <p className="text-[#707070] text-[16px] ">
                                        Пн-Пт с 9:00 до 18:00, сб с 09:00 до
                                        14:00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6239.450956693631!2d68.75614209608577!3d38.56313829793656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1783055916327!5m2!1sru!2s"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                className="w-[935px] h-[434px] rounded-[10px] max-mb:w-full max-mb:h-[500px]"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
