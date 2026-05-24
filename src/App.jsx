import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from './ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function PageContent() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Projects />
      <Process />
      <Contact />
      <Footer />
      <ChatWidget />
    </motion.main>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <PageContent />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
