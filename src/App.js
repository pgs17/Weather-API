import './App.css';
import CurrentWeather from './components/currentweather/CurrentWeather';
import Search from './components/search/Search';

function App() {

  const handleonSearchChange =({searchData})=>{
    console.log(searchData);
  }
  return (
    <div className="Container">
   <Search onSearchChange={handleonSearchChange} />   
   <CurrentWeather /> 
    </div>
  );
}

export default App;
