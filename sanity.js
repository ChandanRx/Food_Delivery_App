import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
// import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';


const client = createClient({
    projectId: 'do7hjbve',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03',


})
const builder = imageUrlBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;

