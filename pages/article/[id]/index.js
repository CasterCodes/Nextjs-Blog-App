import React from 'react';
import Link from 'next/link';

const Article = ({article}) => {

    console.log(article)
    return (
        <div className="main">
           <h2 className="title">{article.title}</h2>
           <p>{article.body}</p>

           <Link href='/'>Go Back</Link>
           <style jsx>
               {
                   `
                       .main {
                           width:70%;
                           margin:0px auto
                       }
                       .title {
                           font-size:1.5rem;
                       }
                   `
               }
           </style>
        </div>
    )

    
}
// export const  getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//     const article = await res.json();

//     if(!article){
//         return {
//             redirect:{
//                 destination:'/',
//                 permanent:false
//             }
//         }
//     }

//     return {
//         props:{article}
//     }
// }

export const  getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

    const article = await res.json();

    if(!article){
        return {
            redirect:{
                destination:'/',
                permanent:false
            }
        }
    }

    return {
        props:{article}
    }
}

export const getStaticPaths = async ()  => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const articles = await res.json(); 

    const ids = articles.map(article => article.id);

    const paths = ids.map(id => ({params: {id:id.toString()}}))
    
    return {
        paths: paths,
        fallback:false
    }
}
export default  Article
