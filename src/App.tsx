import styled from '@emotion/styled';
import SVG from './components/D3/SVG';
import DoughnutChart from './components/DoughnutChart';
import StickChart from './components/StickChart';

function App() {
    // const lineData = [
    //     { d: '2007-04-23', v: 93.24 },
    //     { d: '2007-04-24', v: 95.35 },
    //     { d: '2007-04-25', v: 98.84 },
    //     { d: '2007-04-26', v: 99.92 },
    // ];
    return (
        <Container className="App">
            <DoughnutChart />
            <Wrapper>
                <StickChart rate={70} />
                <StickChart rate={50} />
                <StickChart rate={30} />
            </Wrapper>
            <SVG />
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default App;
