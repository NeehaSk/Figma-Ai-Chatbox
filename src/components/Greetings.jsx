// import CenterOrb from "./CenterOrb";

// export default function Greeting() {
//   return (
//     <div
//       className="
//         flex
//         flex-col
//         items-center
//         text-center
//         mt-[40px]
//       "
//     >
//       {/* Avatar */}
//       <CenterOrb />

//       {/* Spacer: Orb → Greeting */}
//       <div className="h-[12px]" />

//       {/* Small Greeting */}
//       <p
//         className="
//           h-[20px]
//           text-[14px]
//           leading-[20px]
//           text-gray-400
//         "
//       >
//         Good Morning, John
//       </p>

//       {/* Spacer */}
//       <div className="h-[8px]" />

//       {/* Main Heading */}
//       <h1
//         className="
//           h-[32px]
//           text-[24px]
//           leading-[32px]
//           font-semibold
//           text-white
//         "
//       >
//         How can i assist you today?
//       </h1>
//     </div>
//   );
// }
// import CenterOrb from "./CenterOrb";

// export default function Greeting() {
//   return (
//     <div
//       className="
//         flex
//         flex-col
//         items-center
//         text-center
//         mt-[40px]
//       "
//     >
//       {/* Avatar */}
//       <CenterOrb />

//       {/* Spacer: Orb → Greeting (increased) */}
//       <div className="h-[20px]" />

//       {/* Small Greeting */}
//       <p
//         className="
//           h-[20px]
//           text-[14px]
//           leading-[20px]
//           text-gray-400
//         "
//       >
//         Good Morning, John
//       </p>

//       {/* Spacer */}
//       <div className="h-[6px]" />

//       {/* Main Heading (slightly reduced) */}
//       <h1
//         className="
//           text-[22px]
//           leading-[30px]
//           font-semibold
//           text-white
//         "
//       >
//         How can i assist you today?
//       </h1>
//     </div>
//   );
// }

// import CenterOrb from "./CenterOrb";

// export default function Greeting() {
//   return (
//     <div
//       className="
//         flex
//         flex-col
//         items-center
//         text-center
//         mt-[40px]
//         w-full
//         max-w-[708px]      /* TAB */
//         lg:max-w-[900px]   /* DESKTOP */
//         xl:max-w-[1080px]  /* LARGE */
//         mx-auto
//       "
//     >
//       {/* Avatar */}
//       <CenterOrb />

//       {/* Spacer */}
//       <div className="h-[20px]" />

//       {/* Small Greeting */}
//       <p
//         className="
//           text-[14px]
//           leading-[20px]
//           text-gray-400
//         "
//       >
//         Good Morning, John
//       </p>

//       {/* Spacer */}
//       <div className="h-[6px]" />

//       {/* Main Heading */}
//       <h1
//         className="
//           text-[22px]
//           md:text-[28px]        /* TAB */
//           leading-[30px]
//           md:leading-[38px]     /* TAB */
//           font-semibold
//           text-white
//         "
//       >
//         How can i assist you today?
//       </h1>
//     </div>
//   );
// }
import CenterOrb from "./CenterOrb";

export default function Greeting() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-center
        mt-[32px]
        md:mt-[40px]
        lg:mt-[48px]
      "
    >
      {/* Center Orb */}
      <CenterOrb />

      {/* Spacer: Orb → Greeting */}
      <div className="h-[16px] md:h-[20px] lg:h-[24px]" />

      {/* Small Greeting */}
      <p
        className="
          h-[20px]
          text-[13px]
          leading-[18px]
          text-gray-400
          md:text-[13px]
          md:leading-[20px]
          lg:text-[15px]
        "
      >
        Good Morning, John
      </p>

      {/* Spacer */}
      <div className="h-[6px] md:h-[8px]" />

      {/* Main Heading */}
      <h1
        className="
          text-[20px]
          leading-[28px]
          font-semibold
          text-white
          md:text-[20px]
          md:leading-[30px]
          lg:text-[26px]
          lg:leading-[36px]
        "
      >
        How can i assist you today?
      </h1>
    </div>
  );
}
