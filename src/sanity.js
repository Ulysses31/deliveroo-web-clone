import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: '5tct4gsu',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-09-15'
});

export default client;
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// RUN THIS TO ADD EXCEPTION FOR LOCALHOST:PORT CORS POLICY
// sanity cors add http://localhost:port