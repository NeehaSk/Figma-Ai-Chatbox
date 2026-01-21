


// // import sparkleIcon from "../assets/icons/app-title.png";
// // import arrowDownIcon from "../assets/icons/arrow-down.png";
// // import newChatIcon from "../assets/icons/New Chat Icon.png";

// // export default function TopBar() {
// //   return (
// //     <header
// //       className="
// //         w-full
// //         h-[60px] md:h-[68px] xl:h-[68px]
// //         bg-[#111111]
// //         border-b border-[#FFFFFF1A]
// //         px-4 md:px-6
// //         flex
// //         items-center
// //         justify-end
// //         font-manrope
// //         transition-all
// //         duration-200
// //       "
// //     >
// //       {/* RIGHT ACTIONS */}
// //       <div className="flex items-center gap-4">
// //         {/* SUPER AI BUTTON */}
// //         <button
// //           className="
// //             h-9 md:h-10
// //             px-4 md:px-5
// //             flex
// //             items-center
// //             gap-2
// //             rounded-lg
// //             border
// //             border-[#FFFFFF1A]
// //             bg-[#FFFFFF1A]
// //             text-white
// //             text-sm
// //             font-semibold
// //             hover:bg-[#FFFFFF26]
// //             transition
// //             whitespace-nowrap
// //           "
// //         >
// //           <img
// //             src={sparkleIcon}
// //             alt="sparkle"
// //             className="w-4 h-4"
// //           />

// //           <span>SuperAI 2.0</span>

// //           <img
// //             src={arrowDownIcon}
// //             alt="arrow"
// //             className="w-4 h-4 opacity-80"
// //           />
// //         </button>

// //         {/* NEW CHAT BUTTON */}
// //         <button
// //           className="
// //             h-9 md:h-10
// //             px-4 md:px-5
// //             flex
// //             items-center
// //             gap-2
// //             rounded-lg
// //             bg-white
// //             text-black
// //             text-sm
// //             font-semibold
// //             hover:bg-gray-200
// //             transition
// //             whitespace-nowrap
// //           "
// //         >
// //           <img
// //             src={newChatIcon}
// //             alt="new chat"
// //             className="w-4 h-4"
// //           />

// //           <span>New Chat</span>
// //         </button>
// //       </div>
// //     </header>
// //   );
// // }

// // import sparkleIcon from "../assets/icons/app-title.png";
// // import arrowDownIcon from "../assets/icons/arrow-down.png";
// // import newChatIcon from "../assets/icons/New Chat Icon.png";

// // export default function TopBar() {
// //   return (
// //     <header
// //       className="
// //         w-full
// //         h-[60px]
// //         md:h-[68px]
// //         bg-[#111111]
// //         border-b border-[#FFFFFF1A]
// //         px-4 md:px-6
// //         flex
// //         items-center
// //         justify-end
// //         font-manrope
// //       "
// //     >
// //       {/* RIGHT ACTIONS */}
// //       <div className="flex items-center gap-3 md:gap-4">
// //         {/* SUPER AI */}
// //         <button
// //           className="
// //             h-[36px]
// //             px-4
// //             flex
// //             items-center
// //             gap-2
// //             rounded-lg
// //             border border-[#FFFFFF1A]
// //             bg-[#FFFFFF1A]
// //             text-white
// //             text-sm
// //             font-semibold
// //             hover:bg-[#FFFFFF26]
// //             transition-all
// //             duration-200
// //           "
// //         >
// //           <img src={sparkleIcon} alt="sparkle" className="w-4 h-4" />
// //           <span>SuperAI 2.0</span>
// //           <img src={arrowDownIcon} alt="arrow" className="w-4 h-4 opacity-80" />
// //         </button>

