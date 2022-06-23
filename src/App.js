import './App.css';
import Header from './components/shared/Header';
import Main from'./components/shared/Main';
import Footer from './components/shared/Footer';
import Goal from './components/list/Goal';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Goal/>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
