import { useEffect, useState } from 'react';
import { CapitalsArray } from './Capitals.mock';
import * as S from './Capitals.styles';
import CapitalsCard from './components/CapitalsCard';

export const Capitals = () => {

    const [randomCapitals, setRandomCapitals] = useState<string[]>([]);

    useEffect(() => {
        setRandomCapitals(() => {
            const shuffled = [...CapitalsArray].sort(() => Math.random() - 0.5);
            const selected = shuffled.slice(0, 10);
            return selected;
        });
    }, [])

    return (
        <S.Container>
            <S.TitleCapital color='#fff'>Capitais</S.TitleCapital>
            <S.CapitalsElement>
                <CapitalsCard capitals={randomCapitals.slice(0, randomCapitals.length / 2)} />
                <CapitalsCard capitals={randomCapitals.slice(randomCapitals.length / 2, randomCapitals.length)} />
            </S.CapitalsElement>
        </S.Container>
    );
};

export default Capitals;