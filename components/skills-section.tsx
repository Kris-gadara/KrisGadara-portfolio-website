"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Responsive Design",
        "Material-UI",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-indigo-500 to-purple-500",
      skills: ["Node.js", "Express.js", "PHP", "RESTful APIs", "Socket.io", "Authentication", "JWT", "Middleware"],
    },
    {
      title: "Programming Languages",
      icon: "💻",
      color: "from-purple-500 to-pink-500",
      skills: ["JavaScript", "Python", "Java", "C", "C++", "C#", "TypeScript"],
    },
    {
      title: "Database & Storage",
      icon: "🗄️",
      color: "from-green-500 to-teal-500",
      skills: ["MongoDB", "MySQL", "Firebase", "SQL", "Data Structuring", "Database Design", "NoSQL"],
    },
    {
      title: "Mobile & Game Development",
      icon: "📱",
      color: "from-orange-500 to-red-500",
      skills: ["Flutter", "Unity", "Android Development", "3D Modeling", "Game Physics", "Mobile UI/UX"],
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      color: "from-cyan-500 to-blue-500",
      skills: [
        "TensorFlow",
        "Machine Learning",
        "Data Science",
        "OpenAI API",
        "Python ML Libraries",
        "Neural Networks",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      color: "from-gray-500 to-slate-500",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Firebase", "Vercel", "Docker", "Linux"],
    },
    {
      title: "Soft Skills",
      icon: "🧠",
      color: "from-emerald-500 to-green-500",
      skills: ["Analytical Thinking", "Problem Solving", "Team Collaboration", "Project Management", "Communication"],
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
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains of software
            development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 hover:border-blue-400 transition-all duration-300 h-full shadow-lg hover:shadow-xl group">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200 transition-colors text-xs px-2 py-1"
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
