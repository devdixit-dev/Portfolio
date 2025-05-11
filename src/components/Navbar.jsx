const Navbar = () => {
  return (
    <div>
      <div className="px-6 py-4 bg-blue-500 flex justify-between items-center">
        <a href="#">
          <div className="flex items-center tracking-widest">
            <h2 className="text-4xl">Dev</h2>
            <p className="mt-3">.</p>
            <h3 className="mt-3">dixit</h3>
          </div>
        </a>
        <div>
          <ul className="flex gap-6 text-lg">
            <li className="hover:text-blue-500"><a href="#">Home</a></li>
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