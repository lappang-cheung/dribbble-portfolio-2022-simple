import { v4 as uuidv4 } from 'uuid'

import MosaicCard from "./Card/MosaicCard";
import RegularCard from "./Card/RegularCard";
import NoBgCard from "./Card/NoBgCard";

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
	
	const projectBlog = [
		{
			type: 'blog',
			date: 'June 28, 2021',
			title: 'JavaScript Autocomplete',
			description: 'Learn with Jason - with Jason Lengstorf',
			categories: [],
			link: '#'
		},
		{
			type: 'web',
			date: 'June 28, 2021',
			title: 'JavaScript Autocomplete',
			description: 'Learn with Jason - with Jason Lengstorf',
			categories: [],
			link: '#'
		},
		{
			type: 'video',
			date: 'June 28, 2021',
			title: 'JavaScript Autocomplete',
			description: 'Learn with Jason - with Jason Lengstorf',
			categories: [],
			link: '#'
		},
		{
			type: 'file',
			date: 'June 28, 2021',
			title: 'JavaScript Autocomplete',
			description: 'Learn with Jason - with Jason Lengstorf',
			categories: [],
			link: '#'
		},{
			type: 'audio',
			date: 'June 28, 2021',
			title: 'JavaScript Autocomplete',
			description: 'Learn with Jason - with Jason Lengstorf',
			categories: [],
			link: '#'
		},{
			type: 'audio',
			date: 'June 28, 2021',
			title: 'JavaScript Autocomplete',
			description: 'Learn with Jason - with Jason Lengstorf',
			categories: [],
			link: '#'
		}
	]
	
	const renderItems = (items, limit = 0, type = '') => {
		const index = limit === 0 || limit >= items.length ? items.length : limit
		
		switch (type.toLowerCase()) {
			case 'github':
				return items.slice(0, index).map(item => {
					return <MosaicCard item={item} key={item.title + uuidv4()}/>
				})
			case 'blog':
				return items.slice(0, index).map((item, index) => {
					return <RegularCard item={item} index={index} key={item.title + uuidv4()}/>
				})
			case 'nobg':
				console.log(index)
				return items.slice(0, index).map((item, index) => {
					return <NoBgCard item={item} index={index} key={item.title + uuidv4()}/>
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
				{projectBlog && renderItems(projectBlog, 6, 'noBg')}
			</div>
		</section>
	)
}

export default Cards
