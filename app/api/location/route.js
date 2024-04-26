import { getLocations } from "./location-utils";

export async function GET() {
    const locationData = await getLocations();
    return Response.json(locationData);
}
