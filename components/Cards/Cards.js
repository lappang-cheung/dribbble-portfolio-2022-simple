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
						<h3 className="font-semibold text-2xl py-1">{item.title}</h3>
						<p className="py-1 text-sm">{item.description}</p>
						<div className="flex flex-row align-middle text-xs mt-2 tracking-widest">
							<AiFillStar className="mt-0.5 mr-1 text-yellow-400"/>{item.star}
						</div>
					</article>
				</a>
			)
		})
	}
	
	const renderBlogItems = (item, limit = 0) => {
		return null
	}
	
	const renderViewMoreBtn = (items, renderList, display = true) => {
		return renderList.length < items.length && display &&
				<span className="w-full flex justify-center py-5">
						<button className="text-md font-semibold uppercase">View More</button>
				</span>
	}
	
	return (
		<section className="w-full md:ml-10 mb-16">
			<div className="w-full pb-10">
				{data && renderGithubItems(data, 3)}
				{renderViewMoreBtn(data, renderGithubItems(data, 3))}
			</div>
			<div className="w-full pb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
				<article className="md:max-w-[22rem] md:max-h-[13rem] bg-gray-100 p-8 rounded-md dark:bg-slate-800 hover:z-10 hover:scale-90 hover:dark:bg-slate-900 transition hover:ease-in delay-200">
					<h3 className="uppercase text-sm font-bold">Medium</h3>
					<h6>October 17,2022</h6>
					<h1 className="font-semibold text-2xl py-1">How To Integrate Calendly (ReactJs - Frontend Edition)</h1>
				</article>
				<article className="md:max-w-[22rem] md:max-h-[13rem] md:mt-10 bg-gray-100 p-8 rounded-md dark:bg-slate-800 hover:z-10 hover:scale-90 hover:dark:bg-slate-900 transition hover:ease-in delay-200">
					<h3 className="uppercase text-sm font-bold">Medium</h3>
					<h6>October 17,2022</h6>
					<h1 className="font-semibold text-2xl py-1">How To Integrate Calendly (ReactJs - Frontend Edition)</h1>
				</article>
				<article className="md:max-w-[22rem] md:max-h-[13rem] md:-mt-10 bg-gray-100 p-8 rounded-md dark:bg-slate-800 hover:z-10 hover:scale-90 hover:dark:bg-slate-900 transition hover:ease-in delay-200">
					<h3 className="uppercase text-sm font-bold">Medium</h3>
					<h6>October 17,2022</h6>
					<h1 className="font-semibold text-2xl py-1">How To Integrate Calendly (ReactJs - Frontend Edition)</h1>
				</article>
				<article className="max-w-[22rem] max-h-[13rem] bg-gray-100 p-8 rounded-md dark:bg-slate-800 hover:z-10 hover:scale-90 hover:dark:bg-slate-900 transition hover:ease-in delay-200">
					<h3 className="uppercase text-sm font-bold">Medium</h3>
					<h6>October 17,2022</h6>
					<h1 className="font-semibold text-2xl py-1">How To Integrate Calendly (ReactJs - Frontend Edition)</h1>
				</article>
				<article className="max-w-[22rem] max-h-[13rem] -mt-10 bg-gray-100 p-8 rounded-md dark:bg-slate-800 hover:z-10 hover:scale-90 hover:dark:bg-slate-900 transition hover:ease-in delay-200">
					<h3 className="uppercase text-sm font-bold">Medium</h3>
					<h6>October 17,2022</h6>
					<h1 className="font-semibold text-2xl py-1">How To Integrate Calendly (ReactJs - Frontend Edition)</h1>
				</article>
				<article className="max-w-[22rem] max-h-[13rem] bg-gray-100 p-8 rounded-md dark:bg-slate-800 hover:z-10 hover:scale-90 hover:dark:bg-slate-900 transition hover:ease-in delay-200">
					<h3 className="uppercase text-sm font-bold">Medium</h3>
					<h6>October 17,2022</h6>
					<h1 className="font-semibold text-2xl py-1">How To Integrate Calendly (ReactJs - Frontend Edition)</h1>
				</article>
			</div>
		</section>
	)
}

export default Cards
