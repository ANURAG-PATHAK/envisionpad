import { Button } from "./ui/button"
import { MdArrowForward } from "react-icons/md"
export default function Hero() {
  return (
    <div className="container mx-4 my-4 mt-44 mb-20">
      <div className="flex flex-col space-y-8 md:space-y-12 mx-6">
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl md:text-6xl text-[#3B81F6] text-center">Collaborate & Create</div>
          <div className="text-4xl md:text-6xl text-center">for brainstorming sessions</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl md:text-3xl text-center">All-in-one markdown editor, collaborative canvas,</div>
          <div className="text-xl md:text-3xl text-center">and diagram-as-code builder</div>
        </div>
        <div className="self-center">
          <Button>Get Started <MdArrowForward className="mx-1 text-lg" /></Button>
        </div>
      </div>
    </div>
  )
}