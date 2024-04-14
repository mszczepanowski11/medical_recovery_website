'use client';

import React, { FC, useEffect, useRef, useState } from 'react';

// Utils

// Components
import Canva from '@/app/atoms/Canva/Canva';
import { HeroLineCanvaWrapper } from './HeroLineCanva.styles';

type HeroLineCanvaProps = {};

const HeroLineCanva: FC<HeroLineCanvaProps> = function ({}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasWrapperRef = useRef<HTMLDivElement | null>(null);
  const [sizes, setSizes] = useState<null | { width: string; height: string }>(
    null,
  );

  useEffect(() => {
    setSizes({
      width: `${canvasWrapperRef.current?.offsetWidth}px`,
      height: `${canvasWrapperRef.current?.offsetHeight}px`,
    });
    setTimeout(() => {
      const canvas = canvasRef?.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          console.log('kaczuszka 12');
          const width = canvasWrapperRef.current?.offsetWidth || 0;
          const height = canvasWrapperRef.current?.offsetHeight || 0;
          let lineWidth = 0;
          let lineHeight = 0;
          ctx.moveTo(0, 10);
          ctx.setLineDash([6, 4]);
          ctx.strokeStyle = '#AA7CE8';
          const lineFunc = () => {
            console.log('kaczuszka 1', lineWidth, width);
            ctx.beginPath();
            ctx.bezierCurveTo(
              lineWidth,
              lineHeight,
              width / 20,
              height / 1.2,
              lineWidth,
              lineHeight,
            );
            ctx.stroke();
            if (lineWidth <= width) {
              console.log('kaczuszka 2');
              setTimeout(() => {
                requestAnimationFrame(lineFunc);
                lineWidth += width / 10;
                lineHeight += height / 10;
              }, 1000);
            }
          };
          lineFunc();
        }
      }
    }, 1000);
  }, []);

  return (
    <HeroLineCanvaWrapper ref={canvasWrapperRef}>
      {!!sizes && (
        <Canva
          forwardedRef={canvasRef}
          width={sizes.width}
          height={sizes.height}
        />
      )}
    </HeroLineCanvaWrapper>
  );
};

export default React.memo(HeroLineCanva);
