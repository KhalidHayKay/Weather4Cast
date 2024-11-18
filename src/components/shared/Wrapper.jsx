const Wrapper = ({ children, className }) => {
	return (
		<div
			className={`${className} h-[250px] bg-secondary shadow-custom shadow-black rounded-2xl mobile:rounded-3xl`}
		>
			{children}
		</div>
	);
};

export default Wrapper;
