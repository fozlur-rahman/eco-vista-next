export async function getLocationData(lat, lon) {
    try {
        const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
        );
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err.message);
    }
}

export async function getLocationLatLongList() {
    try {
        const res = await fetch("http://localhost:3000/api/location");
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err.message);
    }
}

export async function getLocationLatLong(locationName) {
    try {
        const res = await fetch(
            `http://localhost:3000/api/location/${locationName}`
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err.message);
    }
}

export async function getResolvedLatLong(lat, lon, location) {
    if (lat && lon) {
        return { lat, lon };
    }
    const locationLatLon = await getLocationLatLong(location);

    if (locationLatLon.latitude && locationLatLon.longitude) {
        const lat = locationLatLon.loatiude;
        const lon = locationLatLon.longitude;

        return { lat, lon };
    }
}
