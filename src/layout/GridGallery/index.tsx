import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../../components/Heading';
import { TextComponent } from '../../components/TextComponent';
export type GridGalleryElementProps = {
  altText: string;
  imgUrl: string;
};
export type GridGalleryProps = {
  title: string;
  description: string;
  grid: GridGalleryElementProps[];
  background?: boolean;
  sectionId?: string;
  component?: string;
};
export const GridGallery = ({ title, description, grid, background = false, sectionId = '' }: GridGalleryProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((e) => (
            <Styled.GridElement key={e.imgUrl}>
              <Styled.Image src={e.imgUrl} alt={e.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
