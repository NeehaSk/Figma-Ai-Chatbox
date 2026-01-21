





// import { useState } from "react";
// import logo from "../assets/logo/codegnan-logo.png";

// /* ICONS */
// import chatIcon from "../assets/icons/chat.svg";
// import vedioIcon from "../assets/icons/vedio.svg";
// import imageIcon from "../assets/icons/image.svg";
// import codeIcon from "../assets/icons/code.svg";
// import fileIcon from "../assets/icons/file.svg";
// import panelIcon from "../assets/icons/panel.png";
// import sparkleIcon from "../assets/icons/sparkle.png";
// import moreIcon from "../assets/icons/more.svg";
// import userImage from "../assets/user/user.png";

// export default function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <aside
//       className={`
//         h-screen
//         ${collapsed ? "w-[72px]" : "w-[280px]"}
//         bg-[#121212]
//         text-white
//         flex
//         flex-col
//         transition-all
//         duration-300
//         ease-in-out
//       `}
//     >
//       {/* ===== TOP ===== */}
//       <div className="flex-1 px-4 pt-4 flex flex-col gap-4">
//         {/* LOGO + TOGGLE */}
//         <div className="flex items-center justify-between">
//           {!collapsed && <img src={logo} alt="logo" />}

//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="w-8 h-8 bg-[#1A1A1A] rounded-md flex items-center justify-center"
//           >
//             <img src={panelIcon} alt="toggle" />
//           </button>
//         </div>

//         {!collapsed && (
//           <p className="text-[11px] tracking-wider text-[#6B7280] uppercase">
//             General
//           </p>
//         )}

//         {/* MENU */}
//         <nav className="flex flex-col gap-1.5">
//           <MenuItem icon={chatIcon} label="AI Chat" active collapsed={collapsed} />
//           <MenuItem icon={vedioIcon} label="AI Video" collapsed={collapsed} />
//           <MenuItem icon={imageIcon} label="AI Image" collapsed={collapsed} />
//           <MenuItem icon={codeIcon} label="AI Development" collapsed={collapsed} />
//         </nav>

//         {!collapsed && (
//           <p className="mt-3 text-[11px] tracking-wider text-[#6B7280] uppercase">
//             Previous Chat
//           </p>
//         )}

//         {/* CHAT LIST */}
//         <div className="flex flex-col gap-1.5">
//           <ChatItem icon={fileIcon} text="Describe the benefits for a..." collapsed={collapsed} />
//           <ChatItem icon={fileIcon} text="Generate a list current we..." collapsed={collapsed} />
//           <ChatItem icon={fileIcon} text="Condense the following se..." collapsed={collapsed} />
//           <ChatItem icon={fileIcon} text="Describe what post moder..." collapsed={collapsed} />
//         </div>
//       </div>

//       {/* ===== BOTTOM ===== */}
//       {!collapsed && (
//         <div className="px-4 pb-4 flex flex-col gap-4 transition-all duration-300 overflow-hidden">
//           {/* UPGRADE CARD */}
//           <div
//             className="rounded-xl p-4 flex flex-col gap-4 border border-white/10"
//             style={{
//               background:
//                 "linear-gradient(74.72deg, #4956F4 47.29%, #2A328E 78.39%)",
//             }}
//           >
//             <div className="flex items-center gap-3">
//               <img
//                 src={sparkleIcon}
//                 alt="sparkle"
//                 className="w-10 h-10 bg-white rounded-full p-3"
//               />

//               <div>
//                 <p className="text-sm font-semibold">Upgrade Plan</p>
//                 <p className="text-xs text-white/80 whitespace-nowrap">
//                   More access to the best models
//                 </p>
//               </div>
//             </div>

//             <button className="bg-white text-black rounded-lg py-2 text-sm font-medium">
//               Upgrade Plan
//             </button>
//           </div>

//           {/* USER */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <img
//                 src={userImage}
//                 alt="user"
//                 className="w-9 h-9 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-sm font-medium">Nutan Sai Nandam</p>
//                 <p className="text-xs text-gray-400">nutansainandam.com</p>
//               </div>
//             </div>

//             <img src={moreIcon} alt="more" className="w-4 h-4 opacity-70" />
//           </div>
//         </div>
//       )}
//     </aside>
//   );
// }

