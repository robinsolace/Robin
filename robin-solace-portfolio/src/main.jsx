import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Instagram, Play, Menu } from 'lucide-react';
import './styles.css';

const projects = [
  { number: '01', title: 'Frames in Motion', type: 'EDITING · VISUAL STORY', year: '2026', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=85' },
  { number: '02', title: 'The Quiet Hours', type: 'CINEMATIC · COLOR', year: '2026', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1400&q=85' },
  { number: '03', title: 'After the Light', type: 'CREATIVE DIRECTION', year: '2025', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85' }
];

function App() {
  return <main>
    <nav className="nav">
      <a className="wordmark" href="#home">ROBIN<span>®</span></a>
      <div className="navlinks"><a href="#about">ABOUT</a><a href="#work">SELECTED WORK</a><a href="#contact">CONTACT</a></div>
      <a className="insta" href="https://www.instagram.com/robinsolace/" target="_blank" rel="noreferrer"><Instagram size={16}/> <span>INSTAGRAM</span></a>
    </nav>

    <section className="hero" id="home">
      <div className="hero-top"><span>INDEPENDENT CREATIVE / EDITOR</span><span>BASED IN THE MOMENT · AVAILABLE WORLDWIDE</span></div>
      <div className="hero-copy">
        <p className="eyebrow">A LITTLE DIFFERENT. ALWAYS INTENTIONAL.</p>
        <h1>Stories told<br/> <em>through feeling.</em></h1>
        <div className="hero-bottom"><p>I'm Robin — a creative mind drawn to<br/>cinema, detail, and the art of a good story.</p><a className="round-link" href="#work" aria-label="Explore work"><ArrowUpRight/></a></div>
      </div>
      <div className="hero-image"><img src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=90" alt="Atmospheric cinematic night sky"/><div className="image-caption"><span>VISUAL JOURNAL — 001</span><span>SCROLL TO EXPLORE ↓</span></div></div>
    </section>

    <section className="intro section" id="about">
      <div className="section-label"><span>01 / ABOUT</span><span>A CREATIVE PRACTICE</span></div>
      <div className="intro-grid"><h2>Making the<br/><em>ordinary</em> feel<br/>extraordinary.</h2><div className="intro-text"><p className="lead">I believe the best stories don't just get seen — they get felt.</p><p>I'm Robin Solace, a visual storyteller exploring the space between imagery, rhythm, and emotion. Through thoughtful editing and a cinematic eye, I turn ideas into experiences that stay with you.</p><a className="text-link" href="https://www.instagram.com/robinsolace/" target="_blank" rel="noreferrer">MORE ON INSTAGRAM <ArrowUpRight size={15}/></a></div></div>
    </section>

    <section className="work section" id="work">
      <div className="section-label"><span>02 / SELECTED WORK</span><span>A FEW THINGS I'VE MADE</span></div>
      <div className="work-heading"><h2>Made with <em>intention.</em></h2><span>2025 — 2026</span></div>
      <div className="projects">{projects.map(p => <article className="project" key={p.number}><div className="project-image"><img src={p.image} alt={p.title}/><span className="play"><Play size={17} fill="currentColor"/></span></div><div className="project-meta"><span>{p.number} / {p.type}</span><span>{p.year}</span></div><h3>{p.title}<ArrowUpRight size={20}/></h3></article>)}</div>
      <p className="note">A small selection of creative explorations. More stories are always in progress.</p>
    </section>

    <section className="contact section" id="contact"><div className="section-label"><span>03 / GET IN TOUCH</span><span>LET'S MAKE SOMETHING MATTER</span></div><p className="eyebrow">HAVE A STORY IN MIND?</p><h2>Let's create<br/><em>something real.</em></h2><a className="contact-link" href="https://www.instagram.com/robinsolace/" target="_blank" rel="noreferrer">SAY HELLO ON INSTAGRAM <ArrowUpRight/></a></section>
    <footer><a className="wordmark" href="#home">ROBIN<span>®</span></a><span>© 2026 ROBIN SOLACE</span><a href="#home">BACK TO TOP ↑</a></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);