import HeroImg from "@/assets/images/hero.png";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Learner, Creator, Problem Solver
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            {/* Image */}
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

            {/* Content */}
            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Khushant Devendra Sharma, a passionate Computer Science
                student and aspiring full-stack developer with a strong interest
                in AI and programming education.
              </p>

              <p className="text-white">
                One of my completed projects is{" "}
                <span className="font-bold">CodeBuddy</span> — an interactive web
                platform designed to make coding, debugging, and logic-building
                easier and more engaging for learners of all levels.
              </p>

              <p className="text-white">
                I am currently working on{" "}
                <span className="font-semibold">PrepBuddy (ongoing project)</span>
                , an interview preparation platform focused on DSA, core computer
                science subjects, and structured practice to help students
                prepare smarter for technical interviews.
              </p>

              <p className="text-white">
                I enjoy building intuitive and responsive applications using
                modern technologies while continuously strengthening my backend
                and database skills to become a well-rounded software engineer
                capable of delivering end-to-end solutions.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a curious and dedicated learner, always eager to explore
                    new tools, frameworks, and architectural patterns. My mission
                    is to create accessible, practical, and impactful learning
                    experiences for future developers while contributing
                    meaningfully to the tech community.
                  </p>

                  
                
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
