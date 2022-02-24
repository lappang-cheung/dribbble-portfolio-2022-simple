import {v4 as uuidv4} from "uuid";
import PropTypes from 'prop-types'

const BlogCard = ({ item, index }) => {
	return (
		<a href={item.link} key={item.title + uuidv4()}>
			<article className={`lg:max-w-[22rem] lg:max-h-[18rem] bg-gray-100 p-8 rounded-md dark:bg-slate-800 ` +
				`hover:z-10 hover:scale-90 hover:dark:bg-slate-900 transition hover:ease-in delay-200 ` +
				`${index === 1 ? 'md:mt-10' : ((index % 2 === 0 && index !==0) ? 'md:-mt-10' : '')}`}
			         key={item.title + uuidv4()}>
				<h3 className="uppercase text-sm font-bold">
					{item.type}
				</h3>
				<h6 className="mb-2 text-sm lg:text-md">
					{item.date}
				</h6>
				<h1 className="font-semibold md:text-md lg:text-lg py-1 xl:text-2xl">
					{item.title}
				</h1>
				<ul className="flex flex-row text-sm my-3 flex-wrap">
					{
						item.categories.slice(0,5).map(category => {
							return <li className="m-1 border rounded-lg px-1 py-0.5 border-slate-700"
							           key={item.category + uuidv4()}>
								{category}
							</li>
						})
					}
					{
						item.categories.length > 5 &&
						<li className="tracking-wide text-lg ml-2">
							...
						</li>
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
