import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div style={{
      backgroundImage: `url(./Cactus.png)`, 
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '75vh',
      position: 'relative',
      opacity: '80%'
    }}
      className="mt-20">    </div>
    <div className='flex flex-col absolute bottom-1/2 left-1/4 text-4xl font-bold font-abc gap-10' >
      <div className="flex justify-center items-center transition-opacity duration-700 ease-in opacity-90 hover:opacity-40">
        Have you ever wondered where to get good advice for your life? 
      </div>
      <div className="flex justify-center items-center transition-opacity duration-700 ease-in opacity-90 hover:opacity-40">
        <div>Click&nbsp;</div>
        <Link to='/view' className='text-yellow-400'>&nbsp;here </Link>
        &nbsp;to start discovering advice tailored for you. 
      </div>
    </div>

        </>
  )
}

export default About
