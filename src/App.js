import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <MyNav 
      title = "EpiBooks!"
      first = "Home"
      second = "Browse"
      />

      <Welcome 
      title ="EpiBOOKS"
      />

      <BookList />

      <MyFooter 
      name = "Flo was here"
      />
    </div>
  );
}

export default App;
