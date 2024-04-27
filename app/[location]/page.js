import LocationDetector from "@/components/LocationDetector";
import LocationInfo from "@/components/LocationInfo";

const page = ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    return <LocationInfo lat={latitude} lon={longitude} location={location} />;
};

export default page;
