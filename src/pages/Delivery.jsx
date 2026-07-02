import React, { useState } from "react";
import {
    Container,
    Typography,
    Breadcrumbs,
    Link,
    Box,
    Tabs,
    Tab,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router";
import delivery from "../assets/icons/delivery.png";
export default function DeliveryPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Container
            maxWidth={false}
            sx={{
                maxWidth: "1620px",
                px: { xs: 2, md: 4 },
                py: { xs: 3, md: 8 },
            }}
        >
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
                    Доставка
                </Typography>
            </Breadcrumbs>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", md: "center" },
                    gap: 3,
                    mb: 6,
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "28px", md: "44px" },
                        fontWeight: 700,
                        color: "#111111",
                        flexGrow: 1,
                    }}
                >
                    {activeTab === 0 ? "Доставка" : "Стоимость услуг"}
                </Typography>

                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    aria-label="delivery tabs"
                    sx={{
                        minHeight: "auto",
                        "& .MuiTabs-indicator": { display: "none" },
                    }}
                >
                    <Tab
                        label="Правила доставки"
                        className={`delivery-tab ${activeTab === 0 ? "active" : ""}`}
                    />
                    <Tab
                        label="Стоимость услуг"
                        className={`delivery-tab ${activeTab === 1 ? "active" : ""}`}
                        sx={{ ml: 2 }}
                    />
                </Tabs>
            </Box>

            {activeTab === 0 && (
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography className="content-h2">
                            Правила доставки
                        </Typography>
                        <Typography className="content-p">
                            Доставка производится транспортом компании. Водитель
                            не разгружает ТС (если это необходимо —
                            договариваетесь о платной разгрузке с водителем). Мы
                            не сможем доставить заказ в случае если проезд к
                            месту доставки недоступен из-за сложных погодных
                            условий.
                        </Typography>
                        <Typography className="content-p">
                            Если к месту разгрузки невозможно подъехать —
                            остановимся как можно ближе, без нарушений ПДД и
                            повреждений транспорта. Водитель доставки
                            припаркуется так, чтобы выгрузить товары безопасно,
                            не создавая опасность пешеходам и другим
                            автомобилям.
                        </Typography>
                        <Typography className="content-p">
                            После получения и проверки заказа внимательно
                            ознакомьтесь с документами и подпишите их. Внимание!
                            После подписания акта приёма-передачи претензии по
                            количеству, а также качеству полученного товара не
                            принимаются.
                        </Typography>

                        <Typography className="content-h2" sx={{ mt: 5 }}>
                            Для оформления услуги доставки необходимо
                            предоставить следующие данные:
                        </Typography>
                        <Typography className="content-p" sx={{ pl: 2 }}>
                            — контактное лицо;
                            <br />
                            — номер телефона контактного лица;
                            <br />— адрес доставки.
                        </Typography>

                        <Typography className="content-h2" sx={{ mt: 5 }}>
                            Самовывоз
                        </Typography>
                        <Typography className="content-p">
                            Если Вы хотите самостоятельно забрать товар, то ждем
                            Вас по адресу: г. Иркутск, ул. Ракитная стр.4
                            корп.11
                        </Typography>
                        <Typography className="content-p">
                            При самовывозе — необходимо уточнить время работы
                            склада и наличие товара на складе по:
                            +7(3952)648-139.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography className="content-h2">
                            Доставка по г. Иркутску, в г. Ангарск, в г. Шелехов
                        </Typography>
                        <Typography className="content-p">
                            Стоимость доставки стройматериалов рассчитывается
                            сотрудником компании индивидуально. Услуга доставки
                            стройматериалов выполняется в день оформления заказа
                            или в другой день, по согласованию с клиентом
                            компании.
                        </Typography>
                        <Typography className="content-p">
                            Расписание работы службы доставки:
                            <br />
                            в будние дни с 09:00 до 18:00,
                            <br />
                            в субботу с 09:00 до 14:00.
                            <br />
                            Воскресенье — выходной день
                        </Typography>
                        <Typography className="content-p">
                            Время осуществления доставки с клиентом
                            согласовывается заранее.
                        </Typography>

                        <Typography className="content-h2" sx={{ mt: 5 }}>
                            Доставка в другие регионы РФ
                        </Typography>
                        <Typography className="content-p">
                            Доставка в другие регионы осуществляется любыми
                            транспортными компаниями по согласованию с клиентом
                            компании.
                        </Typography>
                        <Typography className="content-p">
                            Доставка в терминалы транспортных компаний в
                            пределах г. Иркутска — от 900 руб.
                        </Typography>
                        <Typography className="content-p">
                            Доставка возможна в города и отдаленные населенные
                            пункты Иркутской области, Красноярского края,
                            Республики Бурятии, Республики Саха (Якутия),
                            Хабаровского края, Дальнего Востока, а также другие
                            регионы РФ.
                        </Typography>
                        <Typography className="content-p">
                            Стоимость доставки в другие регионы России
                            рассчитывается по тарифам ТК. Зависит способа
                            доставки, веса, объема доставляемого груза.
                        </Typography>
                        <Typography className="content-p">
                            Возможна загрузка полной машины (FTL) «под клиента»
                            в любом направлении, стоимость определяется
                            индивидуально.
                        </Typography>
                    </Grid>
                </Grid>
            )}

            {activeTab === 1 && (
                <Grid container spacing={4} sx={{ alignItems: "center" }}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography className="content-h2" sx={{ mb: 4 }}>
                            Стоимость доставки по г. Иркутску, в г. Ангарск, в
                            г. Шелехов.
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка в Свердловский район
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    800 ₽
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка в Октябрьский
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    от 900 ₽
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка во 2-й Иркутск, Ново-Ленино,
                                    Рабочее, предместье Марата
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    от 1200 ₽
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка в отдаленные районы города
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    от 1500 ₽
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка за город (в зависимости от
                                    удаленности от Иркутска)
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    от 900 ₽
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка 5 тонным кран-бортом по городу и
                                    пригороду
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    от 3500 ₽
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка в г. Ангарск
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    от 2500 ₽
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка в г. Шелехов
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    1200 ₽
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка до п. Хомутово
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    от 1500 ₽
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка до п. Смоленщина
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    от 1000 ₽
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка до с. Пивовариха
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    от 1200 ₽
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка по Мельничному тракту
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    от 1000 ₽
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <Typography className="price-name">
                                    Доставка по Байкальскому тракту
                                </Typography>
                                <Box className="price-dots" />
                                <Typography className="price-val">
                                    от 1300 ₽
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 5 }}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <img src={delivery} alt="" />
                    </Grid>
                </Grid>
            )}
        </Container>
    );
}
