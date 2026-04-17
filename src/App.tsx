import { Layout } from './layouts';
import { Hero } from './features/hero';
import { ExperienceTimeline } from './features/experience';
import { SkillsGrid } from './features/skills';
import { Contact } from './features/contact';

function App() {
  return (
    <Layout>
      <Hero />
      <ExperienceTimeline />
      <SkillsGrid />
      <Contact />
    </Layout>
  );
}

export default App;