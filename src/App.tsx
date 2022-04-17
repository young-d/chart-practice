import styled from '@emotion/styled';
import DoughnutChart from './components/DoughnutChart';
import StickChart from './components/StickChart';

function App() {
    return (
        <Container className="App">
            <DoughnutChart />
            <Wrapper>
                <StickChart rate={70} />
                <StickChart rate={50} />
                <StickChart rate={30} />
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default App;
