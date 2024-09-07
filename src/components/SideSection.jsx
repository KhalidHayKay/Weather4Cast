import { useState } from "react";
import OtherCities from "./OtherCities";

const SideBar = () => {
    const [offset, setOffset] = useState(0);

    return (
        <section className="lg:w-[25%] lg:max-w-[400px] h-full flex flex-col text-primary-content">
            <div className="flex items-center justify-between ml-1 mr-2">
                <p className="text-sm font-bold">Other big cities</p>
                <div className="flex gap-x-2">
                    <button 
                    onClick={() => setOffset(offset - 5)} 
                    disabled={offset <= 0}
                    className="size-5 flex items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-secondary active:bg-opacity-50 disabled:hover:bg-secondary disabled:hover:text-accent disabled:opacity-50 disabled:hover:opacity-50 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                    onClick={() => setOffset(offset + 5)}
                    disabled={offset >= 45}
                    className="size-5 flex items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-secondary active:bg-opacity-50 disabled:hover:bg-secondary disabled:hover:text-accent disabled:opacity-50 disabled:hover:opacity-50 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="mt-4 flex-1 w-full rounded-3xl">
                <OtherCities offset={offset} />
            </div>
        </section>
    );
}
 
export default SideBar;