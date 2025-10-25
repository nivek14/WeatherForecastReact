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
                    <p>18</p>
                    <p>35</p>
                    <p>{capital}</p>
                </S.CapitalsElement>
            )}
        </S.CapitalsContainer>
    );
};

export default CapitalsCard;