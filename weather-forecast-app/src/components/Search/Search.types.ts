export type Props = {
    placeholder: string;
};

export type SearchWeather = {
    name: string;
    weather: {
        description: string;
    }
    main: {
        feels_like: number
        temp: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    }
    wind: {
        speed: number;
    }
};