// /* ===== COMPONENTS ===== */

// function MenuItem({ icon, label, active, collapsed }) {
//   return (
//     <div
//       className={`
//         flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
//         ${active ? "bg-[#1F1F1F] text-white" : "text-gray-400 hover:bg-[#1F1F1F]"}
//       `}
//     >
//       <img src={icon} className="w-4 h-4" />
//       {!collapsed && <span className="text-sm">{label}</span>}
//     </div>
//   );
// }

// function ChatItem({ icon, text, collapsed }) {
//   return (
//     <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#1A1A1A] text-gray-400">
//       <img src={icon} className="w-4 h-4" />
//       {!collapsed && <span className="text-sm truncate">{text}</span>}
//     </div>
//   );
// }

// import { useState } from "react";
// import logo from "../assets/logo/codegnan-logo.png";

// /* ICONS */
// import chatIcon from "../assets/icons/chat.svg";
// import vedioIcon from "../assets/icons/vedio.svg";
// import imageIcon from "../assets/icons/image.svg";
// import codeIcon from "../assets/icons/code.svg";
// import fileIcon from "../assets/icons/file.svg";
// import panelIcon from "../assets/icons/panel.png";
// import sparkleIcon from "../assets/icons/sparkle.png";
// import moreIcon from "../assets/icons/more.svg";
// import userImage from "../assets/user/user.png";

// export default function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <aside
//       className={`
//         h-screen
//         ${collapsed ? "w-[72px]" : "w-[280px]"}
//         bg-[#121212]
//         text-white
//         flex
//         flex-col
//         transition-all
//         duration-300
//         ease-in-out
//       `}
//     >
//       {/* ===== TOP (SCROLLABLE) ===== */}
//       <div className="flex-1 px-4 pt-4 flex flex-col gap-4 overflow-y-auto">
//         {/* LOGO + TOGGLE */}
//         <div className="flex items-center justify-between">
//           {!collapsed && <img src={logo} alt="logo" />}

//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="w-8 h-8 bg-[#1A1A1A] rounded-md flex items-center justify-center"
//           >
//             <img src={panelIcon} alt="toggle" />
//           </button>
//         </div>

//         {!collapsed && (
//           <p className="text-[11px] tracking-wider text-[#6B7280] uppercase">
//             General
//           </p>
//         )}

//         {/* MENU */}
//         <nav className="flex flex-col gap-1.5">
//           <MenuItem icon={chatIcon} label="AI Chat" active collapsed={collapsed} />
//           <MenuItem icon={vedioIcon} label="AI Video" collapsed={collapsed} />
//           <MenuItem icon={imageIcon} label="AI Image" collapsed={collapsed} />
//           <MenuItem icon={codeIcon} label="AI Development" collapsed={collapsed} />
//         </nav>

//         {!collapsed && (
//           <p className="mt-3 text-[11px] tracking-wider text-[#6B7280] uppercase">
//             Previous Chat
//           </p>
//         )}

//         {/* CHAT LIST */}
//         <div className="flex flex-col gap-1.5">
//           <ChatItem icon={fileIcon} text="Describe the benefits for a..." collapsed={collapsed} />
//           <ChatItem icon={fileIcon} text="Generate a list current we..." collapsed={collapsed} />
//           <ChatItem icon={fileIcon} text="Condense the following se..." collapsed={collapsed} />
//           <ChatItem icon={fileIcon} text="Describe what post moder..." collapsed={collapsed} />
//         </div>
//       </div>

//       {/* ===== BOTTOM (FIXED) ===== */}
//       {!collapsed && (
//         <div className="px-4 pb-4 flex flex-col gap-4 transition-all duration-300 overflow-hidden shrink-0">
//           {/* UPGRADE CARD */}
//           <div
//             className="rounded-xl p-4 flex flex-col gap-4 border border-white/10"
//             style={{
//               background:
//                 "linear-gradient(74.72deg, #4956F4 47.29%, #2A328E 78.39%)",
//             }}
//           >
//             <div className="flex items-center gap-3">
//               <img
//                 src={sparkleIcon}
//                 alt="sparkle"
//                 className="w-10 h-10 bg-white rounded-full p-3"
//               />

