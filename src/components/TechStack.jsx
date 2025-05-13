import nodejs from '../assets/node.png'
import express from '../assets/express.png'
import mongodb from '../assets/mongodb.png'
import jwt from '../assets/jwt.png'
import rest_api from '../assets/rest-api.png'
import postman from '../assets/postman.png'
import github from '../assets/github.png'
import linux from '../assets/linux_2.png'
import python from '../assets/python.png'

const TechStack = () => {
  return (
    <div>
      <div className="flex justify-center px-20 py-5 mt-8">
        <div className="flex flex-col p-8">
          <p className="text-[22px] mb-6 text-center">Tech Stack</p>
          <div className='flex gap-4 bg-gray-600 px-20 py-6 rounded-xl'>
            <div className='flex flex-wrap gap-16 justify-center items-center'>
              <div>
                <img src={nodejs} width={120} className='animate-bounce' />
              </div>
              <div>
                <img src={express} width={120} className='rounded-sm' />
              </div>
              <div>
                <img src={mongodb} width={60} className='animate-bounce' />
              </div>
              <div>
                <img src={jwt} width={60} />
              </div>
              <div>
                <img src={rest_api} width={70} className='animate-bounce' />
              </div>
              <div>
                <img src={postman} width={60} />
              </div>
              <div>
                <img src={github} width={58} className='animate-bounce' />
              </div>
              <div>
                <img src={linux} width={70} />
              </div>
              <div>
                <img src={python} width={46} className='animate-bounce' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TechStack