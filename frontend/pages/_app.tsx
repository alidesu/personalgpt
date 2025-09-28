import '../styles/globals.css'; // Global styles

// @ts-ignore
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
