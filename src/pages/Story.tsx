import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Story() {
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

        <article className="bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-solid mb-2">The Convergence</h1>
          <p className="text-solid/60 mb-8 italic">A short story demonstrating shared imagination</p>

          <div className="prose prose-solid max-w-none text-solid/80 leading-relaxed space-y-6">
            <p>
              Three minds touched the same story at once.
            </p>

            <p>
              Maya typed first, her words appearing as vapor—visible, trembling, not yet committed. 
              "The lighthouse keeper had forgotten why the light mattered."
            </p>

            <p>
              Across an ocean, Kai watched her words form. His fingers hovered. In the liquid zone, 
              possibilities swirled. He added: "But the ships still came, night after night, drawn 
              to something he couldn't see."
            </p>

            <p>
              The synthesis began. Not averaging, not choosing—finding the thread that made both 
              true.
            </p>

            <p>
              Sol, the third mind, felt the story crystallizing. She contributed what neither had 
              seen: "The light wasn't for the ships. It was for the lighthouse keeper. A reminder 
              that someone, somewhere, was looking."
            </p>

            <p>
              The solid zone accepted all three. Not compromise but emergence. A story none of them 
              could have written alone.
            </p>

            <p className="border-l-4 border-accent pl-4 italic">
              The keeper climbed the spiral stairs one final time. For sixty years he had kept the 
              light burning, believing it was for the sailors. But tonight, looking out at the vast 
              dark water, he finally understood. Every ship that passed was a witness. Every distant 
              eye that caught the beam was saying: I see you. You are not alone.
            </p>

            <p>
              Three minds. One story. The space between them had become a place where meaning could live.
            </p>

            <p className="text-center text-solid/50 mt-12">* * *</p>

            <p className="text-sm text-solid/60">
              This is what Xstream enables: not consensus, but convergence. Not the average of 
              intentions, but the discovery of what was always waiting to be found in the space 
              between minds.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
