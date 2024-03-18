'use client';

import React, { FC } from 'react';
import { useCalendlyEventListener, InlineWidget } from 'react-calendly';

// Utils
import { GridContainer, GridItem } from '@/app/[lng]/GlobalStyles';
import { Colors } from '@/app/utils/constans';

// Components
import {} from './CalendlyWidget.styles';

type CalendlyWidgetProps = {};

const CalendlyWidget: FC<CalendlyWidgetProps> = function ({}) {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log('onProfilePageViewed'),
    onDateAndTimeSelected: () => console.log('onDateAndTimeSelected'),
    onEventTypeViewed: () => console.log('onEventTypeViewed'),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  return (
    <GridContainer>
      <GridItem $colEnd={5}>
        {/* <InlineWidget url="https://calendly.com/skrzypkka/30min" /> */}
      </GridItem>
      <GridItem />
    </GridContainer>
  );
};

export default React.memo(CalendlyWidget);
