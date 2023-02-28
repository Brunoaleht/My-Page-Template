import Head from 'next/head';
import config from '../../config';

import { Base } from '../Base';
//import { Loading } from '../Loading';

import { GridTwoColumns, GridTwoColumnsProps } from '../../layout/GridTwoColumns';
import { GridContent, GridContentProps } from '../../layout/GridContent';
import { GridSection, GridSectionProps } from '../../layout/GridSection';
import { GridGallery, GridGalleryProps } from '../../layout/GridGallery';

import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';
//import * as Styled from './styles';

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionsProps[];
};

export type SectionsProps = GridContentProps | GridGalleryProps | GridSectionProps | GridTwoColumnsProps;
export type HomeProps = {
  data: PageData[];
};
export const Home = ({ data }: HomeProps) => {
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
            return <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />;
          }
          if (component === 'sections.section-content') {
            return <GridContent key={key} {...(section as GridContentProps)} />;
          }
          if (component === 'sections.section-grid-text') {
            return <GridSection key={key} {...(section as GridSectionProps)} />;
          }
          if (component === 'sections.section-grid-image') {
            return <GridGallery key={key} {...(section as GridGalleryProps)} />;
          }
        })}
      </Base>
    </>
  );
};
