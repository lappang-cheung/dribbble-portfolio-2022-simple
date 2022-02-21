import {AiFillStar} from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid'

const Cards = () => {
	
	const data = [
		{
			type: 'typescript',
			title: 'Dinero.js',
			description: 'Create, calculate and format moeny in JavaScript and TypeScript.',
			star: '5,372',
			link: '#'
		},
		{
			type: 'typescript',
			title: 'Dinero.js',
			description: 'Create, calculate and format moeny in JavaScript and TypeScript.',
			star: '5,372',
			link: '#'
		},
		{
			type: 'typescript',
			title: 'Dinero.js',
			description: 'Create, calculate and format moeny in JavaScript and TypeScript.',
			star: '5,372',
			link: '#'
		},
		{
			type: 'typescript',
			title: 'Dinero.js',
			description: 'Create, calculate and format moeny in JavaScript and TypeScript.',
			star: '5,372',
			link: '#'
		},
		{
			type: 'typescript',
			title: 'Dinero.js',
			description: 'Create, calculate and format moeny in JavaScript and TypeScript.',
			star: '5,372',
			link: '#'
		},
		{
			type: 'typescript',
			title: 'Dinero.js',
			description: 'Create, calculate and format moeny in JavaScript and TypeScript.',
			star: '5,372',
			link: '#'
		},
		{
			type: 'typescript',
			title: 'Dinero.js',
			description: 'Create, calculate and format moeny in JavaScript and TypeScript.',
			star: '5,372',
			link: '#'
		},
	]
	
	const renderGithubItems = (items, limit = 0) => {
		const index = limit === 0 || limit >= items.length ? items.length - 1 : limit
		return items.slice(0, index).map(item => {
			return (
				<a href={item.link} key={item.title + uuidv4()}>
					<article className="bg-gray-100 p-8 mb-2 rounded-md dark:bg-slate-800 hover:z-10 hover:scale-90 hover:dark:bg-slate-900 transition hover:ease-in delay-200">
						<p className="uppercase text-sm font-bold">{item.type}</p>
						<h3 className="font-semibold text-2xl py-1">{item.title}s</h3>
						<p className="py-1 text-sm">{item.description}</p>
						<div className="flex flex-row align-middle text-xs mt-2 tracking-widest">
							<AiFillStar className="mt-0.5 mr-1 text-yellow-400"/>{item.star}
						</div>
					</article>
				</a>
			)
		})
	}
	
	
	return (
		<section className="w-full md:ml-10 mb-16">
			<div className="w-full">
				{data && renderGithubItems(data, 3)}
			</div>
		</section>
	)
}

export default Cards
