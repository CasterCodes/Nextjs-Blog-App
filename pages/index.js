import Head from 'next/head'

import ArticleList from '../components/ArticleList';


export default function Home({articles}) {
 
  return (
    <div >
      <Head>
        <title>News App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
          <ArticleList   articles={articles}/>
      </div>

    </div>
  )
}


export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);

    const articles = await res.json();


    return {
      props: {articles}
    }
}