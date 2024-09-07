const CurrentWeather = ({ weather: {condition, humidity, temp_c: temperature, wind_kph: wind} }) => {
    const breakWeatherText = (text) => {
        const firstSpaceIndex = text.indexOf(' ');
    
        if (firstSpaceIndex !== -1) {
            const firstWord = text.substring(0, firstSpaceIndex);
            const restOfSentence = text.substring(firstSpaceIndex + 1);
    
            return [firstWord, restOfSentence];
        } else {
            return text;
        }
    };

    return ( 
        <div className="w-full flex gap-x-4 justify-between absolute top-[-30px] right-1">
            <div className="flex flex-col">
                <div>
                    <img src={condition.icon.replace(/64/g, '128')} alt="" className="p-0 m-0" />
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl">{Array.isArray(breakWeatherText(condition.text)) ? breakWeatherText(condition.text)[0] : condition.text}</h2>
                <h2 className="text-2xl">{Array.isArray(breakWeatherText(condition.text)) ? breakWeatherText(condition.text)[1] : ''}</h2>
            </div>
            <div className="flex flex-col justify-center gap-y-1.5">
                <div className="flex">
                    <h2 className="text-4xl">{temperature > 0 ? `+${Math.round(temperature)}` : Math.round(temperature)}</h2>
                    <span>&deg;</span>
                </div>
                <p className="text-sm">Temperature</p>
            </div>
            <div className="flex flex-col justify-center gap-y-1.5">
                <div className="flex items-end">
                    <h2 className="text-4xl">{Math.round(humidity)}</h2>
                    <span>%</span>
                </div>
                <p className="text-sm">Humidity</p>
            </div>
            <div className="flex flex-col justify-center gap-y-1.5">
                <div className="flex items-end">
                    <h2 className="text-4xl">{Math.round(wind)}</h2>
                    <span>km/h</span>
                </div>
                <p className="text-sm">Wind speed</p>
            </div>
        </div>
    );
}
 
export default CurrentWeather;