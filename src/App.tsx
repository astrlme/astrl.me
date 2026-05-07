import { Mail, Server, SquareArrowOutUpRight } from "lucide-react"

const App = () => {
  return (
    <div className="flex justify-center min-h-screen px-[clamp(1.5rem,4vw,4rem)] py-[clamp(0.8rem,8vw,6rem)] selection:bg-white/20 selection:text-white">
      <div className="flex flex-col w-full max-w-[min(90vw,42rem)]">
        <header className="flex items-center">
          <img src="/astrl.png" alt="astrl (hey no stealing!)" className="w-12 h-12" />
        </header>

        <main className="flex-1 flex flex-col items-center justify-center space-y-4">
          <section className="pb-4 text-white/70 text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed">
            <p>
              Hi, I'm Furkan. a full-stack developer and DevOps-focused engineer based in Turkey. I'm graduating soon and actively building experience through hands-on projects. I enjoy developing reliable, scalable applications and working across both development and deployment to deliver complete solutions.
            </p>
          </section>

          <section className="pt-8 border-t border-white/20 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <a 
                href="https://status.astrl.me"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 border border-white/10 rounded-lg hover:bg-white/2 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-white flex items-center gap-2">
                      <Server className="w-4 h-4 text-white/50" />
                      astrl.me Status
                    </h3>
                  </div>
                  <p className="text-sm text-white/50">
                    Production-grade global status and incident management platform built on Cloudflare Edge.
                  </p>
              </a>

              <a 
                href="#"
                className="group block p-4 border border-white/10 rounded-lg hover:bg-white/2 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-white flex items-center gap-2">
                      Coming Soon(Eventually)
                    </h3>
                  </div>
                  <p className="text-sm text-white/50">
                    Another incredibly cool project that I'm working on. Stay tuned for updates!
                  </p>
              </a>
            </div>
          </section>
        </main>


        <footer className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/20 text-sm text-white/50 text-center">
          <a href="https://github.com/astrlme" className="flex items-center gap-2 hover:text-white transition-colors">
            <SquareArrowOutUpRight className="w-4 h-4"/> GitHub
          </a>

          <a href="https://www.linkedin.com/in/furkan-k%C3%BC%C3%A7%C3%BCko%C4%9Flu-a98413343/" className="ml-4 flex items-center gap-2 hover:text-white transition-colors">
            <SquareArrowOutUpRight className="w-4 h-4" /> LinkedIn
          </a>

          <a href="mailto:contact@astrl.me" className="ml-4 flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" /> Email
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App