import config from '../config';
import { mapData } from './map-data';
export const LoadPages = async (slug = '') => {
  const cleanSlug = slug ? `?filters[slug]=${slug.replace(/[^a-z0-9-_]/gi, '')}` : '';
  const url = `${config.url}/pages/${cleanSlug}&populate[menu][populate]=*&populate[sections][populate]=*`;
  const raw = await fetch(url);
  const json = await raw.json();
  const { attributes } = json.data[0];
  const data = mapData([attributes]);

  return data;
};
