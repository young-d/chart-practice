import styled from '@emotion/styled';

const DoughnutChart = (): JSX.Element => {
    return (
        <>
            <Circle></Circle>
        </>
    );
};

const Circle = styled.div`
    width: 300px;
    height: 300px;
    margin: auto;
    background: conic-gradient(#3f8bc9 0% 60%, #f2f2f2 60% 100%);
    border-radius: 50%;
    position: relative;

    &:before {
        width: 90%;
        height: 90%;
        background-color: #fff;
        top: 5%;
        left: 5%;
        position: absolute;
        content: '60%';
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default DoughnutChart;
