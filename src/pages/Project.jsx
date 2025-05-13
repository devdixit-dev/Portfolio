import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'

const Project = () => {
  return (
    <div>
      <Navbar />
      <div className='py-10 mt-4 flex justify-center items-center'>
        <p className="text-[22px] mt-8 mb-4 text-center">Projects</p>
      </div>
      <div>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Project