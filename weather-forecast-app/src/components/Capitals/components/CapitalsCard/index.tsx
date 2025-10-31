import * as S from './CapitalsCard.styles';
import { Props } from './CapitalsCard.types';

export const CapitalsCard = (props: Props) => {
    const { capitals } = props;
    return (
        <S.CapitalsContainer>
            <S.MinMaxContainer>
                <p>Min</p>
                <p>Max</p>
            </S.MinMaxContainer>
            {capitals.map((capital, index) =>
                <S.CapitalsElement key={index}>
                    <p>{Math.floor(capital.main.temp_min)}</p>
                    <p>{Math.floor(capital.main.temp_max)}</p>
                    <p>{capital.name}</p>
                </S.CapitalsElement>
            )}
        </S.CapitalsContainer>
    );
};

export default CapitalsCard;