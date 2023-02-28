import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';
export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
};
export const SectionBackground = ({ children, background = false, sectionId = '' }: SectionBackgroundProps) => {
  const id = sectionId ? sectionId : '';
  return (
    <Styled.Container background={background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};
