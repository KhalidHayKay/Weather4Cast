const HourForecast = ({ item }) => {
    return ( 
        item ? 
        <div className="z-10 h-full w-[calc(100%/11)] flex flex-col gap-y-1.5 items-center justify-center bg-accent text-primary font-semibold rounded-3xl py-2 px-3">
            <p className="text-[0.8rem]">{item.hour}</p>
            <div className="flex-1">
                <img src={item.condition} alt="" className="size-[36px]" />
            </div>
            <p className="text-sm">{Math.round(item.temp)}&deg;</p>
        </div>
        : 
        <div className="z-10 h-full w-[calc(100%/11)] flex flex-col gap-y-1.5 items-center justify-center bg-accent text-primary font-semibold rounded-3xl py-2 px-3">
        </div>
    );
}
 
export default HourForecast;