import { getResolvedLatLong } from "@/app/lib/location-info";
import NoLocationInfo from "@/components/NoLocationInfo";
import WindComponent from "@/components/WindComponent";

const WindPage = async ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    const resolve = await getResolvedLatLong(latitude, longitude, location);
    if (resolve?.lat && resolve?.lon) {
        return <WindComponent lat={resolve.lat} lon={resolve.lat} />;
    } else {
        return <NoLocationInfo location={location} />;
    }
};

export default WindPage;
