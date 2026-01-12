import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function WhitePaper() {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg prose prose-solid max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-solid mb-2">Xstream White Paper</h1>
          <p className="text-solid/60 mb-8">Narrative Coordination for Shared Imagination</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-solid mb-4">Abstract</h2>
            <p className="text-solid/80 leading-relaxed">
              Xstream is a narrative coordination system that enables multiple participants to 
              collaboratively construct coherent stories through AI-mediated synthesis. By introducing 
              a three-zone model (Vapor, Liquid, Solid) and a triple-LLM architecture, Xstream 
              addresses the fundamental challenge of maintaining narrative coherence while preserving 
              individual creative agency.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-solid mb-4">The Three Zones</h2>
            
            <h3 className="text-xl font-medium text-solid mt-6 mb-3">Vapor Zone</h3>
            <p className="text-solid/80 leading-relaxed">
              The ephemeral space where thoughts first emerge. Real-time typing visible to others, 
              creating a sense of presence and anticipation. Nothing persists until deliberately 
              submitted.
            </p>

            <h3 className="text-xl font-medium text-solid mt-6 mb-3">Liquid Zone</h3>
            <p className="text-solid/80 leading-relaxed">
              Submitted inputs await synthesis. Multiple perspectives coexist in a state of 
              potential, visible but not yet resolved. The Medium-LLM works to find coherence 
              across contributions.
            </p>

            <h3 className="text-xl font-medium text-solid mt-6 mb-3">Solid Zone</h3>
            <p className="text-solid/80 leading-relaxed">
              Committed narrative that has crystallized from the synthesis process. The canonical 
              story that all participants share as ground truth.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-solid mb-4">Triple-LLM Architecture</h2>
            <ul className="space-y-4 text-solid/80">
              <li>
                <strong className="text-solid">Soft-LLM:</strong> User-facing refinement, helping 
                participants articulate their intentions clearly.
              </li>
              <li>
                <strong className="text-solid">Medium-LLM:</strong> Cross-player synthesis, finding 
                coherence across multiple simultaneous contributions.
              </li>
              <li>
                <strong className="text-solid">Hard-LLM:</strong> Background coherence engine, 
                maintaining narrative consistency and world-state.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-solid mb-4">Pscale Coordinates</h2>
            <p className="text-solid/80 leading-relaxed">
              A novel coordinate system for navigating temporal, spatial, and identity scales. 
              Negative values indicate meta/designer levels, zero represents the present moment, 
              and positive values point to settled/author content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-solid mb-4">Design Principles</h2>
            <ol className="list-decimal list-inside space-y-2 text-solid/80">
              <li><strong>Minimal systemic system</strong> - All components must exist simultaneously</li>
              <li><strong>Soft-code everything possible</strong> - Only platform guardrails are hard-coded</li>
              <li><strong>Temporal primacy</strong> - Proximity equals temporal relevance</li>
              <li><strong>Constraint as enablement</strong> - Limitations generate emergence</li>
              <li><strong>Experience over words</strong> - Generate experience in the reader's moment</li>
            </ol>
          </section>
        </article>
      </div>
    </div>
  )
}
