

// import MainLayout from "../layouts/MainLayout";
// import WelcomeCards from "../components/WelcomeCards";
// import PromptInput from "../components/PromptInput";
// import Greeting from "../components/Greetings";
// export default function Dashboard() {
//   return (
//     <MainLayout>
//       <div className="flex flex-col h-full justify-between">
//         {/* CENTER */}
//         <div className="flex flex-col items-center justify-center flex-1 gap-6">
          
//           {/* Greeting (Orb + texts) */}
//           <Greeting />

//           {/* Cards */}
//           <WelcomeCards />
//         </div>

//         {/* INPUT */}
//         <PromptInput />
//       </div>
//     </MainLayout>
//   );
// }
// import MainLayout from "../layouts/MainLayout";
// import WelcomeCards from "../components/WelcomeCards";
// import PromptInput from "../components/PromptInput";
// import Greeting from "../components/Greetings";

// export default function Dashboard() {
//   return (
//     <MainLayout>
//       {/* PAGE WRAPPER */}
//       <div className="flex flex-col h-full min-w-0 overflow-x-hidden">
        
//         {/* CENTER CONTENT */}
//         <div
//           className="
//             flex-1
//             flex
//             flex-col
//             items-center
//             justify-center
//             gap-6
//             px-6
//             lg:px-10
//             min-w-0
//           "
//         >
//           {/* GREETING */}
//           <Greeting />

//           {/* TASK CARDS */}
//           <WelcomeCards />
//         </div>

//         {/* PROMPT INPUT */}
//         <div className="px-6 lg:px-10 pb-4 min-w-0">
//           <PromptInput />
//         </div>

//       </div>
//     </MainLayout>
//   );
// }

// import MainLayout from "../layouts/MainLayout";
// import WelcomeCards from "../components/WelcomeCards";
// import PromptInput from "../components/PromptInput";
// import Greeting from "../components/Greetings";

// export default function Dashboard() {
//   return (
//     <MainLayout>
//       {/* PAGE WRAPPER */}
//       <div className="flex flex-col h-full w-full overflow-x-hidden">

//         {/* CENTER WIDTH CONTROLLER (FIGMA STYLE) */}
//         <div
//           className="
//             flex
//             flex-col
//             flex-1
//             items-center
//             mx-auto
//             w-full

//             max-w-[768px]        /* TAB */
//             md:max-w-[900px]     /* DESKTOP */
//             xl:max-w-[1200px]    /* LARGE */
//           "
//         >
          
//           {/* CENTER CONTENT */}
//           <div
//             className="
//               flex-1
//               flex
//               flex-col
//               items-center

//               justify-start       /* TAB */
//               lg:justify-center   /* DESKTOP + LARGE */

//               pt-6                /* TAB top spacing */
//               md:pt-8
//               lg:pt-0             /* DESKTOP reset */

//               gap-6
//               px-6
//               lg:px-10
//               w-full
//             "
//           >
//             {/* GREETING (ORB + TEXT) */}
//             <Greeting />

//             {/* TASK CARDS */}
//             <WelcomeCards />
//           </div>

//           {/* PROMPT INPUT */}
//           <div className="px-6 lg:px-10 pb-4 w-full">
//             <PromptInput />
//           </div>

//         </div>
//       </div>
//     </MainLayout>
//   );
// }

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