// //         {/* NEW CHAT */}
// //         <button
// //           className="
// //             h-[36px]
// //             px-4
// //             flex
// //             items-center
// //             gap-2
// //             rounded-lg
// //             bg-white
// //             text-black
// //             text-sm
// //             font-semibold
// //             hover:bg-gray-200
// //             transition-all
// //             duration-200
// //           "
// //         >
// //           <img src={newChatIcon} alt="new chat" className="w-4 h-4" />
// //           <span>New Chat</span>
// //         </button>
// //       </div>
// //     </header>
// //   );
// // }

// // import panelIcon from "../assets/icons/panel.png";
// // import sparkleIcon from "../assets/icons/app-title.png";
// // import arrowDownIcon from "../assets/icons/arrow-down.png";
// // import newChatIcon from "../assets/icons/New Chat Icon.png";

// // export default function TopBar({ onPanelClick, isTab }) {
// //   return (
// //     <header className="h-[60px] md:h-[68px] bg-[#111] border-b border-white/10 px-4 flex items-center justify-between">

// //       {/* PANEL ICON – TAB ONLY */}
// //       {isTab && (
// //         <button
// //           onClick={onPanelClick}
// //           className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center"
// //         >
// //           <img src={panelIcon} alt="panel" className="w-4 h-4" />
// //         </button>
// //       )}

// //       <div className="flex items-center gap-3 ml-auto">
// //         <button className="h-[36px] px-4 flex items-center gap-2 rounded-lg bg-[#FFFFFF1A]">
// //           <img src={sparkleIcon} className="w-4 h-4" />
// //           <span>SuperAI 2.0</span>
// //           <img src={arrowDownIcon} className="w-4 h-4" />
// //         </button>

// //         <button className="h-[36px] px-4 flex items-center gap-2 bg-white text-black rounded-lg">
// //           <img src={newChatIcon} className="w-4 h-4" />
// //           New Chat
// //         </button>
// //       </div>
// //     </header>
// //   );
// //}
// import panelIcon from "../assets/icons/panel.png";
// import sparkleIcon from "../assets/icons/app-title.png";
// import arrowDownIcon from "../assets/icons/arrow-down.png";
// import newChatIcon from "../assets/icons/New Chat Icon.png";

// // // export default function TopBar({ onPanelClick, isTab }) {
// // //   return (
// // //     <header className="h-[60px] md:h-[68px] bg-[#111] border-b border-white/10 px-4 flex items-center justify-between">

// // //       {/* PANEL ICON – TAB ONLY */}
// // //       {isTab && (
// // //         <button
// // //           onClick={onPanelClick}
// // //           className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center"
// // //         >
// // //           <img src={panelIcon} alt="panel" className="w-4 h-4" />
// // //         </button>
// // //       )}

// // //       <div className="flex items-center gap-3 ml-auto">
// // //         <button className="h-[36px] px-4 flex items-center gap-2 rounded-lg bg-[#FFFFFF1A]">
// // //           <img src={sparkleIcon} className="w-4 h-4" />
// // //           <span>SuperAI 2.0</span>
// // //           <img src={arrowDownIcon} className="w-4 h-4" />
// // //         </button>

// // //         <button className="h-[36px] px-4 flex items-center gap-2 bg-white text-black rounded-lg">
// // //           <img src={newChatIcon} className="w-4 h-4" />
// // //           New Chat
// // //         </button>
// // //       </div>
// // //     </header>
// // //   );
// // // }


// export default function TopBar({ isTab, onPanelClick }) {
//   return (
//     <header className="h-[60px] md:h-[68px] bg-[#111] border-b border-white/10 px-4 flex items-center justify-between">
      
//       {/* PANEL ICON – TAB ONLY */}
//       {isTab && (
//         <button
//           onClick={onPanelClick}
//           className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center"
//         >
//           <img src={panelIcon} alt="panel" className="w-4 h-4" />
//         </button>
//       )}

