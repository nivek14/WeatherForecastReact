import { useEffect, useState } from 'react';
import { CapitalsArray } from './Capitals.mock';
import * as S from './Capitals.styles';
import CapitalsCard from './components/CapitalsCard';
import axios from 'axios'
import { WeatherData } from './Capitals.type';

export const Capitals = () => {

    const [randomCapitals, setRandomCapitals] = useState<string[]>([]);
    const [weather, setWeather] = useState<WeatherData[] | null>(null);
    const apiKey = "40cc5c7f62f00b107dec66103b9aae48"; // COLOCAR EM UM .ENV

    useEffect(() => {
        setRandomCapitals(() => {
            const shuffled = [...CapitalsArray].sort(() => Math.random() - 0.5);
            const selected = shuffled.slice(0, 10);
            return selected;
        });
    }, []);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const promises = randomCapitals.map((city) => {
                    return axios.get("https://api.openweathermap.org/data/2.5/weather", {
                        params: {
                            q: city,
                            appid: apiKey,
                            units: "metric",
                            lang: "pt_br",
                        },
                    });
                });

                const responses = await Promise.all(promises);

                const weatherData = responses.map((res) => res.data);

                setWeather(weatherData);

            } catch (error) {
                console.error("Erro ao buscar dados do clima:", error);
            }
        };

        fetchWeather();
    }, [randomCapitals]);

    return (
        <S.Container>
            <S.TitleCapital color='#fff'>Capitais</S.TitleCapital>
            <S.CapitalsElement>
                {weather && (
                    <>
                        <CapitalsCard capitals={weather.slice(0, weather.length / 2)} />
                        <CapitalsCard capitals={weather.slice(weather.length / 2, weather.length)} />
                    </>
                )}
            </S.CapitalsElement>
        </S.Container>
    );
};

export default Capitals;