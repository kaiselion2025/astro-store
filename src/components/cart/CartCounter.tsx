export const CartCounter = () => {
	return (
		<a href='/cart' className='relative inline-block'>
			<span className='absolute -top-2 -right-2 flex justify-center bg-blue-600 text-white text-xs rounded-full w-5 h-5 '>
				3
			</span>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='1.5em'
				height='1.5em'
				viewBox='0 0 24 24'
			>
				<path
					fill='none'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M16.5 21a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3'
				></path>
			</svg>
		</a>
	)
}
