import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const SVG = (): JSX.Element => {
    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentElement = element.current;
        const width = currentElement?.offsetWidth as number;
        const height = 1000;

        const documentElement = d3
            .select(currentElement)
            .call((g) => g.select('svg').remove())
            .append('svg')
            .attr('viewBox', `0,0,${width},${height}`);

        documentElement.append('circle').attr('cx', 100).attr('cy', 50).attr('r', 20);

        documentElement
            .append('ellipse')
            .attr('cx', 200)
            .attr('cy', 50)
            .attr('rx', 40)
            .attr('ry', 20);

        documentElement
            .append('rect')
            .attr('x', 100)
            .attr('y', 100)
            .attr('width', 100)
            .attr('height', 20);

        documentElement
            .append('rect')
            .attr('x', 250)
            .attr('y', 100)
            .attr('width', 100)
            .attr('height', 20)
            .attr('rx', 10)
            .attr('ry', 10);

        documentElement
            .append('line')
            .attr('x1', 100)
            .attr('y1', 400)
            .attr('x2', 500)
            .attr('y2', 500)
            .attr('stroke', 'black');
        documentElement
            .append('path')
            .attr('d', 'M 100 500 q 0 -50 100 0 l 200 300')
            .attr('stroke', 'black');
    }, []);

    return <div ref={element} style={{ width: 1000, height: 1000 }}></div>;
};

export default SVG;
