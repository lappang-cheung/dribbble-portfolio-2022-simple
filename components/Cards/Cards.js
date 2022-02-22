import {AiFillStar} from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid'

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
		</section>
	)
}

export default Cards
