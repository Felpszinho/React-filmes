
import Rotas from './rotas';
import './style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App(){
  return(
    <div className="app">
      <Rotas/> 
      <ToastContainer autoClose={3000}/>
    </div>
    
 
  );
}
