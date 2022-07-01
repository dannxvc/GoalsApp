import Header from './Header';
import Main from'./Main';
import Footer from './Footer';
import {Outlet} from 'react-router';

//will use this componentes later on
// import List from './components/list/List';
// import Details from './components/create/Details';
function Layout() {
    return (
        <div className="App">
            <Header></Header>
            <Main>
               <Outlet></Outlet>
            </Main>
            <Footer></Footer>
        </div> 
     );
}

export default Layout;