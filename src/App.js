import './App.css'
import Preloader from './components/Preloader'
import HeaderComponent from './components/HeaderComponent'
import WhyBinance from './components/WhyBinance'
import Token from './components/Token'
import TokenMetrics from './components/TokenMetrics'
import Utilities from './components/Utilities'
import FooterComponent from './components/FooterComponent'
import Roadmap from './components/Roadmap'

function App() {
  return (
    <>
      <div className="nk-wrap">
        <HeaderComponent />
        <main className='nk-pages'>
          <WhyBinance />
          <Token />
          <TokenMetrics />
          <Utilities />
          <Roadmap />
        </main>
        <FooterComponent />
      </div>
      <Preloader />
    </>
  );
}

export default App;
