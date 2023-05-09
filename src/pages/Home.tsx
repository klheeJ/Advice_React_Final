import Background from '../assets/wood.jpg'

function Home() {

  return (
  <div style={{
    backgroundImage: `url(${ Background})`, 
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '83vh',
    position: 'relative',
    opacity: '80%'
  }}></div>
  );

}

export default Home
