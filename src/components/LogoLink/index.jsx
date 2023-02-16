import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import Link from 'next/link';
export const LogoLink = ({ text, imgUrl = '', link }) => {
  const nextLink = link.match(/^\//) ? true : false;

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
      <Styled.Container href={link}>{imgUrl ? <img src={imgUrl} alt={text} /> : text}</Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  imgUrl: P.string,
  link: P.string.isRequired,
};
