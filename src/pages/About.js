import portrait from '../assets/Profile.png';

function About() {
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
        Hi, I'm Veroneca Sander. I'm currently in the process of making a 
        career change and pursuing my passion for coding. Ever since I was young, 
        I have loved coding and creating things with technology. However, 
        it wasn't until recently that I decided to take the leap and fully commit to this field. 
        I'm excited to see where this journey takes me and to continue learning and growing as a developer
        </p>
        <section style={{ display: 'flex' }}>
          <h3>Backstory</h3>
          <i>If you're interested</i>
        </section>
        <p>
        Since high school, I've always been interested in coding and video games. 
        I was always fascinated by how they worked and how much control you had over them. 
        However, after graduating, I ended up working various jobs in real estate, security, and retail. 
        Though these jobs paid the bills, I knew deep down that they weren't fulfilling my passion for technology.
        The high school DATA program played a major role in igniting my passion for technology and coding. 
        The curriculum allowed me to explore a variety of topics, from programming languages to networking, 
        and gave me the opportunity to work on exciting projects that challenged my skills. 
        I vividly remember the sense of accomplishment I felt when I successfully created my first program, 
        and it was at that moment that I knew I wanted to pursue a career in tech. 
        Even though I took a different path for a few years, the memories of the DATA program remained with me, 
        and it was the driving force behind my decision to make a career change into the tech industry.{' '}
        <i>It wasn't until I stumbled upon the Full Stack Developer Program with UCDavis that I realized my love for technology and coding.</i>
        I learned so much during that program and it sparked something in me that I had never felt before. 
        After working in different industries for a few years, I knew that I needed to make a change. 
        I wanted to pursue a career in tech and follow my passion for coding. 
        It wasn't an easy decision, but I knew it was the right one. 
        With the support of my loved ones, I made the leap and never looked back.
        </p>
      </section>
    </section>
  );
}

export default About;