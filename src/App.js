import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { LocationProvider } from './contexts/location/LocationContext';
import { WeatherProvider } from './contexts/weather/WeatherContext';
import { UnitProvider } from './contexts/Unit/UnitContext';

function App() {
	return (
		<LocationProvider>
			<WeatherProvider>
				<UnitProvider>
					<Header />
					<Content />
				</UnitProvider>
			</WeatherProvider>
		</LocationProvider>
	);
}

export default App;
