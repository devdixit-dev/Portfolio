import mindcanvas_preview from '../assets/project_preview/mindcanvas.png'
import authapp_preview from '../assets/project_preview/authapp.png'

const ProjectCard = () => {
  return (
    <div className="px-20 flex justify-between gap-8 flex-wrap mb-6">

      {/* 1 - project card */}
      <div className="w-[310px] h-[360px] bg-gray-700 rounded-xl">
        <div className='h-[210px] w-full overflow-hidden flex justify-center items-center mb-4'>
          <img
            src={mindcanvas_preview}
            className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl'
            alt="Card image"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl">Mind Canvas</h2>
          <p className="text-sm">A blog app with user authentication</p>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://mind-canvas-blog-app.onrender.com/" target='_blank' className="bg-red-500 flex w-1/3 justify-center items-center py-2 px-6 rounded-sm">Live</a>
          <a href="https://github.com/devdixit-dev/Mind-Canvas" target='_blank' className="bg-blue-500 flex w-1/3 justify-center items-center py-2 px-6 rounded-sm">Github</a>
        </div>
      </div>

      {/* 2 project card */}
      <div className="w-[310px] h-[360px] bg-gray-700 rounded-xl">
        <div className='h-[210px] w-full overflow-hidden flex justify-center items-center mb-4'>
          <img
            src="https://placehold.co/600x400"
            className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl'
            alt="Card image"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl">Money Nest</h2>
          <p className="text-sm">Daily expense tracker andro-web app</p>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://money-nest-web-app.onrender.com/" target='_blank' className="bg-red-500 flex w-1/3 justify-center items-center py-2 px-6 rounded-sm">Live</a>
          <a href="https://github.com/devdixit-dev/Money-Nest-Web-App" target='_blank' className="bg-blue-500 flex w-1/3 justify-center items-center py-2 px-6 rounded-sm">Github</a>
        </div>
      </div>

      {/* 3 project card */}
      <div className="w-[310px] h-[360px] bg-gray-700 rounded-xl">
        <div className='h-[210px] w-full overflow-hidden flex justify-center items-center mb-4'>
          <img
            src={authapp_preview}
            className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl'
            alt="Card image"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl">Auth App</h2>
          <p className="text-sm">Authentication web app @greatstack</p>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://youtu.be/7BTsepZ9xp8?si=ykIctWvS6wLFoctn" target='_blank' className="bg-red-500 flex w-1/3 justify-center items-center py-2 px-6 rounded-sm">Youtube</a>
          <a href="https://github.com/devdixit-dev/MERN-Auth-w-React" target='_blank' className="bg-blue-500 flex w-1/3 justify-center items-center py-2 px-6 rounded-sm">Github</a>
        </div>
      </div>

      {/* 4 project card */}
      <div className="w-[310px] h-[360px] bg-gray-700 rounded-xl">
        <div className='h-[210px] w-full overflow-hidden flex justify-center items-center mb-4'>
          <img
            src="https://placehold.co/600x400"
            className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl'
            alt="Card image"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl">Short.ly</h2>
          <p className="text-sm">URL shortner app</p>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/devdixit-dev/short.ly" target='_blank' className="bg-blue-500 flex w-1/3 justify-center items-center py-2 px-6 rounded-sm">Github</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard