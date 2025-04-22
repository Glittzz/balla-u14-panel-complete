import Head from 'next/head';
import TeamSelector from '../components/TeamSelector';

export default function Home() {
  return (
    <>
      <Head>
        <title>Balla U14 Team Selector</title>
      </Head>
      <main>
        <TeamSelector />
      </main>
    </>
  );
}
