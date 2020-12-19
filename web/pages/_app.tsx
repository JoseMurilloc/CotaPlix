import GlobalStyles from '../styles/GlobalStyles';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from '../hooks/auth';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthProvider>
    </AnimatePresence>
  )
}

export default MyApp
