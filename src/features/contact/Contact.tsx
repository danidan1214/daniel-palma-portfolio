import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiAward, FiExternalLink } from 'react-icons/fi';
import { contact, certifications } from '../../data/portfolio';
import { Section, SectionHeading } from '../../components/ui';

export function Contact() {
  return (
    <Section id="contact" className="bg-slate-950" ariaLabel="Contact and certifications">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading subtitle="Let's build something great together.">
          Get in Touch
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Contact Me</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              I'm currently open to new opportunities and collaborations. Whether you have a
              project in mind, a question, or just want to connect — I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/10 transition-all group"
              >
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <FiMail className="text-indigo-400 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-slate-200 font-medium">{contact.email}</p>
                </div>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/10 transition-all group"
              >
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <FiLinkedin className="text-indigo-400 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="text-slate-200 font-medium">Daniel Palma</p>
                </div>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/10 transition-all group"
              >
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <FiGithub className="text-indigo-400 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="text-slate-200 font-medium">danidan1214</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FiAward className="text-blue-400" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-950/30 border border-blue-500/20 rounded-xl hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-slate-100 font-semibold">{cert.title}</h4>
                      <p className="text-slate-400 text-sm mt-0.5">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    <FiExternalLink className="text-blue-400 shrink-0 mt-1" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}