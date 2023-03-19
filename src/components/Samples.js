import cinephiliacPreview from '../assets/Cinephiliac.png';
import passwordGenPreview from '../assets/.png';
import textEditorPreview from '../assets/.jpg';
import noteTakerPreview from '../assets/.jpg'; 
import employeeTrackerPreview from '../assets/.jpg';
import hootenannyHeroPreview from '../assets/.jpg'; 

// template
// {
//     title: '',
//     githubLink: '',
//     deployedLink: '',
//     img: {
//       src: ,
//       alt: ' preview',
//     },
// },

const projects = [
  {
    title: 'Hootenanny Hero',
    githubLink: 'https://github.com/Vtsander/Hootenanny-Hero',
    deployedLink: 'https://effervescent-fox-a13140.netlify.app/',
    img: {
      src: hootenannyHeroPreview,
      alt: 'Hootenanny Hero Preview',
    },
  },
  {
    title: 'Cinephiliac',
    githubLink: 'https://github.com/Vtsander/Cinephiliac',
    deployedLink: 'https://vtsander.github.io/Cinephiliac/',
    img: {
      src: cinephiliacPreview,
      alt: 'Cinephiliac preview',
    },
  },
  {
    title: 'Password Generator',
    githubLink: 'https://github.com/Vtsander/PasswordGen',
    deployedLink: 'https://vtsander.github.io/PasswordGen/',
    img: {
      src: passwordGenPreview,
      alt: 'Password Gen preview',
    },
  },
  {
    title: 'Text-Editor',
    githubLink: 'https://github.com/Vtsander/Text-Editor',
    deployedLink: 'https://textjate.herokuapp.com/',
    img: {
      src: textEditorPreview,
      alt: 'Text Editor preview',
    },
  },
  {
    title: 'Note Taker',
    githubLink: 'https://github.com/Vtsander/Note-Taker',
    deployedLink: 'https://general-note-pad.herokuapp.com/',
    img: {
      src: noteTakerPreview,
      alt: 'Note Taker preview',
    },
  },
  {
    title: 'Employee Tracker',
    githubLink: 'https://github.com/Vtsander/Employee-Tracker',
    img: {
      src: employeeTrackerPreview,
      alt: 'Employee Tracker preview',
    },
  },
];

export default projects;