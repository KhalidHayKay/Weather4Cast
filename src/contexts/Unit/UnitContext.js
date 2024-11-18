import { createContext, useState } from 'react';

const UnitContext = createContext();

export const UnitProvider = ({ children }) => {
	const [isCelsius, setIsCelsius] = useState(true);

	return (
		<UnitContext.Provider
			value={{
				isCelsius,
				setIsCelsius,
			}}
		>
			{children}
		</UnitContext.Provider>
	);
};

export default UnitContext;
