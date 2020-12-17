import GlobalStyles from '../styles/GlobalStyles';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <GlobalStyles />
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
