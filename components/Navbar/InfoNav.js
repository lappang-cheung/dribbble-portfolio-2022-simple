import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const InfoNav = () => {
	
	const [current, setCurrent] = useState('')
	
	const data = ['projects', 'blogs', 'works']
	
	useEffect(() => {
		if (data && data.length > 0 && current === '') {
			setCurrent(data[0])
		}
	},[])
	
	const selectLink = (link) => {
		setCurrent(link)
	}
	
	const renderNavItems = (items) => {
		{
			return items.map((item, index) => {
				return (
					<li className={`transition hover:w-[10rem] hover:font-semibold cursor-pointer flex flex-row w-5 py-3 ` +
													`uppercase `+ `${current === item ? 'w-[10rem] font-semibold cursor-context-menu' : ''} ` +
													`hover:ease-in-out delay-700`}
					    key={index + uuidv4()}
							onClick={() => selectLink(item)}>
							<span className="text-xs tracking-wide">
								{(index + 1) <= 9 ? `0${(index + 1).toString()}` : (index+1).toString()}
							</span>
						<span className="inline-block w-full h-px bg-black m-2 px-3 dark:bg-blue-100 delay" />
						<span className="text-sm tracking-widest -mt-0.5">{item}</span>
					</li>
				)
			})
		}
	}
	
	return (
		<ul className="mt-12 hidden md:inline-block">
			{data && renderNavItems(data)}
		</ul>
	)
}

export default InfoNav
