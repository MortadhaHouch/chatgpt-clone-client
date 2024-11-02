import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import Marquee from "../ui/marquee";
import { AnimatedListDemo } from "./AnimatedListDemo";
import { AnimatedBeamMultipleOutputDemo } from "./AnimatedBeamDemo";
import Globe from "../models/Globe";
const messages = [
  {
    name: "Customer Support",
    context: "User: How do I reset my password?\nBot: You can reset your password by clicking on 'Forgot Password' on the login page."
  },
  {
    name: "Weather Bot",
    context: "User: What’s the weather like today?\nBot: It's sunny with a high of 25°C and a low of 15°C."
  },
  {
    name: "Travel Assistant",
    context: "User: Find me flights from New York to Paris.\nBot: There are flights available from $500. Would you like to book now?"
  },
  {
    name: "Shopping Assistant",
    context: "User: Show me the latest smartphones.\nBot: Here are some of the top smartphones this year: iPhone 15, Galaxy S23, and Pixel 8."
  },
  {
    name: "Healthcare Chatbot",
    context: "User: I have a headache, what should I do?\nBot: Try drinking water and getting some rest. If it persists, please consult a doctor."
  }
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your discussions efficiently",
    description: "We save your conversations in a well organized way",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {messages.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.context}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Workspaces management",
    description: "In addition to saving your conversations, you can also manage your discussions in a custom workspaces",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Sharing your conversations",
    description: "You'll also be able to export your conversations",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Social community",
    description: "You'll also find social communities where you can talk and discuss and interact with others",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Globe/>
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid className="w-[95%] h-full">
      {features.map((feature, idx) => (
        <BentoCard index={idx} key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
