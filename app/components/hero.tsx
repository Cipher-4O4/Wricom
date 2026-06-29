'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Code, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Menerima Project Website Baru</span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Transformasi Digital{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-300">
                Bisnis Anda
              </span>{' '}
              Dimulai Dari Sini
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Kami spesialis pembuatan website profesional, cepat, dan hasil-driven.
              Dari company profile hingga e-commerce, kami siap membantu bisnis Anda
              tumbuh lebih pesat.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/628898153569?text=Saya%20ingin%20berkonsultasi%20tentang%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all shadow-lg shadow-blue-500/25"
              >
                Konsultasi Gratis
                <ArrowRight className="ml-2" size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all backdrop-blur-sm"
                href="https://portfolio-website-xi-mauve-13.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Play className="mr-2" size={20} />
                Lihat Portfolio
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-amber-500 mb-1">50+</div>
                <div className="text-gray-400 text-sm">Project Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-amber-500 mb-1">98%</div>
                <div className="text-gray-400 text-sm">Client Puas</div>
              </div>
              <div className="text-center col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-amber-500 mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative">
              {/* Main Website Mockup */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
              >
                <div className="bg-slate-950/85 backdrop-blur-md rounded-xl p-1 shadow-2xl border border-white/10">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 p-4 border-b border-slate-800/80">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 bg-slate-900/60 border border-slate-800 rounded px-3 py-1.5 text-[10px] text-slate-400 text-center font-mono select-none">
                      wricom.digital
                    </div>
                  </div>

                  {/* Website Content */}
                  <div className="p-6 space-y-4">
                    {/* Mock Nav Bar */}
                    <div className="flex items-center justify-between border-b border-slate-800/50 pb-3">
                      <div className="text-xs font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Wricom</div>
                      <div className="flex gap-2">
                        <div className="w-6 h-1.5 bg-slate-800 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-slate-800 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-slate-800 rounded-full"></div>
                      </div>
                    </div>

                    {/* Mock Hero Area */}
                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div className="space-y-3">
                        <div className="h-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded w-full"></div>
                        <div className="h-2 bg-slate-800 rounded w-5/6"></div>
                        <div className="h-2 bg-slate-800 rounded w-2/3"></div>
                        <div className="flex gap-2 pt-2">
                          <div className="w-10 h-4 bg-blue-600 rounded-md"></div>
                          <div className="w-10 h-4 bg-slate-800 rounded-md"></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-slate-800/60 rounded-xl p-3 flex flex-col justify-between h-24">
                        <div className="flex justify-between items-center">
                          <div className="w-5 h-5 bg-blue-500/20 rounded-md flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          </div>
                          <div className="w-8 h-1.5 bg-slate-800 rounded-full"></div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-1.5 bg-slate-700 rounded w-3/4"></div>
                          <div className="h-1.5 bg-slate-800 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg"
              >
                <Code className="text-amber-500" size={24} />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg"
              >
                <Globe className="text-green-400" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}