import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../../components/Heading';
import { TextComponent } from '../../components/TextComponent';
export type GridTwoColumnsProps = {
  title: string;
  text: string;
  imgUrl: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};
export const GridTwoColumns = ({ title, text, imgUrl, background = false, sectionId = '' }: GridTwoColumnsProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImgContainer>
          <Styled.Img src={imgUrl} alt={title} />
        </Styled.ImgContainer>
      </Styled.Container>
    </SectionBackground>
  );
};
