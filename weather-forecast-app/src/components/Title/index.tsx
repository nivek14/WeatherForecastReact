import * as S from './Title.styles';
import { Props } from './Title.types';

export const Title = (props: Props) => {

    const { title } = props;

    return (
        <S.TitleContainer>
            <h1>{title}</h1>
        </S.TitleContainer>
    );
};

export default Title;