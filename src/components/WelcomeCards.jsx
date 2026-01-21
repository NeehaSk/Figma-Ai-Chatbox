





// import { FileText, BarChart2, AlignLeft } from "lucide-react";

// export default function WelcomeCards() {
//   return (
//     <div className="flex gap-5 mt-4"> {/* mt-6 → mt-4 (cards moved UP) */}
//       <Card
//         icon={<FileText size={14} />}
//         color="bg-blue-500"
//         text="Help Me To Create A Personal Branding And Web Page"
//       />

//       <Card
//         icon={<BarChart2 size={14} />}
//         color="bg-pink-500"
//         text="Write A Report Based On My Website Data"
//       />

//       <Card
//         icon={<AlignLeft size={14} />}
//         color="bg-orange-400"
//         text="Write A Tailored, Engaging Content, With A Focus Quality"
//       />
//     </div>
//   );
// }

// function Card({ icon, text, color }) {
//   return (
//     <div
//       className="
//         w-[260px]
//         h-[115px]        /* slight height reduction */
//         bg-[#3A3A3A]
//         rounded-xl
//         p-4
//         flex
//         flex-col
//         gap-3
//         transition
//         hover:bg-[#404040]
//       "
//     >
//       {/* ICON */}
//       <div
//         className={`
//           w-7
//           h-7              /* icon container smaller */
//           rounded-md
//           ${color}
//           flex
//           items-center
//           justify-center
//         `}
//       >
//         {icon}
//       </div>

//       {/* TEXT */}
//       <p className="text-[12.5px] leading-[17px] text-gray-300 mt-[2px]">
//         {text}
//       </p>
//     </div>
//   );
// }


import { FileText, BarChart2, AlignLeft } from "lucide-react";

export default function WelcomeCards() {
  return (
    
    <div
  className="
    w-full
    max-w-[1080px]
    xl:max-w-[1500px]
    mx-auto
    flex
    flex-wrap
    lg:flex-nowrap
    justify-center
    gap-6
    px-6
    lg:px-0
    mt-1
    min-w-0
  "
>

      <Card
        icon={<FileText size={14} className="text-white"/>}
        color="bg-blue-500"
        // text="Help Me To Create A Personal Branding And Web Page"
        text={
  <>
    Help Me To Create A Personal Branding 
    And Web Page
  </>
}

      />

      <Card
        icon={<BarChart2 size={14} className="text-white" />}
        color="bg-pink-500"        
        text={<>Write A Report Based On My <br/> Website Data</>}
      />

      <Card
        icon={<AlignLeft size={14} className="text-white"/>}
        color="bg-orange-400"
        text={<>Write A Tailored, Engaging <br/>Content, With A Focus Quality</>}
      />
    </div>
  );
}

function Card({ icon, text, color }) {
  return (
    <div
      className="
        w-[248px]
        xl:w-[260px]
        h-[110px]
        xl:h-[125px]
        bg-[#363636]
        border
        border-white/10
        rounded-[16px]
        px-5
        py-4
        flex-col
        
        transition
        border
        hover:bg-[#404040]
      "

>

    
      {/* ICON */}
      <div
        className={`
          w-7
          h-7
          rounded-md
          ${color}
          flex
          items-center
          justify-center
        `}
      >
        {icon}
      </div>

      {/* TEXT */}
      <p
        className="
          mt-6
          text-[12px]
          xl:text-[13px]
          leading-[18px]
          text-[#E5E5E5]
        "
      >
        {text}
      </p>
    </div>
  );
}

