import './App.css';
import { AllRoutes } from './components/AllRoutes/AllRoutes';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      <div className='mainDiv'>
        <Sidebar />
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;