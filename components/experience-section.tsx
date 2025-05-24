"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Generative AI Intern",
      company: "Prodigy InfoTech",
      duration: "1 Month (Project Based)",
      type: "Internship",
      description:
        "Worked on generative AI projects, implementing machine learning models and exploring AI-driven solutions for real-world applications.",
      skills: ["Python", "Machine Learning", "AI/ML", "TensorFlow", "Data Science"],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Cognifyz Technologies",
      duration: "1 Month (Project Based)",
      type: "Internship",
      description:
        "Developed full-stack web applications using modern technologies and frameworks, focusing on scalable and efficient solutions.",
      skills: ["React", "Node.js", "JavaScript", "MongoDB", "Express.js"],
    },
    {
      title: "Full Stack Developer Intern",
      company: "TechnoHacks",
      duration: "1 Month (Project Based)",
      type: "Internship",
      description:
        "Gained hands-on experience in full-stack development, working on real-world projects and learning industry best practices.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Database"],
    },
  ]

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            My professional journey and internship experiences that have shaped my development skills and expertise.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-6 shadow-lg">
                        <Briefcase className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                        <p className="text-blue-600 font-medium text-lg">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{exp.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 hover:from-blue-200 hover:to-indigo-200 border-blue-200 px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
