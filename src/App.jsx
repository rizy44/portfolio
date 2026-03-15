import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './sections/Education';
import DevOpsProjects from './sections/DevOpsProjects';
import SecurityLabs from './sections/SecurityLabs';
import CompetitionProjects from './sections/CompetitionProjects';
import Languages from './sections/Languages';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <DevOpsProjects />
        <SecurityLabs />
        <CompetitionProjects />
        <Education />
        <Languages />
      </main>
      <Footer />
    </div>
  );
}
