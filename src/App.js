import logo from './logo.svg';
import './App.css';
import './header'
import Header from './header';
import TopBanner from './topbanner';
import Card from './cards';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';


function App(props) {
  return (
    <div>
      <Header />
    <TopBanner />
    <div className="row">
     <Card name ="BootStrap" imgUrl={pic1} button ='See Details' btnId="green-btn"/>
     <Card name ="Life Coach" imgUrl={pic2} button ='See Details' btnId="blue-btn"/>
     <Card name ="Responsive Design" imgUrl={pic3} button ='See Details' btnId="red-btn"  />
     <Card name ="Vacation" imgUrl={pic1} button ='See Details' btnId="yellow-btn" />
     <Card name =" Luxury" imgUrl={pic2} button ='See Details' btnId="brown-btn" />
     
    </div>
    
    </div>
   
  

  );
}

export default App;
