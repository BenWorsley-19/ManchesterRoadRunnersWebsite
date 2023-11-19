import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, ImageSlider, ImageSlider2 } from "./components";


const App = () => (
  <BrowserRouter>
    <div className="relative z-0 bg-primary">
      {/* TODO is thi div needed or these classes? */}
      <div className='bg-cover bg-center'>
        <Navbar />
      </div>
      <Hero />
      <ImageSlider2 />
      {/* <ImageSlider /> */}
      
      {/* <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Hero />
        </div>
      </div> */}
      {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Billing />
        </div>
      </div> */}
    </div>
  </BrowserRouter>
);

export default App