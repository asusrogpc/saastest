import React from "react";
import BlogItem from "@/components/Blog/BlogItem";
import SectionHeader from "@/components/Common/SectionHeader";
import { getPosts } from "@/sanity/sanity-utils";

const Blog = async () => {
  const posts = await getPosts();

  return (
    <section
      className='overflow-hidden py-17.5 lg:py-22.5 xl:py-27.5'
      id='blog'
    >
      {/* <!-- section title --> */}
      <SectionHeader
        title={"Latest Blogs & News"}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum dictum euismod malesuada lacus, non consequat quam.'
      />

      <div className='mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
          {/* <!-- blog item --> */}
          {posts?.length > 0 ? (
            posts
              ?.slice(0, 3)
              .map((item, key: number) => <BlogItem blog={item} key={key} />)
          ) : (
            <p>No posts found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
