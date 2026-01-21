
// import { FileText, BarChart2, AlignLeft } from "lucide-react";

// export default function WelcomeCards() {
//   return (
    
//     <div
//   className="
//     w-full
//     max-w-[1080px]
//     xl:max-w-[1500px]
//     mx-auto
//     flex
//     flex-wrap
//     lg:flex-nowrap
//     justify-center
//     gap-6
//     px-6
//     lg:px-0
//     mt-1
//     min-w-0
//   "
// >

//       <Card
//         icon={<FileText size={14} className="text-white"/>}
//         color="bg-blue-500"
//         // text="Help Me To Create A Personal Branding And Web Page"
//         text={
//   <>
//     Help Me To Create A Personal Branding 
//     And Web Page
//   </>
// }

//       />

//       <Card
//         icon={<BarChart2 size={14} className="text-white" />}
//         color="bg-pink-500"        
//         text={<>Write A Report Based On My <br/> Website Data</>}
//       />

//       <Card
//         icon={<AlignLeft size={14} className="text-white"/>}
//         color="bg-orange-400"
//         text={<>Write A Tailored, Engaging <br/>Content, With A Focus Quality</>}
//       />
//     </div>
//   );
// }

// function Card({ icon, text, color }) {
//   return (
//     <div
//       className="
//         w-[248px]
//         xl:w-[260px]
//         h-[110px]
//         xl:h-[125px]
//         bg-[#363636]
//         border
//         border-white/10
//         rounded-[16px]
//         px-5
//         py-4
//         flex-col
        
//         transition
//         border
//         hover:bg-[#404040]
//       "

// >

    
//       {/* ICON */}
//       <div
//         className={`
//           w-7
//           h-7
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
//       <p
//         className="
//           mt-6
//           text-[12px]
//           xl:text-[13px]
//           leading-[18px]
//           text-[#E5E5E5]
//         "
//       >
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
        px-6
        lg:px-0
        mt-1
      "
    >
      {/* GRID ONLY FOR MOBILE */}
      <div
        className="
          grid
          grid-cols-2
          gap-4

          md:flex
          md:flex-wrap
          md:justify-center
          md:gap-6

          lg:flex-nowrap
        "
      >
        {/* CARD 1 */}
        <Card
          className="col-span-1"
          icon={<FileText size={14} className="text-white text-[18px] " />}
          color="bg-blue-500"
          text={
            <>
              Help Me To Create A Personal Branding
              <br />
              And Web Page
            </>
          }
        />

        {/* CARD 2 */}
        <Card
          className="col-span-1"
          icon={<BarChart2 size={14} className="text-white text-[18px] " />}
          color="bg-pink-500"
          text={
            <>
              Write A Report Based On My
              <br />
              Website Data
            </>
          }
        />

        {/* CARD 3 — FULL WIDTH ON MOBILE */}
        <Card
          className="col-span-2"
          icon={<AlignLeft size={14} className="text-white text-[18px] " />}
          color="bg-orange-400"
          text={
            <>
              Write A Tailored, Engaging
              <br />
              Content, With A Focus Quality
            </>
          }
        />
      </div>
    </div>
  );
}

function Card({ icon, text, color, className = "" }) {
  return (
    <div
      className={`
        ${className}

        w-full
        md:w-[248px]
        xl:w-[260px]

       min-h-[100px]
        xl:h-[120px]

        bg-[#363636]
        border
        border-white/10
        rounded-[16px]
        px-5
        py-4

        flex
        flex-col

        transition
        hover:bg-[#404040]
      `}
    >
      {/* ICON */}
      <div
        className={`
          w-9
          h-9
          

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
