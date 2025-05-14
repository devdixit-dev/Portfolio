import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="px-20 py-5 flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex items-center tracking-widest">
            <h2 className="text-4xl">D.</h2>
            <p className="flex mt-3 ml-0.5">developer</p>
          </div>
        </Link>
        <div>
          <ul className="flex flex-wrap gap-6 text-[16px]">
            <li className="hover:text-blue-500"><Link to={"/"}>Home</Link></li>
            <li className="hover:text-blue-500"><Link to={"/about"} >About</Link></li>
            <li className="hover:text-blue-500"><Link to={"/projects"}>Projects</Link></li>
            <li className="hover:text-blue-500"><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar