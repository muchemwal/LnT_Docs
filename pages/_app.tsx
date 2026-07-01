import type { AppProps } from 'next/app';
import '../styles/swagger-overrides.css';
import '../styles/docs.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
