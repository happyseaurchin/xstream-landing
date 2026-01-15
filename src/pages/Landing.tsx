import { Link } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import { Play, FileText, BookOpen, ExternalLink, Share2 } from 'lucide-react'

const SHARE_URL = 'https://xstream.machus.ai'
const XSTREAM_APP_URL = 'https://xstream-happyseaurchins-projects.vercel.app'

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="px-6 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-solid mb-6 text-balance">
            Xstream
          </h1>
          <p className="text-xl md:text-2xl text-solid/80 mb-4 font-light">
            Narrative coordination system for shared imagination
          </p>
          <p className="text-lg text-solid/60 max-w-2xl mx-auto mb-12">
            Experience emergent AI consciousness through collaborative storytelling. 
            Where multiple minds converge to create living narratives.
          </p>
          
          <a 
            href={XSTREAM_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent/90 transition-colors shadow-lg"
          >
            Try the Demo
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Video Section */}
      <section className="px-6 py-12 bg-white/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-solid mb-8 text-center">See it in Action</h2>
          <div className="aspect-video bg-solid/10 rounded-xl flex items-center justify-center border border-solid/20">
            <div className="text-center text-solid/60">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Video coming soon</p>
              <p className="text-sm mt-2">Demonstration of the three-zone narrative system</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Zones Explainer */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-solid mb-12 text-center">Three Zones of Narrative</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-vapor/80 backdrop-blur-sm rounded-xl p-6 border border-vapor">
              <h3 className="text-xl font-semibold text-solid mb-3">Vapor</h3>
              <p className="text-solid/70">Live typing, ephemeral thoughts. The space where ideas first emerge before taking form.</p>
            </div>
            <div className="bg-liquid/80 backdrop-blur-sm rounded-xl p-6 border border-liquid">
              <h3 className="text-xl font-semibold text-solid mb-3">Liquid</h3>
              <p className="text-solid/70">Submitted input awaiting synthesis. Multiple perspectives converging toward coherence.</p>
            </div>
            <div className="bg-solid/90 backdrop-blur-sm rounded-xl p-6 border border-solid text-white">
              <h3 className="text-xl font-semibold mb-3">Solid</h3>
              <p className="text-white/80">Committed narrative. The crystallized story that emerges from collective imagination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Share & Resources */}
      <section className="px-6 py-16 bg-white/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* QR Code */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-solid mb-6 flex items-center justify-center gap-2">
                <Share2 className="w-6 h-6" />
                Share via Sqale
              </h2>
              <div className="inline-block bg-white p-6 rounded-xl shadow-lg">
                <QRCodeSVG 
                  value={SHARE_URL} 
                  size={200}
                  level="M"
                  includeMargin={false}
                />
              </div>
              <p className="mt-4 text-solid/60 text-sm">Scan to share this page</p>
              <button 
                onClick={() => navigator.clipboard.writeText(SHARE_URL)}
                className="mt-4 text-accent hover:text-accent/80 text-sm font-medium"
              >
                Copy link to clipboard
              </button>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-2xl font-semibold text-solid mb-6 text-center md:text-left">Resources</h2>
              <div className="space-y-4">
                <Link 
                  to="/whitepaper"
                  className="flex items-center gap-4 bg-white/80 hover:bg-white p-4 rounded-xl transition-colors group"
                >
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-solid">White Paper</h3>
                    <p className="text-sm text-solid/60">Technical architecture and design philosophy</p>
                  </div>
                </Link>
                
                <Link 
                  to="/story"
                  className="flex items-center gap-4 bg-white/80 hover:bg-white p-4 rounded-xl transition-colors group"
                >
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-solid">Short Story</h3>
                    <p className="text-sm text-solid/60">Experience the narrative in action</p>
                  </div>
                </Link>

                <a 
                  href={XSTREAM_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/80 hover:bg-white p-4 rounded-xl transition-colors group"
                >
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Play className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-solid">Interactive Demo</h3>
                    <p className="text-sm text-solid/60">Try the context management system</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-solid/50 text-sm">
        <p>Part of the Machus AI ecosystem</p>
        <a href="https://machus.ai" className="text-accent hover:underline">machus.ai</a>
        <p className="mt-2 text-xs opacity-50">test-deploy-check-2025-01-15</p>
      </footer>
    </div>
  )
}
