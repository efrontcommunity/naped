import React, { useState, useEffect } from 'react';

// Interfaces TypeScript
import { IContent } from '../../types/interfaces.types';

// Next.js
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import Recents from '../../components/posts/recents';
import Head from '../../infra/components/Head';

// Styled Componentes
import { ContainerMaxWidth } from '../../components/container/styles';
import { ContainerPosts } from '../../styles/posts';

// API
import api from '../../services/api';

const Post = ({ posts }: IContent) => {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    api.get('/posts?_sort=date&_order=desc&_limit=3').then(response => {
      setRecent(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Head title={posts.title} />
      <Menu />
      <ContainerPosts>
        <ContainerMaxWidth>
          <div className="presentation-post">
            <span>{posts.category}</span>
            <h2>{posts.title}</h2>
            <p>{posts.resume}</p>
            <p className="date-post">{posts.date}</p>
          </div>

          <img src={posts.imageUrl} alt={posts.title} className="banner-post" />

          <div className="content-post">
            <p>{posts.content}</p>
          </div>

          <section className="recent">
            <h2>Notícias mais recentes</h2>
            <div className="recent-container">
              {recent.map(item => {
                return <Recents key={item.id} content={item} />;
              })}
            </div>
          </section>
        </ContainerMaxWidth>
      </ContainerPosts>
      <Footer />
    </React.Fragment>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const posts = await fetch(
    `https://my-json-server.typicode.com/napedcode/data-naped/posts/${params.id}`
  )
    .then(respostaDoServer => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Ops, não entramos os dados');
    })
    .then(respostaEmObjeto => respostaEmObjeto);

  return {
    props: {
      posts
    }
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    'https://my-json-server.typicode.com/napedcode/data-naped/posts'
  );
  const posts = await res.json();

  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }));

  return { paths, fallback: false };
}
