import portrait from '../assets/Profile.png';

function Home() {
  const styles = {
    title: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    portraitImg: {
      float: 'left',
      marginRight: '10px',
    },
  };

  return (
    <section className="bg-gray p-5" id="about">
      <section style={styles.title}>
        <h1>About me</h1>
      </section>
      <section>
        <img src={portrait} alt="self portrait" style={styles.portraitImg} />
        <h3>Intro</h3>
        <p>
        Hi there, and welcome to my portfolio! My name is Veroneca Sander, 
        and I'm thrilled to have you here. As a software developer, 
        I'm passionate about creating elegant and intuitive solutions to complex problems. 
        In this portfolio, you'll find examples of my work and the technologies I'm skilled in. 
        Whether you're a potential employer or just browsing, 
        I hope you'll find something here that inspires you. 
        Please feel free to reach out if you have any questions or would 
        like to chat about a potential project. Thanks for stopping by!
        </p>
        <section style={{ display: 'flex' }}>
          <h3>Experiences</h3>
        </section>
        <p>
            {' '}
          <i></i>
        </p>
      </section>
    </section>
  );
}

export default Home;