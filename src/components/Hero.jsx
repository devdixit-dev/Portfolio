import bg_2 from '../assets/bg_2.png'
import waving_hand from '../assets/waving_hand.gif'

const Hero = () => {
  return (
    <div className="flex w-full h-1/3 px-20 justify-between mt-16 gap-8">
      <div className="flex flex-col justify-center">
        <div>
          <div className=''>
            {/* 👋 */}
            <h2 className="text-3xl mb-4 inline-block">Hi, I'm Dev</h2>
            <img src={waving_hand} className='inline-block mb-4 ml-2' width={36} />
          </div>
          
          <p className="text-xl mb-4"><span className='text-blue-500'>Backend Web Developer</span> | <span className='text-[17px]'> Node Js, Express Js, Mongo DB</span></p>
          <p className="text-[16px] max-w-[520px]">Building Scalable APIs & Efficient Server Architectures and backend systems using Node.js, Express, and MongoDB.</p>
        </div>
        <div className="mt-8 gap-2">
          <a href="/contact" className="px-3 py-3 bg-blue-500 rounded-md hover:opacity-80 text-sm">Contact Me</a>
        </div>
      </div>
      <div>
        <div className='w-[400px]'>
          <img src={bg_2} width={350} className='drop-shadow-md drop-shadow-blue-500' />
        </div>
      </div>
    </div>
  )
}

export default Hero