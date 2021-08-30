import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import type { AppProps } from 'next/app';
import type { DefaultTheme } from 'styled-components';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import PageContainer from 'components/PageContainer';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    body {
        font-family: 'Playfair Display', serif;
    }
`;

const theme: DefaultTheme = {
    colors: {
        lightGreen: '#EEF6EC',
        limeGreen: ' #85CD38',
        darkBlue: '#346CAD',
        darkGreen: '#3C7A5E'
    }
}

const App = (props: AppProps) => {
    const { Component, pageProps } = props;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            <PageContainer>
                <Component { ...pageProps } />
            </PageContainer>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
