'use client';

import React, { CSSProperties, FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex } from '@/app/utils/GlobalStyles';
import { TabButton, TabsWrapper } from './Tabs.styles';
import Text from '../Text/Text';

type TabsProps = {
  tabs: { id: string | number; label: string; onClick?: () => void }[];
  activeTab: string | number | null;
  setActiveTab: any;
  children: React.ReactNode;
  style?: CSSProperties;
  tabsStyle?: CSSProperties;
};

const Tabs: FC<TabsProps> = function ({
  tabs,
  activeTab,
  setActiveTab,
  children,
  style,
  tabsStyle,
}) {
  const t = useTranslations();

  const renderTabs = useMemo(
    () =>
      tabs?.map((tab) => (
        <TabButton
          key={tab.id}
          onClick={() => {
            if (tab?.onClick) tab.onClick();
            setActiveTab(tab.id);
          }}
          $active={activeTab === tab.id}
        >
          <Text noMargin fontWeight={500}>
            {tab.label}
          </Text>
        </TabButton>
      )),
    [activeTab, setActiveTab, tabs],
  );

  return (
    <TabsWrapper style={style}>
      <Flex $flexDirection="column">
        <Flex
          $columnGap="0.25rem"
          $marginBottom="1rem"
          style={{ borderBottom: `2px solid ${Colors.border}`, ...tabsStyle }}
        >
          {renderTabs}
        </Flex>
        {children}
      </Flex>
    </TabsWrapper>
  );
};

export default React.memo(Tabs);
