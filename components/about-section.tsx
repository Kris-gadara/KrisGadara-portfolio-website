"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Target, Award } from "lucide-react"

export default function AboutSection() {
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer currently pursuing B.Tech in Information Technology at CHARUSAT
            University. With a strong foundation in web technologies and a keen interest in creating innovative
            solutions, I strive to build applications that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:border-blue-400 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Education</h3>
                  <p className="text-gray-700 mb-2 font-medium">CHARUSAT University</p>
                  <p className="text-gray-600 text-sm mb-2">
                    Devang Patel Institute of Advance Technology and Research
                  </p>
                  <p className="text-gray-600 text-sm mb-3">B.Tech in Information Technology</p>
                  <p className="text-blue-600 font-bold text-lg">GPA: 8.65</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 hover:border-indigo-400 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Objective</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aspiring web developer with a passion for creating responsive and user-friendly web applications.
                    Eager to contribute to impactful projects while enhancing technical expertise.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-purple-400 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Achievements</h3>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <p>• Odoo x CHARUSAT Hackathon Participant</p>
                    <p>• Hackron at DY Patil University by Blinkit</p>
                    <p>• Multiple HackerRank Certifications</p>
                    <p>• Codecademy HTML & CSS Certified</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
