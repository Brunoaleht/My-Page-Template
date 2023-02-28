import { GridContentProps } from '../layout/GridContent';
import { GridGalleryElementProps, GridGalleryProps } from '../layout/GridGallery';
import { GridSectionElementProps, GridSectionProps } from '../layout/GridSection';
import { GridTwoColumnsProps } from '../layout/GridTwoColumns';
import { SectionsProps } from '../templates/Home';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapSections = (sections = []): SectionsProps[] => {
  return sections.map((section) => {
    if (section.__component === 'sections.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'sections.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'sections.section-grid') {
      const { text_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (text_grid.length === 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {} as any): GridTwoColumnsProps => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  const imgUrl = section.image.data.attributes.url || '';

  return {
    component,
    title,
    text,
    imgUrl,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    background,
    sectionId,
    html,
  };
};

export const mapTextGrid = (section = {} as any): GridSectionProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;
  return {
    component: 'sections.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((item: any): GridSectionElementProps => {
      const { title = '', description = '' } = item;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {} as any): GridGalleryProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = {},
  } = section;
  return {
    component: 'sections.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid.data.map((img: any): GridGalleryElementProps => {
      const { attributes: { url: imgUrl = '', alternativeText: altText = '' } = '' } = img;
      return {
        imgUrl,
        altText,
      };
    }),
  };
};
