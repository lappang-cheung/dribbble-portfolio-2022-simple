import {AiOutlineGithub, AiOutlineTwitter} from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="py-10 flex flex-row">
			<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white md:h-14 md:w-14 mr-2"
			     src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
			     alt="avatar"/>
			<ul className="flex flex-row ">
				<li className="py-2.5 md:py-4.5 px-2 hover:font-semibold cursor-pointer">
					<a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="flex flex-row text-sm md:text-lg">
						<AiOutlineTwitter className="my-1 mx-1 md:text-xl"/> Twitter
					</a>
				</li>
				<li className="py-2.5 md:py-4.5 px-2 hover:font-semibold cursor-pointer">
					<a href="https://www.GitHub.com" target="_blank" rel="noreferrer" className="flex flex-row text-sm md:text-lg">
						<AiOutlineGithub className="my-1 mx-1 md:text-xl"/> GitHub
					</a>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