//               <div>
//                 <p className="text-sm font-semibold">Upgrade Plan</p>
//                 <p className="text-xs text-white/80 whitespace-nowrap">
//                   More access to the best models
//                 </p>
//               </div>
//             </div>

//             <button className="bg-white text-black rounded-lg py-2 text-sm font-medium">
//               Upgrade Plan
//             </button>
//           </div>

//           {/* USER */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <img
//                 src={userImage}
//                 alt="user"
//                 className="w-9 h-9 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-sm font-medium">Nutan Sai Nandam</p>
//                 <p className="text-xs text-gray-400">nutansainandam.com</p>
//               </div>
//             </div>

//             <img src={moreIcon} alt="more" className="w-4 h-4 opacity-70" />
//           </div>
//         </div>
//       )}
//     </aside>
//   );
// }

// /* ===== COMPONENTS ===== */

// function MenuItem({ icon, label, active, collapsed }) {
//   return (
//     <div
//       className={`
//         flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
//         ${active ? "bg-[#1F1F1F] text-white" : "text-gray-400 hover:bg-[#1F1F1F]"}
//       `}
//     >
//       <img src={icon} className="w-4 h-4" />
//       {!collapsed && <span className="text-sm">{label}</span>}
//     </div>
//   );
// }

// function ChatItem({ icon, text, collapsed }) {
//   return (
//     <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#1A1A1A] text-gray-400">
//       <img src={icon} className="w-4 h-4" />
//       {!collapsed && <span className="text-sm truncate">{text}</span>}
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import logo from "../assets/logo/codegnan-logo.png";

// /* ICONS */
// import chatIcon from "../assets/icons/chat.svg";
// import vedioIcon from "../assets/icons/vedio.svg";
// import imageIcon from "../assets/icons/image.svg";
// import codeIcon from "../assets/icons/code.svg";
// import fileIcon from "../assets/icons/file.svg";
// import panelIcon from "../assets/icons/panel.png";
// import sparkleIcon from "../assets/icons/sparkle.png";
// import moreIcon from "../assets/icons/more.svg";
// import userImage from "../assets/user/user.png";

// export default function Sidebar({ tabOpen, setTabOpen, isTab }) {
//   const [collapsed, setCollapsed] = useState(false); // DESKTOP / LARGE ONLY

//   return (
//     <>
//       {/* TAB OVERLAY */}
//       {isTab && tabOpen && (
//         <div
//           className="fixed inset-0 bg-#292929/60 z-40"
//           onClick={() => setTabOpen(false)}
//         />
//       )}

//       <aside
//         className={`
//           h-screen
//           bg-[#121212]
//           text-white
//           flex flex-col
//           transition-all duration-300 ease-in-out

//           ${
//             isTab
//               ? tabOpen
//                 ? "fixed left-0 top-0 z-50 w-[280px]"
//                 : "hidden"
//               : collapsed
//               ? "w-[72px]"
//               : "w-[280px]"
//           }
//         `}
//       >
//         {/* TOP */}
//         <div className="flex-1 px-4 pt-4 flex flex-col gap-4 overflow-y-auto">
//           {/* LOGO + PANEL */}
//           <div className="flex items-center justify-between">
//             {!collapsed && <img src={logo} alt="logo" />}

//             <button
//               // onClick={() =>
//                 // isTab ? setTabOpen(true) : setCollapsed(!collapsed)
//                 onClick={() =>
//   isTab ? setTabOpen(prev => !prev) : setCollapsed(!collapsed)


//               }
//               className="w-8 h-8 bg-[#1A1A1A] rounded-md flex items-center justify-center"
//             >
//               <img src={panelIcon} alt="panel" />
//             </button>
//           </div>

//           {!collapsed && (
//             <p className="text-[11px] tracking-wider text-[#6B7280] uppercase">
//               General
//             </p>
//           )}

//           {/* MENU */}
//           <nav className="flex flex-col gap-1.5">
//             <MenuItem icon={chatIcon} label="AI Chat" active collapsed={collapsed} />
//             <MenuItem icon={vedioIcon} label="AI Video" collapsed={collapsed} />
//             <MenuItem icon={imageIcon} label="AI Image" collapsed={collapsed} />
//             <MenuItem icon={codeIcon} label="AI Development" collapsed={collapsed} />
//           </nav>

