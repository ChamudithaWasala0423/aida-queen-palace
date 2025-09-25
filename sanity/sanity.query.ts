import client from "./sanity.client";
import groq from "groq";

export async function getGallery() {
  return client.fetch(
    groq`*[_type == "Gallary"]{
        type,
        "imageUrl": image.asset->url
      }`
  );
}



export async function getPost(start = 0, limit = 6) {
  const postData = await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) [${start}...${start + limit}]{
      _id,
      title,
      slug,
      "url":mainImage.asset->url,
      author->{
        name
      },
      publishedAt,
      categories[]->{
        title
      }
    }`
  );
  return postData;
}

export async function getPopupBanner() {
  return client.fetch(
    groq`*[_type == "popupBanner" && active == true][0]{
      active,
      switchText,
      buttonText,
      uri,
      "imageUrl": image.asset->url
    }`
  );
}
