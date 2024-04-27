import { getAqiData } from "@/app/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

const AqiComponents = async ({ lat, lon }) => {
    const { main, components } = await getAqiData(lat, lon);
    console.log(components);
    const getAQIRating = (aqi) => {
        switch (aqi) {
            case 1:
                return "Good";
            case 2:
                return "Fair";
            case 3:
                return "Modarate";
            case 4:
                return "Poor";
            case 5:
                return "Very Poor";

            default:
                "unknown";
        }
    };

    return (
        <div className="lg:col-span-6">
            <Card>
                <div>
                    <h6 className="feature-name">Air Pollution & Quality</h6>

                    <div className="flex gap-10 p-5 mt-3 space-y-2 lg:space-y-3">
                        <div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-sm">
                                    <Image
                                        className="max-w-[18px]"
                                        src="/icons/icon_air_element.png"
                                        alt="icon"
                                        width={18}
                                        height={18}
                                    />
                                    Air Quality Index
                                </div>
                                <span className="text-right text-sm text-white lg:text-sm">
                                    {getAQIRating(main?.aqi)}
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-sm">
                                    <Image
                                        className="max-w-[18px]"
                                        src="/icons/icon_air_element.png"
                                        alt="icon"
                                        width={18}
                                        height={18}
                                    />
                                    Carbon Monoxide
                                </div>
                                <span className="text-right text-sm text-white lg:text-sm">
                                    {components?.co} µg/m³
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-sm">
                                    <Image
                                        className="max-w-[18px]"
                                        src="/icons/icon_air_element.png"
                                        alt="icon"
                                        width={18}
                                        height={18}
                                    />
                                    Nitric Oxide
                                </div>
                                <span className="text-right text-sm text-white lg:text-sm">
                                    {components?.no} ppm
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-sm">
                                    <Image
                                        className="max-w-[18px]"
                                        src="/icons/icon_air_element.png"
                                        alt="icon"
                                        width={18}
                                        height={18}
                                    />
                                    Nitrogen Dioxide
                                </div>
                                <span className="text-right text-sm text-white lg:text-sm">
                                    {components?.no2} ppm
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-sm">
                                    <Image
                                        className="max-w-[18px]"
                                        src="/icons/icon_air_element.png"
                                        alt="icon"
                                        width={18}
                                        height={18}
                                    />
                                    Ozone
                                </div>
                                <span className="text-right text-sm text-white lg:text-sm">
                                    {components?.o3} µg/m³
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-sm">
                                    <Image
                                        className="max-w-[18px]"
                                        src="/icons/icon_air_element.png"
                                        alt="icon"
                                        width={18}
                                        height={18}
                                    />
                                    Sulfur Dioxide
                                </div>
                                <span className="text-right text-sm text-white lg:text-sm">
                                    {components?.so2} ppm
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-sm">
                                    <Image
                                        className="max-w-[18px]"
                                        src="/icons/icon_air_element.png"
                                        alt="icon"
                                        width={18}
                                        height={18}
                                    />
                                    PM2.5
                                </div>
                                <span className="text-right text-sm text-white lg:text-sm">
                                    {components?.pm2_5} µg/m³
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>{" "}
        </div>
    );
};

export default AqiComponents;
