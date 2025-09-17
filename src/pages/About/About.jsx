import HeroImg from "@/assets/images/hero.png";
import OlovaLogo from "@/assets/images/olova.png"; // Replace this if you want your own logo

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Learner, Creator, Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="hero illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

          <div className="relative space-y-4">
  <p className="text-white">
    Hello! I'm Khushant Devendra Sharma, a passionate Computer Science student and aspiring full-stack developer with a strong interest in AI and programming education. 
    <span className="font-bold text-white">
      I'm currently developing CodeBuddy – an interactive web application designed to make code learning, debugging, and logic-building easier and more engaging for learners of all levels.
    </span>
  </p>
  <p className="text-white">
    I enjoy building intuitive, responsive web and mobile applications using modern technologies. Alongside this, I am deepening my expertise in backend development and databases to grow into a well-rounded software engineer capable of delivering end-to-end solutions.
  </p>

  <div className="pt-6">
    <blockquote className="border-l-4 border-gray-300 pl-4">
      <p className="text-white">
        I'm a curious and dedicated learner, always eager to explore new tools, frameworks, and architectural patterns. My mission is to create accessible, practical, and impactful learning experiences for future developers while contributing meaningfully to the tech community.
      </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Khushant Devendra Sharma, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo} // Optional: Replace with your own logo
                        alt="Path2Learn Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">CodeBuddy</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
