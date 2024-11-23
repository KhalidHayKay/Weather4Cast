import { useEffect, useState } from 'react';

const ThemeController = () => {
	const [theme, setTheme] = useState('');

	const storeThemeValue = (themeValue) => {
		setTheme(themeValue);
		sessionStorage.setItem('theme', JSON.stringify(themeValue));
	};

	useEffect(() => {
		const page = document.querySelector('html[data-theme]');
		const storedThemeValue = sessionStorage.getItem('theme');

		if (storedThemeValue) {
			setTheme(JSON.parse(storedThemeValue));
		}

		page.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<div className='dropdown'>
			<div
				tabIndex={0}
				role='button'
				className='btn h-9 min-h-9 sm:h-10 sm:min-h-10 text-primary-content/60 border-none shadow shadow-primary rounded-3xl'
			>
				Theme
				<svg
					width='12px'
					height='12px'
					className='inline-block h-2 w-2 fill-primary-content opacity-60'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 2048 2048'
				>
					<path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z'></path>
				</svg>
			</div>
			<ul
				tabIndex={0}
				className='dropdown-content top-14 bg-secondary rounded-box z-[1] w-30 p-2 shadow-xl shadow-primary'
			>
				<li>
					<input
						type='radio'
						name='theme-dropdown'
						className={`${
							theme === '' && 'bg-primary text-primary-content'
						} theme-controller btn btn-sm btn-block btn-ghost justify-start`}
						aria-label='System'
						value='default'
						onClick={() => storeThemeValue('')}
					/>
				</li>
				<li>
					<input
						type='radio'
						name='theme-dropdown'
						className={`${
							theme === 'light' && 'bg-primary text-primary-content'
						} theme-controller btn btn-sm btn-block btn-ghost justify-start`}
						aria-label='Light'
						value='light'
						onClick={() => storeThemeValue('light')}
					/>
				</li>
				<li>
					<input
						type='radio'
						name='theme-dropdown'
						className={`${
							theme === 'dark' && 'bg-primary text-primary-content'
						} theme-controller btn btn-sm btn-block btn-ghost justify-start`}
						aria-label='Dark'
						value='dark'
						onClick={() => storeThemeValue('dark')}
					/>
				</li>
			</ul>
		</div>
	);
};

export default ThemeController;
