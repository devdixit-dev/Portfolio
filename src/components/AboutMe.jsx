const AboutMe = () => {
  return (
    <div>
      <div className="flex justify-center px-20 py-10 mt-4">
        <div className="flex flex-col p-8">
          <div>
            <p className="text-[22px] mb-4 text-center">About Me</p>
            <div>
              <p className="text-[17px] max-w-[900px] mb-6">
                I’m a passionate and detail-oriented backend developer specializing in building scalable and efficient server-side applications using Node.js. As a fresher, I bring strong foundational knowledge and a fast-learner capability to grow in real-world development environments.
              </p>
              <p className="text-[17px] max-w-[900px] mb-6">
                My technical toolkit includes <span className="text-blue-500 font-normal">Node.js, Express.js, MongoDB</span> along with familiarity in RESTful API design, JWT authentication, and Git for version control. I’ve also explored containerization using Docker, and I’m continuously learning DevOps practices to enhance deployment workflows.
              </p>
              <p className="text-[17px] max-w-[900px] mb-6">
                I enjoy solving complex problems, optimizing backend performance, and writing clean, maintainable code. I’m currently looking for opportunities where I can contribute to meaningful projects, collaborate with experienced teams, and evolve into a full-stack or specialized backend engineer.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutMe