//import { Heading } from '../../components/Heading';
//import { useEffect, useState } from 'react';
import P from 'prop-types';
import Head from 'next/head';
import config from '@/config';

import { Base } from '../Base';
//import { Loading } from '../Loading';

import { GridTwoColumns } from '../../layout/GridTwoColumns';
import { GridContent } from '../../layout/GridContent';
import { GridSection } from '../../layout/GridSection';
import { GridGallery } from '../../layout/GridGallery';
//import * as Styled from './styles';

export const Home = ({ data }) => {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { text, link, links, imgUrl } = menu;

  return (
    <>
      <Head>
        <title>
          {title}||{config.siteName}
        </title>
      </Head>
      <Base links={links} footerHtml={footerHtml} logoData={{ text, link, imgUrl }}>
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;

          if (component === 'sections.section-two-columns') {
            return <GridTwoColumns key={key} {...section} />;
          }
          if (component === 'sections.section-content') {
            return <GridContent key={key} {...section} />;
          }
          if (component === 'sections.section-grid-text') {
            return <GridSection key={key} {...section} />;
          }
          if (component === 'sections.section-grid-image') {
            return <GridGallery key={key} {...section} />;
          }
        })}
      </Base>
    </>
  );
};
Home.propTypes = {
  data: P.array,
};