//           {!collapsed && (
//             <p className="mt-3 text-[11px] tracking-wider text-[#6B7280] uppercase">
//               Previous Chat
//             </p>
//           )}

//           <div className="flex flex-col gap-1.5">
//             <ChatItem icon={fileIcon} text="Describe the benefits for a..." collapsed={collapsed} />
//             <ChatItem icon={fileIcon} text="Generate a list current we..." collapsed={collapsed} />
//             <ChatItem icon={fileIcon} text="Condense the following se..." collapsed={collapsed} />
//             <ChatItem icon={fileIcon} text="Describe what post moder..." collapsed={collapsed} />
//           </div>
//         </div>

//         {/* BOTTOM */}
//         {!collapsed && (
//           <div className="px-4 pb-4 flex flex-col gap-4 shrink-0">
//             <div
//               className="rounded-xl p-4 flex flex-col gap-4 border border-white/10"
//               style={{
//                 background:
//                   "linear-gradient(74.72deg, #4956F4 47.29%, #2A328E 78.39%)",
//               }}
//             >
//               <div className="flex items-center gap-3">
//                 <img
//                   src={sparkleIcon}
//                   className="w-10 h-10 bg-white rounded-full p-3"
//                 />
//                 <div>
//                   <p className="text-sm font-semibold">Upgrade Plan</p>
//                   <p className="text-xs text-white/80">
//                     More access to the best models
//                   </p>
//                 </div>
//               </div>
//               <button className="bg-white text-black rounded-lg py-2 text-sm font-medium">
//                 Upgrade Plan
//               </button>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <img src={userImage} className="w-9 h-9 rounded-full" />
//                 <div>
//                   <p className="text-sm font-medium">Nutan Sai Nandam</p>
//                   <p className="text-xs text-gray-400">
//                     nutansainandam.com
//                   </p>
//                 </div>
//               </div>
//               <img src={moreIcon} className="w-4 h-4 opacity-70" />
//             </div>
//           </div>
//         )}
//       </aside>
//     </>
//   );
// }

// function MenuItem({ icon, label, active, collapsed }) {
//   return (
//     <div
//       className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
//       ${active ? "bg-[#1F1F1F] text-white" : "text-gray-400 hover:bg-[#1F1F1F]"}`}
//     >
//       <img src={icon} className="w-4 h-4" />
//       {!collapsed && <span className="text-sm">{label}</span>}
//     </div>
//   );
// }

// function ChatItem({ icon, text, collapsed }) {
//   return (
//     <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#1A1A1A] text-gray-400">
//       <img src={icon} className="w-4 h-4" />
//       {!collapsed && <span className="text-sm truncate">{text}</span>}
//     </div>
//   );
// }

// import { useState } from "react";
// import logo from "../assets/logo/codegnan-logo.png";

// /* ICONS */
// import chatIcon from "../assets/icons/chat.svg";
// import vedioIcon from "../assets/icons/vedio.svg";
// import imageIcon from "../assets/icons/image.svg";
// import codeIcon from "../assets/icons/code.svg";
// import fileIcon from "../assets/icons/file.svg";
// import panelIcon from "../assets/icons/panel.png";
// import sparkleIcon from "../assets/icons/sparkle.png";
// import moreIcon from "../assets/icons/more.svg";
// import userImage from "../assets/user/user.png";

// export default function Sidebar({ tabOpen, setTabOpen, isTab }) {
//   const [collapsed, setCollapsed] = useState(false); // DESKTOP ONLY

//   return (
//     <>
//       {/* OVERLAY – TAB + MOBILE */}
//       {isTab && tabOpen && (
//         <div
//           className="fixed inset-0 bg-#292929/60 z-40"
//           onClick={() => setTabOpen(false)}
//         />
//       )}

//       <aside
//         className={`
//           h-screen bg-[#121212] text-white flex flex-col
//           transition-all duration-300 ease-in-out
//           ${
//             isTab
//               ? tabOpen
//                 ? "fixed left-0 top-0 z-50 w-[300px] sm:w-[280px]"
//                 : "hidden"
//               : collapsed
//               ? "w-[72px]"
//               : "w-[280px]"
//           }
//         `}
//       >
//         {/* TOP */}
//         <div className="flex-1 px-4 pt-4 flex flex-col gap-4 overflow-y-auto">

