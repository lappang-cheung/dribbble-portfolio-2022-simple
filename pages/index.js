import { AiFillStar, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'
import Info from '../components/Info/Info'
import InfoNav from '../components/Navbar/InfoNav'
import Footer from '../components/Layouts/Footer'

const Home = () => {
  return (
    <section className="w-full md:px-0 xl:px-30 xl:ml-10">
      <Info />
      <InfoNav />
      <Footer />
    </section>
  )
}

export default Home
