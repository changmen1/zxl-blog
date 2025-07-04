// TODO 卡片时间线 时间线还未解决
import { useRef, useState, useEffect } from 'react';
import TiltedCard from '@/components/bits/TiltedCard';
import qf from "@/assets/Timeline/qf.jpg"
import nb from "@/assets/Timeline/nb.jpg"

const Timeline = () => {
    const cardARef = useRef<HTMLDivElement>(null);
    const cardBRef = useRef<HTMLDivElement>(null);
    const cardCRef = useRef<HTMLDivElement>(null);
    const [showLines, setShowLines] = useState(false);
    const [lines, setLines] = useState<{ d: string }[]>([]);
    const svgRef = useRef<SVGSVGElement>(null);

    const cardData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        imageSrc: nb,
        altText: `海晏北路`,
        captionText: `宁波`,
    }));

    /**时间线组件 测试阶段 */
    const Text = () => {
        return (
            <div className="relative h-screen bg-Timeline">
                {/* SVG 画布 */}
                <svg ref={svgRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                            <polygon points="-1 0, 6 3.5, 0 6"
                                className="fill-current text-white-contrast-1 stroke-current"></polygon>
                        </marker>
                        <marker id="arrowPoint" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                            <circle cx="5" cy="5" r="2"
                                className="fill-current text-white-contrast-1 stroke-current"></circle>
                        </marker>
                    </defs>
                    {lines.map((line, idx) => (
                        <path
                            className="stroke-current text-white-contrast-1" stroke-width="3"
                            stroke-linecap="round"
                            stroke-dasharray="3,8"
                            key={idx}
                            d={line.d}
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                            markerEnd="url(#arrow)"
                            marker-start="url(#arrowPoint)" filter="url(#shadow)" opacity="1"
                        />
                    ))}
                </svg>

                {/* 卡片区域 */}
                <div className="flex justify-around pt-40 text-center">
                    <div
                        ref={cardARef}
                        onMouseEnter={() => setShowLines(true)}
                        onMouseLeave={() => setShowLines(false)}
                        className="w-40 h-24 cursor-pointer"
                        style={{
                            backgroundImage: `url(${qf})`,
                            backgroundSize: 'contain',       // 保证图片完整显示
                            backgroundRepeat: 'no-repeat',   // 不重复
                            backgroundPosition: 'center',    // 居中显示
                        }}
                    />
                    <div
                        ref={cardBRef}
                        className="w-40 h-24 cursor-pointer"
                        style={{
                            backgroundImage: `url(${qf})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }} />
                    <div
                        ref={cardCRef}
                        className="w-40 h-24 cursor-pointer"
                        style={{
                            backgroundImage: `url(${qf})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }} />
                </div>
            </div>
        )
    }

    useEffect(() => {
        if (showLines && cardARef.current && cardBRef.current && cardCRef.current) {
            const getCenter = (el: HTMLElement) => {
                const elRect = el.getBoundingClientRect();
                const svgRect = svgRef.current?.getBoundingClientRect();

                return {
                    x: elRect.left + elRect.width / 2 - (svgRect?.left || 0),
                    y: elRect.top + elRect.height / 2 - (svgRect?.top || 0),
                };
            };
            const start = getCenter(cardARef.current);
            const endB = getCenter(cardBRef.current);
            const endC = getCenter(cardCRef.current);

            const createPath = (from: { x: number; y: number }, to: { x: number; y: number }) =>
                `M ${from.x},${from.y} Q ${(from.x + to.x) / 2},${from.y - 100} ${to.x},${to.y}`;

            setLines([
                { d: createPath(start, endB) },
                { d: createPath(start, endC) },
            ]);
        } else {
            setLines([]);
        }
    }, [showLines]);

    return (
        <>
            <div className="relative bg-Timeline grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                {cardData.map((item) => (
                    <TiltedCard
                        key={item.id}
                        imageSrc={item.imageSrc}
                        altText={item.altText}
                        captionText={item.captionText}
                        containerHeight="100px"
                        containerWidth="200px"
                        imageHeight="100px"
                        imageWidth="200px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="tilted-card-demo-text">
                                {item.captionText}
                            </p>
                        }
                    />
                ))}
            </div>
            {/* <Text /> */}
        </>
    );
};

export default Timeline;

