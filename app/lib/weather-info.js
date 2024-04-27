// wearher data
export async function getweatherData(lat, lon) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`
        );

        const data = await response.json();

        return data?.weather[0];
    } catch (err) {
        console.log(err);
    }
}

// Temparature data
export async function getTemparatureData(lat, lon) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`
        );

        const data = await response.json();

        return data?.main;
    } catch (err) {
        console.log(err);
    }
}

// wind data
export async function getWindData(lat, lon) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`
        );

        const data = await response.json();

        return data?.wind;
    } catch (err) {
        console.log(err);
    }
}

// aqi data
export async function getAqiData(lat, lon) {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`
        );

        const data = await response.json();

        return data?.list[0];
    } catch (err) {
        console.log(err);
    }
}
