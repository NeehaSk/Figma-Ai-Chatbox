


import WelcomeCards from "../components/WelcomeCards";
import PromptInput from "../components/PromptInput";
import Greeting from "../components/Greetings";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full w-full overflow-x-hidden">

      {/* CENTER WIDTH CONTROLLER */}
      <div
        className="
          flex
          flex-col
          flex-1
          items-center
          mx-auto
          w-full
          max-w-[768px]
          md:max-w-[900px]
          xl:max-w-[1200px]
        "
      >
        {/* CENTER CONTENT */}
        <div
          className="
            flex-1
            flex
            flex-col
            items-center
            justify-start
            lg:justify-center
            pt-6
            md:pt-8
            lg:pt-0
            gap-6
            px-6
            
            lg:px-10
            w-full
          "
        >
          <Greeting />
          <WelcomeCards />
        </div>

        {/* PROMPT INPUT */}
        <div className="px-6 lg:px-10 pb-4 w-full">
          <PromptInput />
        </div>
      </div>
    </div>
  );
}
