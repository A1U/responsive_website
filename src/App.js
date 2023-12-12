import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import Herosection from './pages/Herosection';
import Counter from './pages/Counter';
import Sectionpage from './pages/Sectionpage';
import Support from './pages/Support';
import Cardsec from './pages/Cardsec';
import FeedbackSlider from './pages/Feedback';
import Contact from './pages/Contact';
import Footer from './components/Footer';



function App() {

 
    const b_manage={
      fontWeight: 'bold',
      fontSize:  '60px',
     
     

  };


  return (
       <>
       <CustomNavbar/>
       <Herosection  b_manage={b_manage}/>
       <Counter/>
       <Sectionpage/>
       <Support/>
       <Cardsec/>
       <FeedbackSlider/>
       <Contact/>
       <Footer/>
       </>
  );
}

export default App;
