import type { AppProps } from 'next/app'
import '../public/app-style.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
