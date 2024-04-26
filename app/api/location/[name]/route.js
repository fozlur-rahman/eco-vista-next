import { getLocationByName } from "../location-utils";

export async function GET(request, { params }) {
    const location = params?.name;
    const locationData = await getLocationByName(location);
    return Response.json(locationData);
}
