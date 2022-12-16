import { Fragment } from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";

import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage({ allPosts }) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutoials and posts"
        />
      </Head>
      <AllPosts posts={allPosts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
}

export default AllPostsPage;