//       <div className="flex items-center gap-3 ml-auto">
//         {/* SuperAI – NO COLOR CHANGE */}
//         <button className="h-[36px] px-4 flex items-center gap-2 rounded-lg bg-[#282828] border-white/10 border
//           border-[#FFFFFF1A] text-white
//          text-sm
//              font-semibold  hover:bg-[#FFFFFF26] transition-all duration-200
// ">
//           <img src={sparkleIcon} className="w-4 h-4" />
//           <span>SuperAI 2.0</span>
//           <img src={arrowDownIcon} className="w-4 h-4" />
//         </button>

//         <button className="h-[36px] px-4 flex items-center gap-2 bg-white text-black rounded-lg font-semibold
//              hover:bg-gray-200 transition whitespace-nowrap">
//           <img src={newChatIcon} className="w-4 h-4" />
//           New Chat
//         </button>
//       </div>
//     </header>
//   );
// }

// import panelIcon from "../assets/icons/panel.png";
// import sparkleIcon from "../assets/icons/app-title.png";
// import arrowDownIcon from "../assets/icons/arrow-down.png";
// import newChatIcon from "../assets/icons/New Chat Icon.png";

// export default function TopBar({ isMobile, isTab, onPanelClick }) {
//   return (
//     <header className="h-[60px] md:h-[68px] bg-[#111] border-b border-white/10 px-4 flex items-center">
      
//       {(isMobile || isTab) && (
//         <button
//           onClick={onPanelClick}
//           className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center"
//         >
//           <img src={panelIcon} className="w-4 h-4" />
//         </button>
//       )}

//       <div className="flex items-center gap-3 ml-auto">
//         <button className="h-[36px] px-4 flex items-center gap-2 rounded-lg bg-[#282828] border border-[#FFFFFF1A] text-white text-sm font-semibold">
//           <img src={sparkleIcon} className="w-4 h-4" />
//           SuperAI 2.0
//           <img src={arrowDownIcon} className="w-4 h-4" />
//         </button>

//         <button className="h-[36px] px-4 flex items-center gap-2 bg-white text-black rounded-lg font-semibold">
//           <img src={newChatIcon} className="w-4 h-4" />
//           New Chat
//         </button>
//       </div>
//     </header>
//   );
// }
// import panelIcon from "../assets/icons/panel.png";
// import sparkleIcon from "../assets/icons/app-title.png";
// import arrowDownIcon from "../assets/icons/arrow-down.png";
// import newChatIcon from "../assets/icons/New Chat Icon.png";

// export default function TopBar({ isMobile, isTab, onPanelClick }) {
//   return (
//     <header className="h-[60px] md:h-[68px] bg-[#111] border-b border-white/10 px-4 flex items-center">
      
//       {/* LEFT : PANEL ICON (MOBILE + TAB ONLY) */}
//       {(isMobile || isTab) && (
//         <button
//           onClick={onPanelClick}
//           className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center"
//         >
//           <img src={panelIcon} className="w-4 h-4" />
//         </button>
//       )}

//       {/* CENTER (MOBILE) | RIGHT (TAB + DESKTOP) */}
//       <div
//         className={`
//           flex items-center gap-3
//           ${isMobile ? "mx-auto" : "ml-auto"}
//         `}
//       >
//         {/* SuperAI */}
//         <button className="h-[36px] px-4 flex items-center gap-2 rounded-lg bg-[#282828] border border-[#FFFFFF1A] text-white text-sm font-semibold">
//           <img src={sparkleIcon} className="w-4 h-4" />
//           <span>SuperAI 2.0</span>
//           <img src={arrowDownIcon} className="w-4 h-4" />
//         </button>

//         {/* NEW CHAT */}
//         {isMobile ? (
//           /* MOBILE: ICON ONLY */
//           <button className="w-9 h-9 bg-white text-black rounded-lg flex items-center justify-center">
//             <img src={newChatIcon} className="w-4 h-4" />
//           </button>
//         ) : (
//           /* TAB + DESKTOP: ICON + TEXT */
//           <button className="h-[36px] px-4 flex items-center gap-2 bg-white text-black rounded-lg font-semibold whitespace-nowrap">
//             <img src={newChatIcon} className="w-4 h-4" />
//             New Chat
//           </button>
//         )}
//       </div>
//     </header>
//   );
// }

