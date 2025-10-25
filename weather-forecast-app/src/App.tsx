import * as S from './App.styles';
import Divider from './components/Divider';
import Search from './components/Search';
import Title from './components/Title';

function App() {
  return (
    <S.PageContainer>
      <S.ContentContainer>
        <Title title='Previsão do tempo' />
        <Search placeholder='Insira aqui o nome da cidade' />
        <Divider />
      </S.ContentContainer>
    </S.PageContainer>
  );
}

export default App;
