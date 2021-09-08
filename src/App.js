import { GlobalContext, GlobalProvider } from './services/GlobalContext';
import Routes from './global/Routes';
import './App.scss';

function App() {
  return (
    <GlobalProvider>
      <GlobalContext.Consumer>
        {() => (
          <div className='danyali-container container-fluid'>
            <div className='main-title-container'>
              <h1 className='h1-title'>DANYA LI</h1>
            </div>
            <div className='main-container'>
              <Routes />
            </div>
            <div className='main-side-container'>
              <h1 className='h1-title'>INFO</h1>
              <h1 className='h1-title'>INDEX</h1>
            </div>
          </div>
        )}
      </GlobalContext.Consumer>
    </GlobalProvider>
  );
}

export default App;
