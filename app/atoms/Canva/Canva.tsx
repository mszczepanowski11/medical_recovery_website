'use client';

import React, { CSSProperties, FC } from 'react';

// Utils

// Components
import { CanvaWrapper } from './Canva.styles';

type CanvaProps = {
  width?: string;
  height?: string;
  style?: CSSProperties;
  forwardedRef?: any;
};

const Canva: FC<CanvaProps> = function ({
  width,
  height,
  style,
  forwardedRef,
}) {
  return (
    <CanvaWrapper
      ref={forwardedRef}
      width={width}
      height={height}
      style={style}
    />
  );
};

export default React.memo(Canva);
