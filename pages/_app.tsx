import '../globals.css';
export const dynamic = 'force-dynamic';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}