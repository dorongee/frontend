import Head from 'next/head';
import Link from 'next/link';

const styles = {
  layout: {
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
  },
  header: {
      height: 60,
  },
  main: {
      flex: 1,
  },
  footer: {
      height: 60,
  },
  divider: {
      margin: '0 8px',
  },
}

export default function Nav() {
  return (
    <>
    <Head>
    <title>Static Website</title>
    </Head>
    <div style={styles.layout}>
        <header style={styles.header}>
            <Link href="/">Home</Link>
            <span style={styles.divider}>|</span>
            <Link href="/post">Post</Link>
            <span style={styles.divider}>|</span>
            <Link href="/about">About</Link>
        </header>
    </div>
    </>
    
  )
}
