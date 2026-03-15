import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DevOpsProjects from './sections/DevOpsProjects';
import SecurityLabs from './sections/SecurityLabs';
import CompetitionProjects from './sections/CompetitionProjects';
import Languages from './sections/Languages';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <DevOpsProjects />
        <SecurityLabs />
        <CompetitionProjects />
        <Languages />
      </main>
      <Footer />
    </div>
  );
}
