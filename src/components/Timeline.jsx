import React from 'react'
import { WordPullUp } from './ui/word-pull-up'
import { Timeline } from './ui/timeline'

const TimelinePage = () => {

 const data = [
   {
     title: "Setting up foundation",
     content: (
       <div>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
           We begin by developing a brand positioning framework, a narrative
           blueprint, and a comprehensive content strategy that resonate with
           your distinct personality and objectives.
         </p>
         <div className="grid grid-cols-2 gap-4">
           <img
             src="https://assets.aceternity.com/templates/startup-1.webp"
             alt="startup template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
           <img
             src="https://assets.aceternity.com/templates/startup-2.webp"
             alt="startup template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
           <img
             src="https://assets.aceternity.com/templates/startup-3.webp"
             alt="startup template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
           <img
             src="https://assets.aceternity.com/templates/startup-4.webp"
             alt="startup template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
         </div>
       </div>
     ),
   },
   {
     title: "Research and ideation",
     content: (
       <div>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
           Our skilled copywriters dive deep into research, exploring your
           industry landscape and audience insights to craft innovative ideas
           tailored to your brand.
         </p>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
           These ideas are designed to drive consistent, impactful organic
           growth, creating meaningful engagement and setting you apart from the
           competition.
         </p>
         <div className="grid grid-cols-2 gap-4">
           <img
             src="https://assets.aceternity.com/pro/hero-sections.png"
             alt="hero template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
           <img
             src="https://assets.aceternity.com/features-section.png"
             alt="feature template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
           <img
             src="https://assets.aceternity.com/pro/bento-grids.png"
             alt="bento template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
           <img
             src="https://assets.aceternity.com/cards.png"
             alt="cards template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
         </div>
       </div>
     ),
   },
   {
     title: "Editing and distribution",
     content: (
       <div>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
           After you record the scripts and share the raw footage with us, our
           editors meticulously craft a unique editing style tailored to your
           brand, enhancing each video’s appeal and coherence.
         </p>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
           Once finalized, our content managers strategically distribute the
           videos across platforms to ensure maximum reach, engagement, and
           alignment with your brand goals. We handle every detail to amplify
           your message and build a lasting connection with your audience.
         </p>
         {/* <div className="mb-8">
           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             ✅ Card grid component
           </div>
           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             ✅ Startup template Aceternity
           </div>
           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             ✅ Random file upload lol
           </div>
           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             ✅ Himesh Reshammiya Music CD
           </div>
           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             ✅ Salman Bhai Fan Club registrations open
           </div>
         </div> */}
         <div className="grid grid-cols-2 gap-4">
           <img
             src="https://assets.aceternity.com/pro/hero-sections.png"
             alt="hero template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
           <img
             src="https://assets.aceternity.com/features-section.png"
             alt="feature template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
           <img
             src="https://assets.aceternity.com/pro/bento-grids.png"
             alt="bento template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
           <img
             src="https://assets.aceternity.com/cards.png"
             alt="cards template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
         </div>
       </div>
     ),
   },
   {
     title: "Organic marketing funnel setup",
     content: (
       <div>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
           The work doesn’t end here. Our marketing team steps in to establish
           backend systems and automation processes that drive consistent,
           reliable organic leads and sales.
         </p>
         {/* <div className="mb-8">
           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             ✅ Card grid component
           </div>
           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             ✅ Startup template Aceternity
           </div>
           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             ✅ Random file upload lol
           </div>
           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             ✅ Himesh Reshammiya Music CD
           </div>
           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             ✅ Salman Bhai Fan Club registrations open
           </div>
         </div> */}
         <div className="grid grid-cols-2 gap-4">
           <img
             src="https://assets.aceternity.com/pro/hero-sections.png"
             alt="hero template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
           <img
             src="https://assets.aceternity.com/features-section.png"
             alt="feature template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
           <img
             src="https://assets.aceternity.com/pro/bento-grids.png"
             alt="bento template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
           <img
             src="https://assets.aceternity.com/cards.png"
             alt="cards template"
             width={500}
             height={500}
             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
           />
         </div>
       </div>
     ),
   },
 ];

  return (
    <div className="flex justify-center bg-neutral-950 items-center flex-col py-14 w-screen">
      <div className="flex -translate-x-7">
        <WordPullUp
          className=" tracking-[10] text-xl md:text-3xl lg:text-4xl font-light"
          words="Effortless 5-Step"
        />
        <WordPullUp
          className="tracking-[10] text-xl md:text-3xl lg:text-4xl font-normal text-blue-500"
          words="Process"
        />
        <WordPullUp
          className="tracking-[10] text-xl md:text-3xl lg:text-4xl font-light"
          words="to"
        />
      </div>
      <div className="flex">
        <WordPullUp
          className="tracking-[10] text-3xl md:text-5xl lg:text-7xl font-normal text-blue-500"
          words="Amplify"
        />
        <WordPullUp
          className="tracking-[10] font-light text-3xl md:text-5xl lg:text-7xl"
          words="Your Brand"
        />
        <WordPullUp
          className="tracking-[10] md:text-5xl text-3xl lg:text-7xl text-blue-500"
          words="Go Big !"
        />
      </div>
      <div className=" w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}

export default TimelinePage;