// import panelIcon from "../assets/icons/panel.png";
// import sparkleIcon from "../assets/icons/app-title.png";
// import arrowDownIcon from "../assets/icons/arrow-down.png";
// import newChatIcon from "../assets/icons/New Chat Icon.png";

// export default function TopBar({ isMobile, isTab, onPanelClick }) {
//   return (
//     <header className="h-[60px] md:h-[68px] bg-[#111] border-b border-white/10 px-4 flex items-center">
      
//       {/* PANEL ICON – MOBILE + TAB ONLY */}
//       {(isMobile || isTab) && (
//         <button
//           onClick={onPanelClick}
//           className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center"
//         >
//           <img src={panelIcon} className="w-4 h-4" />
//         </button>
//       )}

//       {/* RIGHT SIDE */}
//       <div className="ml-auto flex items-center gap-3">

//         {/* SuperAI – TAB + DESKTOP ONLY */}
//         {!isMobile && (
//         //   <button
//         //     className="h-[36px] px-4 flex items-center gap-2 rounded-lg
//         //       bg-[#282828] border border-[#FFFFFF1A]
//         //       text-white text-sm font-semibold"
//         //   >
//         //     <img src={sparkleIcon} className="w-4 h-4" />
//         //     <span>SuperAI 2.0</span>
//         //     <img src={arrowDownIcon} className="w-4 h-4" />
//         //   </button>
//         // )}
//         <button className="h-[36px] px-4 flex items-center gap-2 rounded-lg
//   bg-[#282828] border border-[#FFFFFF1A]
//   text-white text-sm font-semibold">
//   <img src={sparkleIcon} className="w-4 h-4" />
//   <span>SuperAI 2.0</span>
//   <img src={arrowDownIcon} className="w-4 h-4" />
// </button>
// )}

//         {/* New Chat – ALL MODES */}
//         <button
//           className="h-[36px] px-4 flex items-center gap-2
//             bg-white text-black rounded-lg font-semibold"
//         >
//           <img src={newChatIcon} className="w-4 h-4" />
//           {!isMobile && <span>New Chat</span>}
//         </button>
//       </div>
//     </header>
//   );
// }

import panelIcon from "../assets/icons/panel.png";
import sparkleIcon from "../assets/icons/app-title.png";
import arrowDownIcon from "../assets/icons/arrow-down.png";
import newChatIcon from "../assets/icons/New Chat Icon.png";

export default function TopBar({ isMobile, isTab, onPanelClick }) {
  return (
    <header className="h-[60px] md:h-[68px] bg-[#111] border-b border-white/10 px-4 flex items-center">
      
      {/* PANEL ICON – MOBILE + TAB */}
      {(isMobile || isTab) && (
        <button
          onClick={onPanelClick}
          className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center"
        >
          <img src={panelIcon} className="w-4 h-4" />
        </button>
      )}

      {/* RIGHT SIDE */}
      <div className="ml-auto flex items-center gap-3">

        {/* SuperAI – ALL SCREENS (YES, MOBILE TOO) */}
        <button
          className="h-[36px] px-4 flex items-center gap-2 rounded-lg
            bg-[#282828] border border-[#FFFFFF1A]
            text-white text-sm font-semibold"
        >
          <img src={sparkleIcon} className="w-4 h-4" />
          <span>SuperAI 2.0</span>
          <img src={arrowDownIcon} className="w-4 h-4" />
        </button>

        {/* New Chat */}
        <button
          className="h-[36px] px-4 flex items-center gap-2
            bg-white text-black rounded-lg font-semibold"
        >
          <img src={newChatIcon} className="w-4 h-4" />
          {!isMobile && <span>New Chat</span>}
        </button>
      </div>
    </header>
  );
}
