import NagivationBar from './NagivationBar';
import ContentBar from './ContentBar';

function App() {
  return (
    <>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZRBJYF2E31"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-ZRBJYF2E31');
      </script>

    <NagivationBar />
    <ContentBar />
    </>

  );
}

export default App;
