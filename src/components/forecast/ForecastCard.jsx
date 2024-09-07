const ForecastCard = ({ item }) => {
    return ( 
        <div className="flex flex-col items-center justify-evenly bg-primary rounded-3xl">   
            <p className="font-semibold">{item.day}</p>
            
            <div className="w-3/5 h-[1px] bg-secondary"></div>

            <div className="size-12">
                <img src={`//weatherbit.io/static/img/icons/${item.icon}.png`} alt="" />    
            </div>
            <p className="text-xl font-bold">{Math.round(item.temp)} <span className="ml-[-3px]">&deg;</span></p>
        </div>
    );
}
 
export default ForecastCard;