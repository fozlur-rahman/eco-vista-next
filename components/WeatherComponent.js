import React from "react";
import Card from "./Card";
import { getweatherData } from "@/app/lib/weather-info";
import Image from "next/image";

const WeatherComponent = async ({ lat, lon }) => {
    const { main, description } = await getweatherData(lat, lon);
    return (
        <Card>
            <h6 class="feature-name">Current Weather</h6>
            <div class="feature-main flex flex-row space-x-8">
                <Image
                    class="max-w-20"
                    src="/icons/icon_rain.png"
                    alt="rain icon"
                    width={80}
                    height={80}
                />
                <div>
                    <h3 class="feature-title">{main}</h3>
                    <span class="feature-name">{description} </span>
                </div>
            </div>
        </Card>
    );
};

export default WeatherComponent;
