import {v4 as uuidv4} from "uuid";
import {AiFillStar} from "react-icons/ai";
import PropTypes from 'prop-types'


const MosaicCard = ({ item }) => {
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
}

MosaicCard.propTypes ={
	item: PropTypes.object.isRequired,
}

export default MosaicCard
