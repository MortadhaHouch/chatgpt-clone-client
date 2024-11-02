import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { CardSpotlightDemo } from "./CardSpotlightDemo";
const features = [
  [
    "Offers essential responses and answers to common queries",
    "Handles simple tasks like reminders or FAQs."
  ]
  ,
  [
    "Provides smarter, context-aware replies for more dynamic conversations.",
    " Automates workflows like appointment scheduling or order tracking.",
    "View conversation insights and user trends for better decision-making."
  ],
  [
    "Design personalized conversation flows for a tailored user experience.",
    "Fine-tune the chatbot to learn from past interactions for continuous improvement",
    "Get faster response times and dedicated technical assistance."],
  []]
export function HeroHighlightDemo() {
  return (
    <HeroHighlight className="w-full h-auto flex flex-col justify-center items-center p-10">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 sm:text-lg md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        With
        <Highlight className="text-black dark:text-white">
          Chatterly
        </Highlight>
        nothing is impossible to accomplish,<br/> Give it a try and you&apos;ll never regret
      </motion.h1>
      <div className='flex flex-row justify-center items-center flex-wrap gap-3 p-2'>
        <CardSpotlightDemo content={{title:"FREE",description:"",features:features[0]}}/>
        <CardSpotlightDemo content={{title:"PREMIUM",description:"",features:features[1]}}/>
        <CardSpotlightDemo content={{title:"PROFESSIONAL",description:"",features:features[2]}}/>
      </div>
    </HeroHighlight>
  );
}
