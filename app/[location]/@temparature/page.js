import { getResolvedLatLong } from "@/app/lib/location-info";
import NoLocationInfo from "@/components/NoLocationInfo";
import TemparatureComponent from "@/components/TemparatureComponent";

const TemparaturePage = async ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    const resolve = await getResolvedLatLong(latitude, longitude, location);
    if (resolve?.lat && resolve?.lon) {
        return <TemparatureComponent lat={resolve.lat} lon={resolve.lat} />;
    } else {
        return <NoLocationInfo location={location} />;
    }
};

export default TemparaturePage;
