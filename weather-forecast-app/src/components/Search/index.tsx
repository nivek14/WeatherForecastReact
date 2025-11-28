import { useEffect, useState } from 'react';
import * as S from './Search.styles';
import { Props, SearchWeather } from './Search.types';
import { Search as SearchIcon } from 'lucide-react';
import SearchResultCard from './components/SearchResultCard';
import axios from 'axios';


export const Search = (props: Props) => {
    const { placeholder } = props;

    const [searchValue, setSearchValue] = useState("");
    const [weather, setWeather] = useState<SearchWeather | null>(null);
    const apiKey = "40cc5c7f62f00b107dec66103b9aae48";

    useEffect(() => {
        console.log("weather atualizado:", weather);
    }, [weather]);

    const handleSearch = () => {
        async function getWeather(city: string) {
            try {
                const weatherRes = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                    params: {
                        q: city,
                        appid: apiKey,
                        units: "metric",
                        lang: "pt_br"
                    }
                })
                setWeather(weatherRes.data);
            } catch (err) {
                console.error(err);
            }
        }
        getWeather(searchValue);
    }

    return (
        <S.Container>
            {weather && (
                <SearchResultCard
                    name={weather.name}
                    description={weather.weather[0].description}
                    feels_like={weather.main.feels_like}
                    temp={weather.main.temp}
                    temp_min={weather.main.temp_min}
                    temp_max={weather.main.temp_max}
                    humidity={weather.main.humidity}
                    speed={weather.wind.speed}
                    showCard={true}
                />
            )}
            <S.InputWrapper>
                <S.SearchContainer
                    type='text'
                    placeholder={placeholder}
                    name="search"
                    id="search-input"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)} />
                <S.SearchIcon onClick={() => handleSearch()}>
                    <SearchIcon />
                </S.SearchIcon>
            </S.InputWrapper>
        </S.Container>
    );
};

export default Search;