import Cards from "../Cards/Cards";

const Layout = ({ children }) => {
  return (
    <div className="container px-6 pt-6 mx-auto md:pt-16">
      <main className="flex flex-col md:flex-row">
        { children }
        <Cards />
      </main>
    </div>
  )
}

export default Layout
