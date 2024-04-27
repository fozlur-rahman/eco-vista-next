import { getTemparatureData } from "@/app/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

const TemparatureComponent = async ({ lat, lon }) => {
    const { temp, feels_like } = await getTemparatureData(lat, lon);
    return (
        <Card>
            <h6 class="feature-name">Current Temperature</h6>
            <div class="feature-main">
                <Image
                    class="max-w-20"
                    src="/icons/icon_tempareture.png"
                    alt="rain icon"
                    width={80}
                    height={80}
                />
                <h3 class="feature-title">{temp}°C</h3>

                <span class="feature-name">Feels Like {feels_like}°C</span>
            </div>
        </Card>
    );
};

export default TemparatureComponent;
