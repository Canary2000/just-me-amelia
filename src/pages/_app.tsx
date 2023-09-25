import '@/stylesheets/main.scss'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps, router }: AppProps) => {
    return (
        <Component {...pageProps} router={router} />
    )
}

export default App