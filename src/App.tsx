import styled from '@emotion/styled';
import DoughnutChart from './components/DoughnutChart';

function App() {
    return (
        <Container className="App">
            <DoughnutChart />
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`;

export default App;
