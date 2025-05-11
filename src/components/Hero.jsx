const Hero = () => {
  return (
    <div className="flex text-center justify-center px-20 py-20 mt-20 gap-8">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className="text-3xl mb-4">Hi, I'm Dev 👋</h2>
          <p className="text-xl mb-4">Backend Web Developer | JavaScript, Node Js, Express Js</p>
          <p className="text-[17px]">Building Scalable APIs & Efficient Server Architectures and backend systems using Node.js, Express, and MongoDB.</p>
        </div>
        <div className="mt-4 flex gap-2">
          <a href="" className="text-blue-500">[ Contact Me ]</a>
        </div>
      </div>
    </div>
  )
}

export default Hero