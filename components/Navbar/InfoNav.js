import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const InfoNav = () => {
	
	const [current, setCurrent] = useState('')
	
	const data = ['projects', 'talks', 'interviews']
	
	useEffect(() => {
		if (data && data.length > 0) {
			setCurrent(data[0])
		}
	},[])
	
	console.log(current)
	
	const renderNavItems = (items) => {
		{
			return items.map((item, index) => {
				return (
					<li className={`hover:w-[10rem] hover:font-semibold cursor-pointer flex flex-row w-5 py-3 uppercase `+
												 `${current === item ? 'w-[10rem] font-semibold cursor-context-menu' : ''}`}
					    key={index + uuidv4()}>
							<span className="text-xs tracking-wide">
								{(index + 1) <= 9 ? `0${(index + 1).toString()}` : (index+1).toString()}
							</span>
						<span className="inline-block w-full h-px bg-black m-2 px-3" />
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
