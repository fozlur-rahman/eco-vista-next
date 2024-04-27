import { getTemparatureData } from "@/app/lib/weather-info";
import TemparatureComponent from "@/components/TemparatureComponent";
import React from "react";

const TemparaturePage = ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    return <TemparatureComponent lat={latitude} lon={longitude} />;
};

export default TemparaturePage;
