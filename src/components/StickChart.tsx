import styled from '@emotion/styled';

interface ChartProps {
    rate: number;
}

const StickChart = ({ rate }: ChartProps): JSX.Element => {
    return <Chart rate={rate}>{rate}%</Chart>;
};

const Chart = styled.div`
    width: 300px;
    height: 50px;
    background-color: #ddd;
    position: relative;
    margin: 16px 0;
    color: black;
    text-align: right;

    &:before {
        width: ${({ rate }: ChartProps) => rate}%;
        height: 100%;
        background-color: #3f8bc9;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }
`;

export default StickChart;
