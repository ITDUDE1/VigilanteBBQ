import { Contact } from "@/components/home/contact";
import { Events } from "@/components/home/events";
import { Hero } from "@/components/home/hero";
import { Scorecard } from "@/components/home/scorecard";
import { Story } from "@/components/home/story";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Scorecard />
      <Events />
      <Contact />
    </>
  );
}
