"use client";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import React from "react";
import sanityClient from "../../../../../sanity/sanity.client";
import Heading from "@/components/general/Heading";
import MaxWidthWrapper from "@/components/general/MaxWidthWrapper";
import { Loader } from "@/components/general/loader";

export type PostType = {
  _id: string;
  slug: { current: string };
  title: string;
  mainImage: { asset: { url: string } };
  author: { name: string; image?: { asset: { url: string } } };
  categories: { title: string }[];
  body: PortableTextBlock[];
  publishedAt: string;
};

async function getPost(slug: string): Promise<PostType | null> {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage { asset-> { _id, url } },
    author-> { name, image { asset-> { _id, url } } },
    categories[]-> { title },
    body[]{ ..., _type == "image" => { "imageUrl": asset->url } },
    publishedAt
  }`;
  return sanityClient.fetch(query, { slug });
}

const customComponents = {
  types: {
    image: ({ value }: { value: { imageUrl: string } }) => (
      <div className="my-6">
        <Image
          src={value.imageUrl}
          alt="Embedded Image"
          width={700}
          height={400}
          className="rounded-lg"
          unoptimized 
        />
      </div>
    ),
  },
};

export default function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = React.useState<PostType | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetchPost() {
      if (slug && typeof slug === "string") {
        setIsLoading(true);
        const fetchedPost = await getPost(slug);
        if (!fetchedPost) {
          notFound();
        } else {
          setPost(fetchedPost);
        }
        setIsLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader loading={isLoading}>Loading</Loader>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <>
      <Heading
        title={`${post.title} | AIDA Ayurveda Resort & Spa`}
        description="AIDA Ayurveda, your serene escape nestled along the tranquil Bentota River, Sri Lanka. Immerse yourself in the ancient healing traditions of Ayurveda while enjoying luxurious accommodations that blend wellness with comfort. At AIDA Ayurveda, we provide a holistic approach to rejuvenation through personalized treatments, organic nutrition, and spiritual balance, all set amidst the natural beauty of Bentota. Whether you seek relaxation or revitalization, our Ayurvedic retreat offers the perfect sanctuary to heal, refresh, and rediscover your inner peace."
        keywords="Ayurvedic Resort, Ayurvedic Spa, AIDA, AIDA Gems, Bentota, Sri Lanka"
      />
      <section>
        {post.mainImage?.asset?.url && (
          <div className="w-full h-72 md:h-[800px] relative">
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              width={1600}
              height={800}
              className="w-full h-full object-cover"
              unoptimized 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-16 text-white">
              <MaxWidthWrapper>
                <h3 className="text-2xl md:text-4xl font-semibold leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm md:text-lg">{post.author?.name}</p>
                <p className="text-sm md:text-lg">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </MaxWidthWrapper>
            </div>
          </div>
        )}
        <MaxWidthWrapper className="py-16">
          <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-6xl mx-auto">
            <div className="mb-6">
              {(post.categories ?? []).map((category) => (
                <span
                  key={category.title}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full mr-3 mb-3 inline-block"
                >
                  {category.title}
                </span>
              ))}
            </div>
            <div className="flex items-center mb-6">
              {post.author?.image?.asset?.url && (
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              )}
              <p className="ml-4 text-gray-600 text-lg">
                By {post.author?.name}
              </p>
            </div>
            <div className="prose max-w-full space-y-6">
              {post.body && (
                <PortableText value={post.body} components={customComponents} />
              )}
            </div>
            <p className="mt-12 text-gray-500 text-sm">
              Published on {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
