import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { LocationProvider } from './contexts/location/LocationContext';
import { WeatherProvider } from './contexts/weather/WeatherContext';
import { UnitProvider } from './contexts/unit/UnitContext';
import { SearchProvider } from './contexts/search/SearchContext';

function App() {
	return (
		<LocationProvider>
			<WeatherProvider>
				<SearchProvider>
					<UnitProvider>
						<Header />
						<Content />
					</UnitProvider>
				</SearchProvider>
			</WeatherProvider>
		</LocationProvider>
	);
}

export default App;