//           {/* LOGO + PANEL */}
//           <div className="flex items-center justify-between">
//             {!collapsed && <img src={logo} alt="logo" />}

//             <button
//               onClick={() =>
//                 isTab ? setTabOpen(prev => !prev) : setCollapsed(!collapsed)
//               }
//               className="w-8 h-8 bg-[#1A1A1A] rounded-md flex items-center justify-center"
//             >
//               <img src={panelIcon} alt="panel" />
//             </button>
//           </div>

//           {!collapsed && (
//             <p className="text-[11px] tracking-wider text-[#6B7280] uppercase">
//               General
//             </p>
//           )}

//           {/* MENU */}
//           <nav className="flex flex-col gap-1.5">
//             <MenuItem icon={chatIcon} label="AI Chat" active collapsed={collapsed} />
//             <MenuItem icon={vedioIcon} label="AI Video" collapsed={collapsed} />
//             <MenuItem icon={imageIcon} label="AI Image" collapsed={collapsed} />
//             <MenuItem icon={codeIcon} label="AI Development" collapsed={collapsed} />
//           </nav>

//           {!collapsed && (
//             <p className="mt-3 text-[11px] tracking-wider text-[#6B7280] uppercase">
//               Previous Chat
//             </p>
//           )}

//           <div className="flex flex-col gap-1.5">
//             <ChatItem icon={fileIcon} text="Describe the benefits for a..." collapsed={collapsed} />
//             <ChatItem icon={fileIcon} text="Generate a list current we..." collapsed={collapsed} />
//             <ChatItem icon={fileIcon} text="Condense the following se..." collapsed={collapsed} />
//             <ChatItem icon={fileIcon} text="Describe what post moder..." collapsed={collapsed} />
//           </div>
//         </div>

//         {/* BOTTOM */}
//         {!collapsed && (
//           <div className="px-4 pb-4 flex flex-col gap-4 shrink-0">
//             <div
//               className="rounded-xl p-4 flex flex-col gap-4 border border-white/10"
//               style={{
//                 background:
//                   "linear-gradient(74.72deg, #4956F4 47.29%, #2A328E 78.39%)",
//               }}
//             >
//               <div className="flex items-center gap-3">
//                 <img
//                   src={sparkleIcon}
//                   className="w-10 h-10 bg-white rounded-full p-3"
//                 />
//                 <div>
//                   <p className="text-sm font-semibold">Upgrade Plan</p>
//                   <p className="text-xs text-white/80">
//                     More access to the best models
//                   </p>
//                 </div>
//               </div>

//               <button className="bg-white text-black rounded-lg py-2 text-sm font-medium">
//                 Upgrade Plan
//               </button>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <img src={userImage} className="w-9 h-9 rounded-full" />
//                 <div>
//                   <p className="text-sm font-medium">Nutan Sai Nandam</p>
//                   <p className="text-xs text-gray-400">
//                     nutansainandam.com
//                   </p>
//                 </div>
//               </div>
//               <img src={moreIcon} className="w-4 h-4 opacity-70" />
//             </div>
//           </div>
//         )}
//       </aside>
//     </>
//   );
// }

// function MenuItem({ icon, label, active, collapsed }) {
//   return (
//     <div
//       className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
//       ${active ? "bg-[#1F1F1F] text-white" : "text-gray-400 hover:bg-[#1F1F1F]"}`}
//     >
//       <img src={icon} className="w-4 h-4" />
//       {!collapsed && <span className="text-sm">{label}</span>}
//     </div>
//   );
// }

// function ChatItem({ icon, text, collapsed }) {
//   return (
//     <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#1A1A1A] text-gray-400">
//       <img src={icon} className="w-4 h-4" />
//       {!collapsed && <span className="text-sm truncate">{text}</span>}
//     </div>
//   );
// }

import { useState } from "react";
import logo from "../assets/logo/codegnan-logo.png";

/* ICONS */
import chatIcon from "../assets/icons/chat.svg";
import vedioIcon from "../assets/icons/vedio.svg";
import imageIcon from "../assets/icons/image.svg";
import codeIcon from "../assets/icons/code.svg";
import fileIcon from "../assets/icons/file.svg";
import panelIcon from "../assets/icons/panel.png";
import sparkleIcon from "../assets/icons/sparkle.png";
import moreIcon from "../assets/icons/more.svg";
import userImage from "../assets/user/user.png";

