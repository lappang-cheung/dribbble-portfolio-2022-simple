import {v4 as uuidv4} from "uuid";
import PropTypes from 'prop-types'
import GithubCard from "./GithubCard";

const BlogCard = ({ item, index }) => {
	return (
		<a href={item.link} key={item.title + uuidv4()}>
			<article className={`md:max-w-[22rem] md:max-h-[16rem] bg-gray-100 p-8 rounded-md dark:bg-slate-800 ` +
				`hover:z-10 hover:scale-90 hover:dark:bg-slate-900 transition hover:ease-in delay-200 ` +
				`${index === 1 ? 'md:mt-10' : ((index % 2 === 0 && index !==0) ? 'md:-mt-10' : '')}`}
			         key={item.title + uuidv4()}>
				<h3 className="uppercase text-sm font-bold">{item.type}</h3>
				<h6>{item.date}</h6>
				<h1 className="font-semibold text-2xl py-1">{item.title}</h1>
				<ul className="flex flex-row text-sm my-3">
					{
						item.categories.map(category => {
							return <li className="pr-2 border-b-blue-200 rounded"
							           key={item.category + uuidv4()}>
								{category}
							</li>
						})
					}
				</ul>
			</article>
		</a>
	)
}

BlogCard.propTypes ={
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired
}

export default BlogCard
