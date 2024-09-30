  import React, { useState, useEffect } from 'react';
  import { motion } from 'framer-motion';
  import { FaReact, FaNodeJs, FaCss3, FaHtml5, FaJsSquare, FaGitAlt, FaDocker, FaBootstrap, FaSass, FaPhp ,FaArrowUp,FaEnvelope , FaGithub, FaLinkedin , FaCoffee , FaWordpress, FaLinux ,FaSlack, FaExchangeAlt } from 'react-icons/fa';
  import { SiMysql, SiNestjs, SiTailwindcss, SiPostgresql , SiPython, SiTypescript, SiAdobeillustrator, SiAdobephotoshop , SiFigma } from 'react-icons/si';
  import Calendar from 'react-calendar';
  import { google } from 'googleapis';

  import './index.css';  
  import { Buffer } from 'buffer';
  import process from 'process';
  
  window.Buffer = Buffer;
  window.process = process;
  const Header = ({ activeSection }) => (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-6">
          {['intro', 'A-propos', 'Competences' ,'Technologies', 'Projets', 'contact'].map((section) => (
            <motion.li key={section} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a 
                href={`#${section}`} 
                className={`text-lg font-semibold hover:text-yellow-300 transition-colors ${activeSection === section ? 'text-yellow-300' : ''} `}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );

  const Intro = () => (
    <section id="intro" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
        <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl mb-4 ">Salut, moi c'est  
        <motion.span
          initial={{ color: "#fff" }}
          animate={{ color: ["#ff0080", "#00ff80", "#0080ff", "#ff0080"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h1 className='text-2xl mb-4 name-spacing font-bold'>Hamzaoui Adlane</h1>
        </motion.span>
      </h3>
      <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
        Développeur Fullstack Passionné
      </h1>
      <motion.a 
        href="#A-propos" 
        className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold py-3 px-6 rounded-full text-lg transition-colors shadow-lg hover:shadow-xl  mr-12" 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Découvrez mon univers
      </motion.a>
      <motion.a 
        href="https://drive.google.com/file/d/1NIJRzFIa3I7a8kVUIycF0HDBwBl6I6HP/view?usp=drive_link" 
        target='Blank'
        className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold py-3 px-6 rounded-full text-lg transition-colors shadow-lg hover:shadow-xl mb-4 mt-4 "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Téléchargez Mon CV
      </motion.a>
      </motion.div>
    </section>
  );

  const About = () => (
    <section id="A-propos" className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          À Propos
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto text-lg text-gray-700 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-4">
          Je suis un développeur web passionné, spécialisé dans les technologies modernes comme React, Node.js et NestJS.
          Actuellement en troisieme années en bacheloar en ingénierie Du Web à L'Esgi, j'ai eu l'opportunité d'explorer différents aspects 
          du développement logiciel, allant du front-end à l'architecture back-end.
          </p>
          <p>
          Mon parcours académique m'a permis de renforcer mes compétences en programmation, tout en me familiarisant avec les 
          fondamentaux de l'ingénierie logicielle, l'algorithmique, et la gestion de projets informatiques. Parallèlement, 
          mes projets personnels et professionnels m'ont permis de perfectionner mes connaissances en JavaScript, TypeScript 
          et de collaborer sur des projets complexes utilisant des frameworks modernes.
          </p>
          <p>
          En plus de mon expertise technique, j'ai récemment entrepris de mettre en œuvre des solutions d'intégration continue, 
          de déploiement, et d'optimisation de la performance, afin de m'assurer que les applications que je développe soient non 
          seulement fonctionnelles, mais également évolutives et maintenables à long terme.
          </p>
          <p>
          Je suis animé par un esprit d'innovation et une soif d'apprendre, toujours prêt à relever de nouveaux défis. Mon approche est centrée 
          sur l'expérience utilisateur, en veillant à ce que chaque projet soit une expérience fluide, esthétique, et adaptée aux besoins des utilisateurs finaux.
          </p>
          <p>
          En tant qu'étudiant et développeur fullstack, mon objectif est de continuer à progresser dans le domaine du développement web tout en contribuant 
          activement à la création de produits numériques de qualité. Que ce soit pour concevoir des interfaces dynamiques ou bâtir des API robustes, je m'efforce 
          de repousser les limites de ce qui est possible sur le web.
          </p>
        </motion.div>
      </div>
    </section>
  );


  const Services = () => (
    <section id="Competences" className="min-h-screen py-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mes Compétences
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { "title": "Développement Web", "desc": "Création de sites web interactifs et responsifs" },
            { "title": "API & Backend", "desc": "Conception d'API robustes et scalables" },
            { "title": "UI/UX Design", "desc": "Interfaces utilisateur intuitives et esthétiques" },
            { "title": "Optimisation", "desc": "Amélioration des performances web" },
            { "title": "Gestion de Projets", "desc": "Planification et exécution de projets agiles" },
            { "title": "Conception de base de données", "desc": "Conception et création de bases de données relationnelles" },
            { "title": "Travail d'équipe", "desc": "Collaboration efficace au sein d'équipes interdisciplinaires" },
            { "title": "SEO", "desc": "Optimisation pour les moteurs de recherche pour augmenter la visibilité en ligne" }

          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
 
  const technologiesInner = [
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'CSS3', icon: <FaCss3 className="text-blue-500" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'NestJS', icon: <SiNestjs className="text-red-500" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-blue-400" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
    { name: 'SCSS', icon: <FaSass className="text-pink-500" /> },
    { name: 'PHP', icon: <FaPhp className="text-indigo-500" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
  ];
  
  const technologiesOuter = [
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'WordPress', icon: <FaWordpress className="text-blue-600" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
    { name: 'Linux', icon: <FaLinux className="text-green-500" /> },
    { name: 'Slack', icon: <FaSlack className="text-purple-500" /> },
    { name: 'REST API', icon: <FaExchangeAlt className="text-gray-500" /> },
    { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
    { name: 'Adobe Illustrator', icon: <SiAdobeillustrator className="text-orange-600" /> },
    { name: 'Adobe Photoshop', icon: <SiAdobephotoshop className="text-blue-600" /> },
    { name: 'Java', icon: <FaCoffee className="text-pink-500" /> },
  ];
  
  const Skills = () => {
    return (
      <section id="Technologies" className="min-h-screen bg-gray-900 text-white py-20 flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Mes Compétences</h2>
  
          {/* Conteneur global pour le centre des deux cercles */}
          <div className="relative flex items-center justify-center w-[600px] h-[600px] mx-auto">
            {/* Premier cercle (intérieur) */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            >
              {technologiesInner.map((tech, index) => {
                const angle = index * (360 / technologiesInner.length);
                const radius = 100;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
  
                return (
                  <motion.div
                    key={tech.name}
                    className="absolute cursor-pointer"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    whileHover={{
                      scale: 1.5,
                      zIndex: 10,
                      transform: `translate(${x}px, ${y}px) scale(1.5)`, // Conserve la position d'origine
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    title={tech.name}
                  >
                    <div className="text-4xl">{tech.icon}</div>
                  </motion.div>
                );
              })}
            </motion.div>
  
            {/* Deuxième cercle (extérieur) */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            >
              {technologiesOuter.map((tech, index) => {
                const angle = index * (360 / technologiesOuter.length);
                const radius = 200;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
  
                return (
                  <motion.div
                    key={tech.name}
                    className="absolute cursor-pointer"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    whileHover={{
                      scale: 1.5,
                      zIndex: 10,
                      transform: `translate(${x}px, ${y}px) scale(1.5)`, // Conserve la position d'origine
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    title={tech.name}
                  >
                    <div className="text-4xl">{tech.icon}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  

  const Works = () => (
    <section id="Projets" className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mes Réalisations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[  
            { title: "Portfolio", desc: "Site web personnel (Portfolio)", image: "Portfolio.png" },
            { title: "JoJo EnergyDrink", desc: "SIte web de Jojo EnergyDrink", image: "JoJo.jpg" },
            { title: "Eventopia", desc: "Plateform de suivi d'evenment (INCOMPLET) ", image: "#.jpg" },
            { title: "KoubaMed", desc: "System de Gestion Cabinet medical", image: "#.jpg" },
            { title: "###", desc: "####", image: "#.jpg" },
            { title: "###", desc: "####", image: "#.jpg" }
          ].map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={`/images/${project.image}`} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
  
  const Contact = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      // Charger le script Google API
      const script = document.createElement('script');
      script.src = "https://apis.google.com/js/api.js";
      script.onload = () => {
        window.gapi.load('client:auth2', initClient);
      };
      document.body.appendChild(script);
    }, []);
  
    const initClient = () => {
      window.gapi.client.init({
        apiKey: 'AIzaSyCNJm7EiOsAPswZ3xCnR5NDlNh4rnq8VYE',
        clientId: 'V379868080869-oj8n87kl8romi7320mj2hnbstoeev3ii.apps.googleusercontent.com',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: "https://www.googleapis.com/auth/calendar.events"
      });
    };
  
    const handleDateChange = (newDate) => {
      setDate(newDate);
    };
  
    const handleTimeChange = (e) => {
      setTime(e.target.value);
    };
  
    const handleSubmit = async () => {
      setIsLoading(true);
  
      try {
        // Demander à l'utilisateur de se connecter
        await window.gapi.auth2.getAuthInstance().signIn();
  
        const startDateTime = new Date(date);
        startDateTime.setHours(time.split(':')[0], time.split(':')[1]);
        const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 heure plus tard
  
        const event = {
          summary: 'Rendez-vous Portfolio',
          description: 'Rendez-vous programmé depuis le portfolio',
          start: {
            dateTime: startDateTime.toISOString(),
            timeZone: 'Europe/Paris',
          },
          end: {
            dateTime: endDateTime.toISOString(),
            timeZone: 'Europe/Paris',
          },
          conferenceData: {
            createRequest: {
              requestId: "random-" + new Date().getTime(),
              conferenceSolutionKey: { type: "hangoutsMeet" }
            }
          },
          attendees: [
            {email: 'Contact.adlanehz@gmail.com'}, // Votre email
          ],
        };
  
        const response = await window.gapi.client.calendar.events.insert({
          calendarId: 'primary',
          resource: event,
          conferenceDataVersion: 1,
          sendUpdates: 'all'
        });
  
        alert(`Rendez-vous programmé pour le ${startDateTime.toLocaleString()}.\nLien Google Meet : ${response.result.hangoutLink}`);
      } catch (error) {
        console.error('Erreur lors de la création de lévénement :', error);
        alert('Erreur lors de la création de lévénement. Veuillez réessayer.');
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <section id="contact" className="min-h-screen py-20 bg-gradient-to-br from-green-400 to-blue-500 text-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contactez-moi
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-center mb-8 text-lg">
              Mon profil vous intéresse ? Programmez un rendez-vous Google Meet !
            </p>
            
            {/* Calendrier */}
            <div className="flex justify-center mb-8">
              <Calendar onChange={handleDateChange} value={date} />
            </div>
  
            {/* Sélecteur d'heure */}
            <div className="text-center mb-8">
              <label className="block text-lg mb-2">Choisissez une heure :</label>
              <input 
                type="time" 
                value={time} 
                onChange={handleTimeChange} 
                className="border p-2 rounded-md"
              />
            </div>
  
            {/* Bouton de programmation */}
            <div className="text-center">
              <button 
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Chargement...' : 'Programmer le rendez-vous'}
              </button>
            </div>
  
            {/* Liens sociaux */}
            <div className="flex justify-center space-x-6 mt-8">
              <motion.a
                href="https://github.com/adlanehzx"
                target='_blank'
                rel="noopener noreferrer"
                className="text-3xl text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adlane-hamzaoui/"
                target='_blank'
                rel="noopener noreferrer"
                className="text-3xl text-gray-600 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:contact.adlanehz@gmail.com"
                className="text-3xl text-gray-600 hover:text-pink-600 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>© 2023 Hamzaoui Adlane. Tous droits réservés.</p>
      </div>
    </footer>
  );

  const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('intro');

    useEffect(() => {
      const handleScroll = () => {
        const sections = ['intro', 'A-propos', 'Competences', 'Technologies','Spiral', 'Projets', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 50 && rect.bottom >= 50;
          }
          return false;
        });
        if (currentSection) setActiveSection(currentSection);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div className="portfolio">
        <Header activeSection={activeSection} />
        <Intro />
        <About />
        <Services />
        <Skills />
        <Works />
        <Contact />
        <Footer />
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-yellow-400 text-gray-800 p-3 rounded-full shadow-lg hover:bg-yellow-300 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      </div>
    );
  };

  export default Portfolio;