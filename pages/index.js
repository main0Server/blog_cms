// import type { NextPage } from 'next'
import Head from 'next/head'
import { Key } from 'react'
import { Categories, PostCard, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'

export const Home = ({ posts }) => (
  <div className="container mx-auto mb-8 px-10">
    <Head>
      <title>CMS BLOG</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <FeaturedPosts />

    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <div className="col-span-1 lg:col-span-8">
        {posts?.map((post) => (
          <PostCard post={post.node} key={post.node?.author?.id} />
        ))}
      </div>
      <div className="col-span-1 lg:col-span-4">
        <div className="relative top-8 lg:sticky">
          <PostWidget categories={undefined} slug={undefined} />
          <Categories />
        </div>
      </div>
    </div>

    {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"></main> */}
    {/* <footer className="flex h-24 w-full items-center justify-center border-t"></footer> */}
  </div>
)

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}

export default Home
