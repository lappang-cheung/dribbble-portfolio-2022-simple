import {v4 as uuidv4} from "uuid";

import { FiPlay, FiFeather } from 'react-icons/fi'
import { AiOutlineSound, AiOutlineFile } from 'react-icons/ai'
import { RiPagesLine } from 'react-icons/ri'
import { BsQuestion } from 'react-icons/bs'


const noBgCard = ({ item }) => {
	
	const renderIcon = (iconType) => {
		switch (iconType) {
			case 'blog':
				return <FiFeather className="text-2xl mt-5 ml-0.5 md:mt-6 md:text-3xl"/>
			case 'web':
				return <RiPagesLine className="text-2xl mt-5 ml-0.5 md:mt-6 md:text-3xl"/>
			case 'video':
				return <FiPlay className="text-2xl mt-5 ml-0.5 md:mt-6 md:text-3xl"/>
			case 'audio':
				return <AiOutlineSound className="text-2xl mt-5 ml-0.5 md:mt-6 md:text-3xl"/>
			case 'file':
				return <AiOutlineFile className="text-2xl mt-5 ml-0.5 md:mt-6 md:text-3xl"/>
			default:
				return <BsQuestion className="text-2xl mt-5 ml-0.5 md:mt-6 md:text-3xl"/>
		}
	}
	
	return (
		<a href={item.link} key={item.title + uuidv4()}>
			<article className="py-8 mb-2 hover:z-10 transition hover:ease-in delay-200 hover:scale-90">
				<span className=" flex flex-row">
					<span className="bg-slate-800 rounded-full h-20 w-20 mr-4 md:h-24 md:w-24 p-2 flex flex-row justify-center md:mr-10">
						{ renderIcon(item.type) }
						{console.log(item.type)}
					</span>
					<span>
						<h1 className="font-semibold uppercase text-md md:text-xl lg:text-xl xl:text-4xl">
							{ item.title }
						</h1>
						<p className="text-blue-200 text-sm mt-0.5 mb-1.5 md:mt-1.5 md:mb-2">
							{ item.description }
						</p>
						<h6 className="uppercase text-sm tracking-wide font-semibold">
							{ item.date }
						</h6>
					</span>
				</span>
			</article>
		</a>
	)
}

export default noBgCard
