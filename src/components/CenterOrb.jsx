// export default function CenterOrb() {
//   return (
//     <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 via-blue-400 to-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.6)]" />
//   );
// }

// import userAvatar from "../assets/user/User Avatar.png";

// export default function CenterOrb() {
//   return (
//     <div className="flex justify-center">
//       <img
//         src={userAvatar}
//         alt="User Avatar"
//         className="
//           w-[80px]
//           h-[80px]
//           rounded-full
//           object-cover
//           shadow-[0_0_32px_rgba(255,255,255,0.35)]
//         "
//       />
//     </div>
//   );
// }

// import userAvatar from "../assets/user/User Avatar.png";

// export default function CenterOrb() {
//   return (
//     <div className="flex justify-center">
//       <img
//         src={userAvatar}
//         alt="User Avatar"
//         className="
//           w-[140px]
//           h-[140px]
//           rounded-full
//           object-cover
//         "
//         style={{
//           // filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 0.35))",
//                       filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 0.35))",


//         }}
//       />
//     </div>
//   );
// }
// import orbImage from "../assets/user/User Avatar.png";

// export default function CenterOrb() {
//   return (
//     <div className="flex items-center justify-center">
//       {/* ORB CONTAINER */}
//       <div
//         className="
//           relative
//           flex
//           items-center
//           justify-center
//           rounded-full
//           w-[110px]
//           h-[110px]
//         "
//       >
//         {/* SOFT WHITE GLOW (slightly stronger) */}
//         <div
//           className="
//             absolute
//             inset-[-6px]
//             rounded-full
//             blur-2xl
//             bg-white/30
//           "
//         />

//         {/* ORB IMAGE */}
//         <img
//           src={orbImage}
//           alt="AI Orb"
//           className="
//             relative
//             z-10
//             w-full
//             h-full
//             rounded-full
//             object-cover
//           "
//         />
//       </div>
//     </div>
//   );
// }

import orbImage from "../assets/user/User Avatar.png";

export default function CenterOrb() {
  return (
    <div className="flex items-center justify-center">
      {/* ORB CONTAINER */}
      <div
        className="
          relative
          flex
          items-center
          justify-center
          rounded-full

          w-[80px] h-[80px]          /* Mobile */
          md:w-[100px] md:h-[100px] /* Tab */
          lg:w-[110px] lg:h-[110px] /* Desktop */
          xl:w-[120px] xl:h-[120px] /* Large */
        "
      >
        {/* SOFT GLOW */}
        <div
          className="
            absolute
            inset-[-6px]
            rounded-full
            blur-2xl
            bg-white/30
          "
        />

        {/* ORB IMAGE */}
        <img
          src={orbImage}
          alt="AI Orb"
          className="
            relative
            z-10
            w-full
            h-full
            rounded-full
            object-cover
          "
        />
      </div>
    </div>
  );
}
