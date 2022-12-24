import '../styles/globalTheme.ts'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../atoms/Fonts/Fonts';
import '../styles/fontsConfig.css';
import KeycloakProvider from '../components/KeycloakProvider';
import AuthProvider from '../components/AuthProvider';
import Script from 'next/script';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script src="/__ENV.js" strategy="beforeInteractive"></Script>
    <ChakraProvider>
      <KeycloakProvider>
        <AuthProvider>
      <Fonts/>
      <Component {...pageProps} />
        </AuthProvider>
      </KeycloakProvider>
    </ChakraProvider>
    </>
  );
}

export default MyApp
