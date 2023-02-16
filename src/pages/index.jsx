// import { mapData } from '@/api/map-data';
import { LoadPages } from '@/api/load-pages';
import { Home } from '@/templates/Home';
import P from 'prop-types';

export default function Index({ data = null }) {
  return <Home data={data} />;
}
export const getStaticProps = async () => {
  let data = null;

  try {
    data = await LoadPages('my-page');
  } catch (e) {
    console.log(e);
  }

  if (!data || !data.length) {
    return { notFound: true };
  }
  return {
    props: {
      data,
    },
  };
};
Index.propTypes = {
  data: P.array,
};
