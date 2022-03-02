import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MermaidEditor({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MermaidEditor;
