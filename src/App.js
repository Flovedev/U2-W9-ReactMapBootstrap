import 'bootstrap/dist/css/bootstrap.min.css'
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';

function App() {
  return (
    <div className="App">
      <MyNav 
      title = "EpiBooks!"
      first = "Home"
      second = "Browse"
      />

      <MyFooter 
      name = "Flo was here"
      />
    </div>
  );
}

export default App;
