import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Classes from '../styles/Home.module.scss';
import Header from '../components/Header/Header';
import HeroBlog from '../components/HeroBlog/HeroBlog';
import PopularTags from '../components/PopularTags/PopularTags';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={Classes.homeContainer}>
        {/****************** * 1 Header ****************** */}
        <header className={Classes.homeContainer__header}>
          <Header />
        </header>
        {/*******************  2 Hero Section (Blog of the day) ****************** */}
        <section className={Classes.homeContainer__heroBlog}>
          <HeroBlog />
        </section>
        <section className={Classes.homeContainer__popularTags}>
          <PopularTags />
        </section>
      </div>
    </>
  );
};

export default Home;
