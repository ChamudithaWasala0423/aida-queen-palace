"use client";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getPost } from "../../../sanity/sanity.query";

import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

export type PostType = {
  _id: string;
  slug: { current: string };
  url: string;
  title: string;
  categories: { title: string }[];
  author: { name: string };
  publishedAt: string;
};

export default function Blogs() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch posts
  const fetchPosts = async (
    currentPage: number,
    isLoadMore: boolean = false
  ) => {
    setIsLoading(true);
    const newPosts = await getPost((currentPage - 1) * 6, 6); // Fetch the posts

    if (isLoadMore) {
      // Append new posts only if they are not duplicates
      setPosts((prevPosts) => {
        const uniquePosts = newPosts.filter(
          (post: PostType) =>
            !prevPosts.find((existingPost) => existingPost._id === post._id)
        );
        return [...prevPosts, ...uniquePosts];
      });
    } else {
      // Set posts for the first load, replace old ones
      setPosts(newPosts);
    }

    setIsLoading(false);
  };

  // Fetch first 6 posts initially, only once
  useEffect(() => {
    fetchPosts(page, false); // Initial load
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + 1;
    fetchPosts(nextPage, true); // Load more, append posts
    setPage(nextPage);
  };
  return (
    <>
      <section>
        <MaxWidthWrapper className="flex flex-col items-left gap-16 sm:gap-32 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {posts.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <Card className="w-full h-full p-2">
                  <CardContent>
                    <div className="mt-2 h-72 bg-slate-100">
                      {post.url && (
                        <Image
                          src={post.url}
                          alt={post.title}
                          className="h-full w-full rounded-md object-cover "
                          width={700}
                          height={700}
                        />
                      )}
                    </div>
                    <div className="mt-4">
                      <p className="text-black text-xl md:text-xl text-left mt-2 font-bold ">
                        {post.title}
                      </p>
                      <p className="leading-5 mt-2 text-sm  text-left  bg-slate-100 rounded-md p-1 w-fit text-slate-900 flex items-center justify-center">
                        {post.categories
                          ?.map((category) => category.title)
                          .join(", ")}
                      </p>
                      <p className="leading-4 mt-1 text-[#2997FF] text-left ">
                        By {post.author?.name}
                      </p>
                      <p className="leading-4 mt-2 text-gray-400 text-left text-xs ">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-6">
            <Button
              onClick={loadMorePosts}
              disabled={isLoading}
              variant={"outline"}
            >
              {isLoading ? "Loading..." : "Load More"}
            </Button>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}