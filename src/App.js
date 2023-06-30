import NagivationBar from './NagivationBar';
import ContentBar from './ContentBar';
import { useEffect } from 'react';

function App() {

useEffect(() => {
  const script = document.createElement('script');

  script.src = "https://www.googletagmanager.com/gtag/js?id=G-ZRBJYF2E31";
  script.async = true;
  script.onload = () => {
    const dataLayer = window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-ZRBJYF2E31');
  }
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  }
}, []);
  
  return (
    <>
    <NagivationBar />
    <ContentBar />
    </>

  );
}

export default App;
