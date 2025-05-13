const Navbar = () => {
  return (
    <div>
      <div className="px-20 py-5 flex justify-between items-center">
        <a href="/">
          <div className="flex items-center tracking-widest">
            <h2 className="text-4xl">D.</h2>
            <p className="flex mt-3 ml-0.5">developer</p>
          </div>
        </a>
        <div>
          <ul className="flex flex-wrap gap-6 text-[16px]">
            <li className="hover:text-blue-500"><a href="/">Home</a></li>
            <li className="hover:text-blue-500"><a href="/about">About</a></li>
            <li className="hover:text-blue-500"><a href="/projects">Projects</a></li>
            <li className="hover:text-blue-500"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar