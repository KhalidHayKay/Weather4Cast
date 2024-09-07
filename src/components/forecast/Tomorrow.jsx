const Tomorrow = ({ item }) => {
    return ( 
        <div className="col-span-2 flex flex-col items-center justify-between bg-accent text-primary font-semibold rounded-3xl overflow-hidden">
            <div className="w-full pl-3 pr-5 py-3.5 flex justify-between bg-accent-content text-[1.1rem] font-bold">
                <p>Tomorrow</p>
                <p>{item.day}</p>
            </div>
            <div className="w-full pl-3 flex items-center justify-between">
                <p className="text-4xl flex align-top">{item.temp} <span className="text-2xl">&deg;</span></p>
                <div className="size-[64px]">
                    <img src={`//weatherbit.io/static/img/icons/${item.icon}.png`} alt="" />
                </div>
            </div>
            <div className="w-full px-3 pb-3 grid grid-cols-2 text-[9px] font-bold">
                <div className="flex gap-x-1">
                    <p className="text-gray-500">Feel:</p><p className={item.feel.split(' ').length > 2 ? 'text-[7px]' : ''}>{item.feel}</p>
                </div>
                <div className="flex gap-x-1">
                    <p className="text-gray-500">Pressure:</p><p>{Math.round(item.pressure)} atm</p>
                </div>
                <div className="flex gap-x-1">
                    <p className="text-gray-500">Hunidity:</p><p>{item.humidity}%</p>
                </div>
                <div className="flex gap-x-1">
                    <p className="text-gray-500">Sunrise:</p><p>{item.sunrise}</p>
                </div>
                <div className="flex gap-x-1">
                    <p className="text-gray-500">Wind:</p><p>{Math.round(item.wind)}km/h</p>
                </div>
                <div className="flex gap-x-1">
                    <p className="text-gray-500">Sunset:</p><p>{item.sunset}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Tomorrow;