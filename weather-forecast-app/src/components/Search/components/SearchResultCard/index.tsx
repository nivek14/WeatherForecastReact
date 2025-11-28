import { useEffect, useState } from 'react';
import * as S from './SearchResultCard.styles';
import { Props } from './SearchResultCard.types';
import { ArrowDown, ArrowUp, X } from 'lucide-react';

export const SearchResultCard = (props: Props) => {

    const { name, description, feels_like, temp, temp_min, temp_max, humidity, speed, showCard } = props;
    const [showComponent, setShowComponent] = useState<boolean>(false);


    useEffect(() => {
        setShowComponent(showCard);
    }, []);

    const handleClose = () => {
        setShowComponent(prev => !prev)
    }

    return (
        <S.Container showComponent={showComponent}>
            <S.City>{name}</S.City>
            <S.CityMainStatus>{Math.floor(temp)}°C , {description}</S.CityMainStatus>
            <S.OtherWeatherInfo>
                <S.MinMaxTemp>
                    <S.MinMaxTempItem>
                        <ArrowDown color='#ff8c00' />
                        <p><b>{Math.floor(temp_min)}°</b></p>
                    </S.MinMaxTempItem>
                    <S.MinMaxTempItem>
                        <ArrowUp color='#ff8c00' />
                        <p><b>{Math.floor(temp_max)}°</b></p>
                    </S.MinMaxTempItem>
                </S.MinMaxTemp>
                <p>Sensação <b>{Math.floor(feels_like)}°</b></p>
                <p>Vento <b>{Math.floor(speed)}km/h</b></p>
                <p>Humidade <b>{humidity}%</b></p>
            </S.OtherWeatherInfo>
            <S.CloseButton onClick={() => handleClose()}>
                <X />
            </S.CloseButton>
        </S.Container>
    );
};

export default SearchResultCard;