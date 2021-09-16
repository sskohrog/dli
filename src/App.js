import { GlobalContext, GlobalProvider } from './services/GlobalContext';
import Routes from './global/Routes';
import { Link } from '@reach/router';
import './App.scss';

function App() {
  return (
    <GlobalProvider>
      <GlobalContext.Consumer>
        {() => (
          <div className='danyali-container container-fluid'>
            <div className='main-container'>
              <div className='main-title-container'>
                <h1 className='h1-title'>DANYA LI</h1>
              </div>
              <div className='main-router-container'>
                <Routes />
              </div>
            </div>
            <div className='main-side-container'>
              <Link className='h1-title btn btn-link' to='/info'>
                INFO
              </Link>
              <Link className='h1-title btn btn-link' to='/index'>
                INDEX
              </Link>
            </div>
          </div>
        )}
      </GlobalContext.Consumer>
    </GlobalProvider>
  );
}

export default App;