export default function Sidebar({ tabOpen, setTabOpen, isTab }) {
  const [collapsed, setCollapsed] = useState(false); // DESKTOP ONLY

  return (
    <>
      {/* OVERLAY – TAB + MOBILE */}
      {isTab && tabOpen && (
        <div
          className="fixed inset-0 bg-#292929/60 z-40"
          onClick={() => setTabOpen(false)}
        />
      )}

      <aside
        className={`
          h-screen bg-[#121212] text-white flex flex-col
          transition-all duration-300 ease-in-out
          ${
            isTab
              ? tabOpen
                ? "fixed left-0 top-0 z-50 w-screen sm:w-[300px]"
                : "hidden"
              : collapsed
              ? "w-[72px]"
              : "w-[280px]"
          }
        `}
      >
        {/* TOP */}
        <div className="flex-1 px-4 pt-4 flex flex-col gap-4 overflow-y-auto">

          {/* LOGO + PANEL */}
          <div className="flex items-center justify-between">
            {!collapsed && <img src={logo} alt="logo" />}

            <button
              onClick={() =>
                isTab ? setTabOpen(prev => !prev) : setCollapsed(!collapsed)
              }
              className="w-8 h-8 bg-[#1A1A1A] rounded-md flex items-center justify-center"
            >
              <img src={panelIcon} alt="panel" />
            </button>
          </div>

          {!collapsed && (
            <p className="text-[11px] tracking-wider text-[#6B7280] uppercase">
              General
            </p>
          )}

          {/* MENU */}
          <nav className="flex flex-col gap-1.5">
            <MenuItem icon={chatIcon} label="AI Chat" active collapsed={collapsed} />
            <MenuItem icon={vedioIcon} label="AI Video" collapsed={collapsed} />
            <MenuItem icon={imageIcon} label="AI Image" collapsed={collapsed} />
            <MenuItem icon={codeIcon} label="AI Development" collapsed={collapsed} />
          </nav>

          {!collapsed && (
            <p className="mt-3 text-[11px] tracking-wider text-[#6B7280] uppercase">
              Previous Chat
            </p>
          )}

          <div className="flex flex-col gap-1.5">
            <ChatItem icon={fileIcon} text="Describe the benefits for a..." collapsed={collapsed} />
            <ChatItem icon={fileIcon} text="Generate a list current we..." collapsed={collapsed} />
            <ChatItem icon={fileIcon} text="Condense the following se..." collapsed={collapsed} />
            <ChatItem icon={fileIcon} text="Describe what post moder..." collapsed={collapsed} />
          </div>
        </div>

        {/* BOTTOM */}
        {!collapsed && (
          <div className="px-4 pb-4 flex flex-col gap-4 shrink-0">
            <div
              className="rounded-xl p-4 flex flex-col gap-4 border border-white/10"
              style={{
                background:
                  "linear-gradient(74.72deg, #4956F4 47.29%, #2A328E 78.39%)",
              }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={sparkleIcon}
                  className="w-10 h-10 bg-white rounded-full p-3"
                />
                <div>
                  <p className="text-sm font-semibold">Upgrade Plan</p>
                  <p className="text-xs text-white/80">
                    More access to the best models
                  </p>
                </div>
              </div>

              <button className="bg-white text-black rounded-lg py-2 text-sm font-medium">
                Upgrade Plan
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={userImage} className="w-9 h-9 rounded-full" />
                <div>
                  <p className="text-sm font-medium">Nutan Sai Nandam</p>
                  <p className="text-xs text-gray-400">
                    nutansainandam.com
                  </p>
                </div>
              </div>
              <img src={moreIcon} className="w-4 h-4 opacity-70" />
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

function MenuItem({ icon, label, active, collapsed }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
      ${active ? "bg-[#1F1F1F] text-white" : "text-gray-400 hover:bg-[#1F1F1F]"}`}
    >
      <img src={icon} className="w-4 h-4" />
      {!collapsed && <span className="text-sm">{label}</span>}
    </div>
  );
}

function ChatItem({ icon, text, collapsed }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#1A1A1A] text-gray-400">
      <img src={icon} className="w-4 h-4" />
      {!collapsed && <span className="text-sm truncate">{text}</span>}
    </div>
  );
}
