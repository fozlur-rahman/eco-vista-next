import AqiComponents from "@/components/AqiComponents";
import React from "react";

const AQIPage = ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    return <AqiComponents lat={latitude} lon={longitude} />;
};

export default AQIPage;
