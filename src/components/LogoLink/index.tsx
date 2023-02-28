import * as Styled from './styles';
import { Heading } from '../Heading';
import Link from 'next/link';

export type LogoLinkProps = {
  text: string;
  imgUrl?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({ text, imgUrl = '', link, newTab = false }: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          <Styled.Container>{imgUrl ? <img src={imgUrl} alt={text} /> : text}</Styled.Container>
        </Link>
      </Heading>
    );
  }
  return (
    <Heading size="small" uppercase>
      <Styled.Container target={target} href={link}>
        {imgUrl ? <img src={imgUrl} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};
