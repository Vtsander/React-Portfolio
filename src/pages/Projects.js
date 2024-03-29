import projects from '../components/Samples';

function Projects() {
  const imgDim = (width, [ratioW, ratioH]) => {
    const height = (width / ratioW) * ratioH;
    return { width: `${width}px`, height: `${height}px` };
  };

  const renderProject = ({ title, githubLink, deployedLink, img }) => {
    const styles = {
      projectImg: {
        ...imgDim(550, [16, 9]),
      },
    };

    return (
      <li key={title} className="application listStyleNone">
        <h2>
          {title} -{' '}
          <a href={githubLink} target="_blank" rel="noreferrer">
            GitHub Link
          </a>
        </h2>
        <a href={deployedLink} target="_blank" rel="noreferrer">
          <img src={img.src} alt={img.alt} style={styles.projectImg} />
        </a>
      </li>
    );
  };

  return (
    <section className="bg-gray p-5" id="portfolio">
      <h1>My Projects</h1>
      <ol className="d-flex flex-wrap justify-content-around">
        {projects.map(renderProject)}
      </ol>
    </section>
  );
}

export default Projects;
