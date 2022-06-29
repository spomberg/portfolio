import javascript from '../src/assets/images/javascript-icon.png';
import html from '../src/assets/images/html5-icon.png';
import sass from '../src/assets/images/sass.png';
import react from '../src/assets/images/react-js.png';
import sql from '../src/assets/images/sql.png';
import ruby from '../src/assets/images/ruby-on-rails.png';
import node from '../src/assets/images/nodejs.png';
import css from '../src/assets/images/css.png';
import bootstrap from '../src/assets/images/bootstrap.png';

export const aboutMe = {
  text: `I'm a full-stack junior web developer and a recent graduate of Lighthouse Labs. 
  \nThroughout my career, I have honed my people skills in other industries where I successfully lead projects in different areas and headed a 10 people team for 5 years. I also trained hundreds of people, as passing down knowledge (while continuously learning) is a passion of mine. 
  \nMy goal is to now use my skills to make meaningful connections, exchange knowledge and help others while working as a Web Developer.`,
  skills: "JavaScript, HTML5, CSS, SASS, React.JS, Node.JS, Ruby/Rails, JQuery, Ajax, PostgreSQL, Git, Bootstrap, Jest, Cypress, Storybook"
}

export const portfolio = [
  {
    id: 1,
    title: "Trash2Treasure",
    description: "Platform for users to list items (treasures) that are being left for donation in public spaces. Created with React and Ruby on Rails.",
    img: "https://res.cloudinary.com/djv3yhbok/image/upload/v1656024604/portfolio/search-results1_nfgzdg.png",
    gif: "https://res.cloudinary.com/djv3yhbok/image/upload/q_40/v1656459387/portfolio/ezgif.com-gif-maker_aqktn5.webp",
    link: "https://github.com/spomberg/trash2treasure",
    stacks: [react, sass, ruby]
  },
  {
    id: 2,
    title: "QuizApp",
    description: "An application to create and share quizzes built with JavaScript, HTML5, Node, Express.",
    img: "https://res.cloudinary.com/djv3yhbok/image/upload/v1655950756/portfolio/quiz_attempt_tklaqb.png",
    gif: "",
    link: "https://github.com/spomberg/quizapp",
    stacks: [javascript, html, sass, sql, node]
  },
  {
    id: 3,
    title: "Scheduler",
    description: "Single-page app built with React that allows students to book interviews.",
    img: "https://res.cloudinary.com/djv3yhbok/image/upload/v1656024779/portfolio/book_interview_gkwfxq.png",
    gif: "",
    link: "https://github.com/spomberg/scheduler",
    stacks: [react, javascript]
  },
  {
    id: 4,
    title: "Jungle",
    description: "A mini e-commerce application built with Ruby on Rails.",
    img: "https://res.cloudinary.com/djv3yhbok/image/upload/v1656035197/portfolio/FireShot_Capture_047_-_Jungle_-_localhost_fllw0k.png",
    gif: "https://res.cloudinary.com/djv3yhbok/image/upload/q_auto/v1656035534/portfolio/Recording_2022-06-23_at_21.50.28_t5ckl7.webp",
    link: "https://github.com/spomberg/jungle-rails",
    stacks: [ruby, html, css]
  },
  {
    id: 5,
    title: "LightBnB",
    description: "A simple AirBnB clone created to get comfortable with databases and SQL.",
    img: "https://res.cloudinary.com/djv3yhbok/image/upload/v1656024869/portfolio/main-page_k5d50s.png",
    gif: "",
    link: "https://github.com/spomberg/LightBnB",
    stacks: [javascript, sql, html, css]
  },
  {
    id: 6,
    title: "TinyApp",
    description: "Full-stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
    img: "https://res.cloudinary.com/djv3yhbok/image/upload/v1656024969/portfolio/shortURL-page_nnm0ch.png",
    gif: "",
    link: "https://github.com/spomberg/tinyapp",
    stacks: [javascript, html, bootstrap, node]
  }
]