import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/header'
import Modal from 'react-modal'
import { ProductsProvider } from '../hooks/useProducts'
import { HeaderMobile } from '../components/responsive-header'

  Modal.setAppElement('#__next')

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ProductsProvider>
      <HeaderMobile />
  
     <Component {...pageProps} />
    </ProductsProvider>
  </>
}

export default MyApp
