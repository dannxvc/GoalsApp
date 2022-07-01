import {Routes, Route} from 'react-router';
import './App.css';
import Layout from './components/shared/Layout';
import List from './components/list/List';
import Details from './components/create/Details';
import NotFound from './components/shared/NotFound';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<List/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/create" element={<Details/>}/>
      </Route>   
      <Route path="*" element={<NotFound/>}/>
    </Routes>
//    <div className="App">
//    <Header></Header>
//    <Main>
//      <List></List>
//      <Details></Details>
//    </Main>
//    <Footer></Footer>
//  </div>
  );
}

export default App;
