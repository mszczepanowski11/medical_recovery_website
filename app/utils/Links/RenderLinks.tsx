'use client';

import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Components
const RenderLinksWrapper = styled.nav`
  display: none;
`;

type RenderLinksProps = { links: { href: string; children: any }[] };

const RenderLinks: FC<RenderLinksProps> = function ({ links }) {
  const t = useTranslations();

  const renderLinks = useMemo(
    () =>
      links?.map((link) => (
        <a key={link.href} href={link?.href}>
          {link?.children}
        </a>
      )),
    [links],
  );

  return <RenderLinksWrapper>{renderLinks}</RenderLinksWrapper>;
};

export default React.memo(RenderLinks);
