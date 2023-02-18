
import './App.css';
import Card from './components/cards/Card'
import Navbar from './components/navbar/Navbar';
import { data } from './components/helper/data';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <div className='cardItem'>
      {data.map((item) =>{
      const {id,desc,image,title} =item
      return <Card key={id} desc={desc} img={image} title={title}/>
    })}
      </div>
      </div>
  );
  
}

export default App;
