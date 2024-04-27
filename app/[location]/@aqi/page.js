import { getResolvedLatLong } from "@/app/lib/location-info";
import AqiComponents from "@/components/AqiComponents";
import NoLocationInfo from "@/components/NoLocationInfo";
import React from "react";

const AQIPage = async ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    const resolve = await getResolvedLatLong(latitude, longitude, location);
    if (resolve?.lat && resolve?.lon) {
        return <AqiComponents lat={resolve.lat} lon={resolve.lat} />;
    } else {
        return <NoLocationInfo location={location} />;
    }
};

export default AQIPage;
