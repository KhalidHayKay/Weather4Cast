const OtherCitiesWeatherCard = ({
    data: {
        location: {name, country}, 
        current: {condition: weather, temp_c: temp}
    }
}) => {
    return ( 
        <div className="w-full py-2.5 px-7 flex items-center justify-between bg-secondary rounded-3xl border border-accent border-opacity-10">
            <div className="flex flex-col justify-between gap-y-2.5">
                <div className="flex flex-col">
                    <p className="text-sm font-thin">{country}</p>
                    <p className="">{name}</p>
                </div>
                <p className={`${weather.text.split(' ').length > 4 ? 'text-[11px]' : 'text-sm'}`}>{weather.text}</p>
            </div>
            <div className="flex flex-col items-center gap-y-1">
                <div className="size-12">
                    <img src={weather.icon} alt="" />
                </div>
                <p className="font-semibold">{temp}&deg;</p>
            </div>
        </div>

        // <div className="relative">
        //     <div className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2 size-10 flex items-center justify-center bg-accent rounded-full">
        //         <img src="//cdn.weatherapi.com/weather/128x128/day/116.png" alt="" className="size-10" />
        //     </div>
        //     <div className="size-32 flex flex-col items-center justify-evenly bg-secondary rounded-3xl border border-accent border-opacity-30">
        //         <div className="flex flex-col items-center">
        //             <p className="text-base">Lisbon</p>
        //             <p className="text-[10px]">Portugal</p>
        //         </div>
        //         <p className="font-semibold">33&deg;</p>
        //     </div>
        // </div>
    );
}
 
export default OtherCitiesWeatherCard;