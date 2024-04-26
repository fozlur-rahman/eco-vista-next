const data = [
    {
        location: "Dhaka",
        latitude: 23.8103,
        longitude: 90.4125,
    },
    {
        location: "Pabna",
        latitude: 24.006,
        longitude: 89.2372,
    },
    {
        location: "New York location",
        latitude: 40.7128,
        longitude: -74.006,
    },
    {
        location: "Tokyo",
        latitude: 35.6895,
        longitude: 139.6917,
    },
    {
        location: "London",
        latitude: 51.5074,
        longitude: -0.1278,
    },
    {
        location: "Paris",
        latitude: 48.8566,
        longitude: 2.3522,
    },
    {
        location: "Sydney",
        latitude: -33.8688,
        longitude: 151.2093,
    },
    {
        location: "Rio de Janeiro",
        latitude: -22.9068,
        longitude: -43.1729,
    },
    {
        location: "Moscow",
        latitude: 55.7558,
        longitude: 37.6176,
    },
    {
        location: "Cairo",
        latitude: 30.0444,
        longitude: 31.2357,
    },
];

async function getLocations() {
    return data;
}

async function getLocationByName(location) {
    if (!location) return null;
    const found = data.find(
        (item) => item.location.toLowerCase() === location.toLowerCase()
    );

    return found || {};
}

export { getLocations, getLocationByName };
