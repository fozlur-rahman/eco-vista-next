import React from "react";
import Card from "./Card";
import { getWindData } from "@/app/lib/weather-info";
import Image from "next/image";

const WindComponent = async ({ lat, lon }) => {
    const { speed, deg } = await getWindData(lat, lon);
    return (
        <Card>
            <h6 class="feature-name">Wind</h6>
            <div class="feature-main flex flex-row space-x-8">
                <Image
                    class="max-w-20"
                    src="/icons/icon_wind.png"
                    alt="rain icon"
                    width={80}
                    height={80}
                />
                <div>
                    <h3 class="feature-title">{speed} meter/sec</h3>
                    <span class="feature-name">{deg} degrees</span>
                </div>
            </div>
        </Card>
    );
};

export default WindComponent;
