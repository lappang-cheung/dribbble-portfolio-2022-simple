import { v4 as uuidv4 } from 'uuid'
import { FiPlay, FiFeather } from 'react-icons/fi'
import { AiOutlineSound, AiOutlineFile } from 'react-icons/ai'
import { RiPagesLine } from 'react-icons/ri'

import GithubCard from "./Card/GithubCard";
import BlogCard from "./Card/BlogCard";

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
	
	const blogData = [
		{
			type: 'medium',
			date: 'October 17, 2022',
			title: 'How To Integrate Calendly (ReactJs - Frontend Edition)',
			categories: ["learning", "interview", "reactjs", "ecommerce", "startup"],
			link: '#'
		},
		{
			type: 'medium',
			date: 'October 17, 2022',
			title: 'How To Integrate Calendly (ReactJs - Frontend Edition)',
			categories: ["learning", "interview", "reactjs", "ecommerce", "startup", "learning", "interview", "reactjs", "ecommerce", "startup"],
			link: '#'
		},
		{
			type: 'medium',
			date: 'October 17, 2022',
			title: 'How To Integrate Calendly (ReactJs - Frontend Edition)',
			categories: ["learning", "interview", "reactjs", "ecommerce", "startup"],
			link: '#'
		},
		{
			type: 'medium',
			date: 'October 17, 2022',
			title: 'How To Integrate Calendly (ReactJs - Frontend Edition)',
			categories: ["learning", "interview", "reactjs", "ecommerce", "startup"],
			link: '#'
		},
		{
			type: 'medium',
			date: 'October 17, 2022',
			title: 'How To Integrate Calendly (ReactJs - Frontend Edition)',
			categories: ["learning", "interview", "reactjs", "ecommerce", "startup"],
			link: '#'
		},
		{
			type: 'medium',
			date: 'October 17, 2022',
			title: 'How To Integrate Calendly (ReactJs - Frontend Edition)',
			categories: ["learning", "interview", "reactjs", "ecommerce", "startup"],
			link: '#'
		},
		{
			type: 'medium',
			date: 'October 17, 2022',
			title: 'How To Integrate Calendly (ReactJs - Frontend Edition)',
			categories: ["learning", "interview", "reactjs", "ecommerce", "startup"],
			link: '#'
		},
		{
			type: 'medium',
			date: 'October 17, 2022',
			title: 'How To Integrate Calendly (ReactJs - Frontend Edition)',
			categories: ["learning", "interview", "reactjs", "ecommerce", "startup"],
			link: '#'
		},
		{
			type: 'medium',
			date: 'October 17, 2022',
			title: 'How To Integrate Calendly (ReactJs - Frontend Edition)',
			categories: ["learning", "interview", "reactjs", "ecommerce", "startup"],
			link: '#'
		}
	]
	
	const renderItems = (items, limit = 0, type = '') => {
		const index = limit === 0 || limit >= items.length ? items.length - 1 : limit
		
		switch (type.toLowerCase()) {
			case 'github':
				return items.slice(0, index).map(item => {
					return <GithubCard item={item} key={item.title + uuidv4()}/>
				})
			case 'blog':
				return items.slice(0, index).map((item, index) => {
					return <BlogCard item={item} index={index} key={item.title + uuidv4()}/>
				})
			default:
				return null
		}
	}
	
	const renderViewMoreBtn = (items, renderList, show = false) => {
		return renderList.length < items.length && show &&
				<span className="w-full flex justify-center py-5">
						<button className="text-md font-semibold uppercase">View More</button>
				</span>
	}
	
	return (
		<section className="w-full md:ml-10 mb-16">
			<div className="w-full pb-10">
				{data && renderItems(data,3,'github')}
				{renderViewMoreBtn(data, renderItems(data,3,'github'), false)}
			</div>
			<div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
				{blogData && renderItems(blogData, 4, 'blog')}
			</div>
			<div className="w-full pb-10">
				{renderViewMoreBtn(blogData, renderItems(blogData, 4, 'blog'), false)}
			</div>
			<div className="w-full">
				<ul>
					<a href="#">
						<article className="py-8 mb-2  hover:z-10 transition hover:ease-in delay-200 hover:scale-90">
							<span className=" flex flex-row">
								<span className="bg-slate-800 rounded-full h-20 w-20 mr-4 md:h-24 md:w-24 p-2 flex flex-row justify-center md:mr-10">
									<FiFeather className="text-2xl mt-5 ml-0.5 md:mt-6 md:text-3xl"/>
								</span>
								<span>
									<h1 className="font-semibold uppercase text-md md:text-xl lg:text-xl xl:text-4xl">
										JavaScript Autocomplete
									</h1>
									<p className="text-blue-200 text-sm mt-0.5 mb-1.5 md:mt-1.5 md:mb-4">
										Learn with Jason - with Jason Lengstorf
									</p>
									<h6 className="uppercase text-sm tracking-wide font-semibold">
										June 28, 2021
									</h6>
								</span>
							</span>
						</article>
					</a>
					<a href="#">
						<article className="py-8 mb-2  hover:z-10 transition hover:ease-in delay-200 hover:scale-90">
							<span className=" flex flex-row">
								<span className="bg-slate-800 rounded-full h-20 w-20 mr-4 md:h-24 md:w-24 p-2 flex flex-row justify-center md:mr-10">
									<RiPagesLine className="text-2xl mt-5 ml-0.5 md:mt-6 md:text-3xl"/>
								</span>
								<span>
									<h1 className="font-semibold uppercase text-md md:text-xl lg:text-xl xl:text-4xl">
										JavaScript Autocomplete
									</h1>
									<p className="text-blue-200 text-sm mt-0.5 mb-1.5 md:mt-1.5 md:mb-4">
										Learn with Jason - with Jason Lengstorf
									</p>
									<h6 className="uppercase text-sm tracking-wide font-semibold">
										June 28, 2021
									</h6>
								</span>
							</span>
						</article>
					</a>
					<a href="#">
						<article className="py-8 mb-2  hover:z-10 transition hover:ease-in delay-200 hover:scale-90">
							<span className=" flex flex-row">
								<span className="bg-slate-800 rounded-full h-20 w-20 mr-4 md:h-24 md:w-24 p-2 flex flex-row justify-center md:mr-10">
									<FiPlay className="text-2xl mt-5 ml-0.5 md:mt-6 md:text-3xl"/>
								</span>
								<span>
									<h1 className="font-semibold uppercase text-md md:text-xl lg:text-xl xl:text-4xl">
										JavaScript Autocomplete
									</h1>
									<p className="text-blue-200 text-sm mt-0.5 mb-1.5 md:mt-1.5 md:mb-4">
										Learn with Jason - with Jason Lengstorf
									</p>
									<h6 className="uppercase text-sm tracking-wide font-semibold">
										June 28, 2021
									</h6>
								</span>
							</span>
						</article>
					</a>
					<a href="#">
						<article className="py-8 mb-2  hover:z-10 transition hover:ease-in delay-200 hover:scale-90">
							<span className=" flex flex-row">
								<span className="bg-slate-800 rounded-full h-20 w-20 mr-4 md:h-24 md:w-24 p-2 flex flex-row justify-center md:mr-10">
									<AiOutlineFile className="text-2xl mt-5 ml-0.5 md:mt-6 md:text-3xl"/>
								</span>
								<span>
									<h1 className="font-semibold uppercase text-md md:text-xl lg:text-xl xl:text-4xl">
										JavaScript Autocomplete
									</h1>
									<p className="text-blue-200 text-sm mt-0.5 mb-1.5 md:mt-1.5 md:mb-4">
										Learn with Jason - with Jason Lengstorf
									</p>
									<h6 className="uppercase text-sm tracking-wide font-semibold">
										June 28, 2021
									</h6>
								</span>
							</span>
						</article>
					</a>
					<a href="#">
						<article className="py-8 mb-2  hover:z-10 transition hover:ease-in delay-200 hover:scale-90">
							<span className=" flex flex-row">
								<span className="bg-slate-800 rounded-full h-20 w-20 mr-4 md:h-24 md:w-24 p-2 flex flex-row justify-center md:mr-10">
									<AiOutlineSound className="text-2xl mt-5 ml-0.5 md:mt-6 md:text-3xl"/>
								</span>
								<span>
									<h1 className="font-semibold uppercase text-md md:text-xl lg:text-xl xl:text-4xl">
										JavaScript Autocomplete
									</h1>
									<p className="text-blue-200 text-sm mt-0.5 mb-1.5 md:mt-1.5 md:mb-4">
										Learn with Jason - with Jason Lengstorf
									</p>
									<h6 className="uppercase text-sm tracking-wide font-semibold">
										June 28, 2021
									</h6>
								</span>
							</span>
						</article>
					</a>
				</ul>
			</div>
		</section>
	)
}

export default Cards
