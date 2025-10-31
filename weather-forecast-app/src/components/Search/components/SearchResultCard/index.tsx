import { useEffect, useState } from 'react';
import * as S from './SearchResultCard.styles';
import { Props } from './SearchResultCard.types';

export const SearchResultCard = (props: Props) => {

    const [showComponent, setShowComponent] = useState<boolean>(false);

    useEffect(() => {
        setShowComponent(true);
    }, [])

    return (
        <S.Container showComponent={showComponent}>
        </S.Container>
    );
};

export default SearchResultCard;