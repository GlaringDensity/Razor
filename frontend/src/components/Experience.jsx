import { Play } from "lucide-react"

export default function GamingHero() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-card bg-center bg-no-repeat"
        
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-green-900/80"></div>

        {/* RGB Light Effect */}
        <div className="absolute inset-0 opacity-30 mix-blend-color-dodge bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.5),rgba(255,0,255,0.5),rgba(0,255,0,0.5))]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight font-mono tracking-wide">
          Experience The Gaming Advantage With Modern Equipment
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Unlock Your Full Potential with the Latest Cutting-Edge Gaming Gear
        </p>

        {/* Play Button */}
        <button
          className="group relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          aria-label="Play video"
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-white/20 group-hover:bg-white/30"></div>
          <Play className="w-8 h-8 text-white fill-white" />
        </button>
      </div>

      {/* RGB Border Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"></div>
    </section>
  )
}

