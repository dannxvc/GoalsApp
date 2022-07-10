import {Routes, Route} from 'react-router';
import './App.css';
import Layout from './components/shared/Layout';
import List from './components/list/List';
import Details from './components/create/Details';
import NotFound from './components/shared/NotFound';
import Modal from './components/shared/Modal';
import { useContext, useEffect } from 'react';
import { requestGoals } from './services/Request';
import { Context } from './services/Storage';
function App() {

  const [,dispach] = useContext(Context);

  useEffect(() => {
    (async()=>{
        const goals = await requestGoals();
        dispach({type: 'add', goals});
    })();
  },[]);

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<List/>}/>
        <Route path="/list" element={<List/>}>
          <Route path="/list/:id" element={
          <Modal>
              <Details/>
          </Modal>
          }/>
        </Route>
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
