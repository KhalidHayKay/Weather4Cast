import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import SideSection  from './components/SideSection';
import { LocationProvider } from './contexts/location/LocationContext';
import { ScreenProvider } from './contexts/Screen/ScreenContext';
import { SearchProvider } from './contexts/search/SearchContext';
import { WeatherProvider } from './contexts/weather/WeatherContext';
// import SearchBar from './tests/SearchBar';

function App() {
  return (
    <LocationProvider>
      <SearchProvider>
        <WeatherProvider>
          <ScreenProvider>
            <div className="max-w-[100vw] lg:h-screen min-h-[640px] flex flex-col sm:overflow-hidden px-2 sm:px-10 py-2 sm:py-4 bg-primary">
              <Header />
              <div className='w-full flex-1 flex flex-col lg:flex-row gap-5'>
                <Main />
                <SideSection />
              </div>
            </div>
            {/* <SearchBar /> */}
          </ScreenProvider>
        </WeatherProvider>
      </SearchProvider>
    </LocationProvider>
  );
}

export default App;
