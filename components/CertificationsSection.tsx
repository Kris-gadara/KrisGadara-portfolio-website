"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Foundation in Prompt Engineering",
      organization: "Amazon Web Services (AWS)",
      date: "2024",
      link: "https://www.linkedin.com/in/kris-gadara-1580b9343",
    },
    {
      title: "C# (Basic) Certificate",
      organization: "HackerRank",
      date: "2024",
      link: "https://www.linkedin.com/in/kris-gadara-1580b9343",
    },
    {
      title: "JavaScript (Basic) Certificate",
      organization: "HackerRank",
      date: "2024",
      link: "https://www.linkedin.com/in/kris-gadara-1580b9343",
    },
    {
      title: "Python (Basic) Certificate",
      organization: "HackerRank",
      date: "2024",
      link: "https://www.linkedin.com/in/kris-gadara-1580b9343",
    },
    {
      title: "Data Structures & Algorithms Full Course",
      organization: "Scaler Academy",
      date: "2024",
      link: "https://www.linkedin.com/in/kris-gadara-1580b9343",
    },
    {
      title: "ChatGPT for Everyone",
      organization: "GUVI (IIT-M & AICTE Certified)",
      date: "2024",
      link: "https://www.linkedin.com/in/kris-gadara-1580b9343",
    },
    {
      title: "Odoo x Charusat Hackathon Participant",
      organization: "Charusat University",
      date: "2024",
      link: "https://www.linkedin.com/in/kris-gadara-1580b9343",
    },
    {
      title: "Hackron Hackathon Participant",
      organization: "Blinkit",
      date: "2024",
      link: "https://www.linkedin.com/in/kris-gadara-1580b9343",
    },
  ]

  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A collection of my professional certifications and hackathon experiences, showcasing my passion for learning and building. View details on my <a href="https://www.linkedin.com/in/kris-gadara-1580b9343" target="_blank" className="text-blue-600 hover:underline">LinkedIn profile</a>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 hover:border-blue-400 transition-all duration-300 h-full group shadow-lg hover:shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm">Issued by: {cert.organization}</p>
                  <p className="text-gray-600 mb-4 text-sm">Date: {cert.date}</p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    onClick={() => window.open(cert.link, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
