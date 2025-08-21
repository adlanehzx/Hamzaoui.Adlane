import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Custom cursor effect
  useEffect(() => {
    const cursorDot = document.createElement("div");
    cursorDot.id = "cursor-dot";
    cursorDot.className =
      "fixed w-4 h-4 rounded-full bg-blue-600 pointer-events-none z-50 transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 opacity-0";
    document.body.appendChild(cursorDot);

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.opacity = "1";
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
    };

    // Add animation classes to the stylesheet
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      
      .animate-blob {
        animation: blob 7s infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      
      a, button, input, textarea, .cursor-hover {
        cursor: none;
      }
    `;
    document.head.appendChild(style);

    // Only enable custom cursor on desktop
    if (window.innerWidth > 1024) {
      document.addEventListener("mousemove", handleMouseMove);

      // Hide cursor on interactive elements
      const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, .cursor-hover"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursorDot.classList.add("scale-150");
        });

        el.addEventListener("mouseleave", () => {
          cursorDot.classList.remove("scale-150");
        });
      });
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (cursorDot) document.body.removeChild(cursorDot);
      if (style) document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = anchor.getAttribute("href")?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
