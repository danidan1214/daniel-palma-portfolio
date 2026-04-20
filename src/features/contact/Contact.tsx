import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiAward, FiExternalLink } from 'react-icons/fi';
import { contact, certifications } from '../../data/portfolio';
import { Section, SectionHeading } from '../../components/ui';

export function Contact() {
  return (
    <Section id="contact" className="bg-cream-50" ariaLabel="Contact and certifications">
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
            <h3 className="text-2xl font-bold text-warm-900 mb-4">Contact Me</h3>
            <p className="text-warm-600 mb-8 leading-relaxed">
              I'm currently open to new opportunities and collaborations. Whether you have a
              project in mind, a question, or just want to connect — I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 p-4 bg-cream-50 border border-warm-200 rounded-xl hover:border-terracotta-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-terracotta-50 rounded-lg flex items-center justify-center group-hover:bg-terracotta-100 transition-colors">
                  <FiMail className="text-terracotta-500 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-warm-500">Email</p>
                  <p className="text-warm-800 font-medium">{contact.email}</p>
                </div>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-cream-50 border border-warm-200 rounded-xl hover:border-terracotta-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-terracotta-50 rounded-lg flex items-center justify-center group-hover:bg-terracotta-100 transition-colors">
                  <FiLinkedin className="text-terracotta-500 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-warm-500">LinkedIn</p>
                  <p className="text-warm-800 font-medium">Daniel Palma</p>
                </div>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-cream-50 border border-warm-200 rounded-xl hover:border-terracotta-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-terracotta-50 rounded-lg flex items-center justify-center group-hover:bg-terracotta-100 transition-colors">
                  <FiGithub className="text-terracotta-500 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-warm-500">GitHub</p>
                  <p className="text-warm-800 font-medium">danidan1214</p>
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
            <h3 className="text-2xl font-bold text-warm-900 mb-4 flex items-center gap-2">
              <FiAward className="text-amber-500" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-amber-50/50 border border-amber-200 rounded-xl hover:border-amber-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-warm-900 font-semibold">{cert.title}</h4>
                      <p className="text-warm-500 text-sm mt-0.5">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    <FiExternalLink className="text-amber-400 shrink-0 mt-1" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded"
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