import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}

export default App
