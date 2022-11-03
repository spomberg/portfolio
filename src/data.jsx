import javascript from '../src/assets/images/javascript-icon.png';
import html from '../src/assets/images/html5-icon.png';
import sass from '../src/assets/images/sass.png';
import react from '../src/assets/images/react-js.png';
import sql from '../src/assets/images/sql.png';
import ruby from '../src/assets/images/ruby-on-rails.png';
import node from '../src/assets/images/nodejs.png';
import mongoDb from '../src/assets/images/mongodb.svg';
import materialUi from '../src/assets/images/material-ui.svg';
import typescript from '../src/assets/images/typescript.png';
import bootstrap from '../src/assets/images/bootstrap.png';

export const aboutMe = {
  text: `Throughout my career, I have honed my people skills in other industries where I successfully led projects in different areas and headed a 10 people team for 5 years. I also trained hundreds of people, as passing down knowledge (while continuously learning) is a passion of mine. 
  \nAside from my passion for coding, my abilities also extend to communication and collaboration with proficiency in interpersonal skills. My strongest suit is that I can bring these two skill sets together in a unique way. 
  \nMy goal is to now use my skills to make meaningful connections, exchange knowledge and help others while working as a Web Developer.`,
  skills: "JavaScript, TypeScript, HTML5, CSS, SASS, React.JS, Node.JS, Ruby/Rails, JQuery, Ajax, PostgreSQL, MongoDB, Git, Bootstrap, Jest, Cypress, Storybook"
}

export const portfolio = [
  {
    id: 1,
    title: "Trash2Treasure",
    description: "Platform for users to list items (treasures) that are being left for donation in public spaces. Created with React and Ruby on Rails.",
    img: "https://res.cloudinary.com/djv3yhbok/image/upload/v1656024604/portfolio/search-results1_nfgzdg.png",
    gif: "https://res.cloudinary.com/djv3yhbok/image/upload/q_auto:low/v1656463840/portfolio/t2t-1_bzjb0o.webp",
    link: "https://github.com/spomberg/trash2treasure",
    stacks: [react, sass, ruby]
  },
  {
    id: 2,
    title: "My Movie List",
    description: "Full-stack app for users to create, edit and share movie lists with their friends. Built with React, Ruby on Rails, MongoDB and the TMDB API.",
    img: "https://res.cloudinary.com/djv3yhbok/image/upload/v1660601973/portfolio/My_Movie_List_qz8hnm.png",
    gif: "https://res.cloudinary.com/djv3yhbok/image/upload/v1660180086/portfolio/ezgif-1-eb722a5992_azybbb.webp",
    link: "https://github.com/spomberg/my-movie-list",
    siteUrl: "https://mymovielist.ca",
    stacks: [ruby, mongoDb, react, sass, html, materialUi ]
  },
  {
    id: 3,
    title: "Memory Game",
    description: "Responsive memory game app that can be played in either solo or multiplayer modes built with React and TypeScript.",
    img: "https://github.com/spomberg/memory/blob/main/src/assets/images/memory-desktop-start-page.png?raw=true",
    gif: "https://github.com/spomberg/memory/blob/main/src/assets/images/memory-desktop-demo.gif?raw=true",
    link: "https://github.com/spomberg/memory",
    siteUrl: "https://memory.spomberg.com",
    stacks: [typescript, react, html, sass, bootstrap]
  },
  {
    id: 4,
    title: "Password Generator App",
    description: "Responsive single-page app that generates randomized passwords based on the selected inclusion options. Built with React.",
    img: "https://res.cloudinary.com/djv3yhbok/image/upload/v1662384770/portfolio/Password_Generator_App_kkedzj.png",
    gif: "https://res.cloudinary.com/djv3yhbok/image/upload/v1662296607/portfolio/password-generator_kocesv.gif",
    link: "https://github.com/spomberg/password-generator-app",
    siteUrl: "https://password-generator.spomberg.com",
    stacks: [react, javascript, sass, materialUi]
  },
  {
    id: 5,
    title: "QuizApp",
    description: "An application to create and share quizzes built with JavaScript, HTML5, Node, Express.",
    img: "https://res.cloudinary.com/djv3yhbok/image/upload/v1655950756/portfolio/quiz_attempt_tklaqb.png",
    gif: "https://res.cloudinary.com/djv3yhbok/image/upload/q_auto:eco/v1656536225/portfolio/quizapp_w553f3.webp",
    link: "https://github.com/spomberg/quizapp",
    stacks: [javascript, html, sass, sql, node]
  },
  {
    id: 6,
    title: "TinyApp",
    description: "Full-stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
    img: "https://res.cloudinary.com/djv3yhbok/image/upload/v1656024969/portfolio/shortURL-page_nnm0ch.png",
    gif: "https://res.cloudinary.com/djv3yhbok/image/upload/v1656539121/portfolio/tinyapp_ltope1.webp",
    link: "https://github.com/spomberg/tinyapp",
    stacks: [javascript, html, bootstrap, node]
  }
]