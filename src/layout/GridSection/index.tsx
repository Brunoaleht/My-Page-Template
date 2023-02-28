import { Heading } from '../../components/Heading';
import { TextComponent } from '../../components/TextComponent';
import { SectionBackground } from '../SectionBackground';
import * as Styled from './styles';

export type GridSectionElementProps = {
  id?: number;
  title: string;
  description: string;
};

export type GridSectionProps = {
  title: string;
  description: string;
  grid: GridSectionElementProps[];
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridSection = ({ title, description, grid, background = false, sectionId = '' }: GridSectionProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridItem key={`${el.id}+${el.title}`}>
              <Heading size="medium" colorDark={!background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridItem>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
