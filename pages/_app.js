import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';

const MyApp = () => {

  const { Component, pageProps } = props;
  
  return(
    <FirebaseContext.Provider
      value={{
        firebase
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
};

export default MyApp;

// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
