import  SanityClient, { createClient }  from "@sanity/client";
import ImageUrlBuilder from '@sanity/image-url'
export const client = createClient({
    projectId:'gbq75ecy',
    dataset:'production',
    apiVersion:'2023-02-08',
    useCdn:true,
    token:process.env.REACT_APP_GOOGLE_TOKEN,
})
const builder = ImageUrlBuilder(client);
export const urlFor = (source)=>builder.image(source)