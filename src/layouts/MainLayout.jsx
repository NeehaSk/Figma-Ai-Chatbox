// // import Sidebar from "../components/Sidebar";
// // import TopBar from "../components/TopBar";

// // export default function MainLayout({ children }) {
// //   return (
// //     <div className="flex h-screen bg-[#1C1C1C] text-white">
// //       <Sidebar />
// //       <div className="flex-1 flex flex-col">
// //         <TopBar />
// //         <main className="flex-1 p-8">{children}</main>
// //       </div>
// //     </div>
// //   );
// // }

// // import Sidebar from "../components/Sidebar";
// // import TopBar from "../components/TopBar";

// // export default function MainLayout({ children }) {
// //   return (
// //     <div className="flex h-screen bg-[#292929] text-white">
// //       <Sidebar />

// //       <div className="flex flex-col flex-1">
// //   <TopBar />
// //   <main className="flex-1">{children}</main>
// // </div>

// //     </div>
// //   );
// // }

// // import Sidebar from "../components/Sidebar";
// // import TopBar from "../components/TopBar";

// // export default function MainLayout({ children }) {
// //   return (
// //     <div className="flex w-full min-h-screen">
      
// //       {/* SIDEBAR */}
// //       <Sidebar />

// //       {/* RIGHT SIDE (TopBar + Page Content) */}
// //       <div className="flex flex-col flex-1 min-w-0">
        
// //         {/* TOP BAR */}
// //         <TopBar />

// //         {/* MAIN CONTENT */}
// //         <main className="flex-1 w-full overflow-y-auto">
// //           {children}
// //         </main>

// //       </div>
// //     </div>
// //   );
// // }


// // import Sidebar from "../components/Sidebar";
// // import TopBar from "../components/TopBar";

// // export default function MainLayout({ children }) {
// //   return (
// //     <div className="flex w-full h-screen overflow-hidden">
// //       <Sidebar />

// //       <div className="flex flex-col flex-1 overflow-hidden">
// //         <TopBar />
// //         <main className="flex-1 overflow-y-auto">
// //           {children}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }
// // import { useEffect, useState } from "react";
// // import Sidebar from "../components/Sidebar";
// // import TopBar from "../components/TopBar";

// // export default function MainLayout({ children }) {
// //   const [isTab, setIsTab] = useState(false);
// //   const [tabOpen, setTabOpen] = useState(false);

// //   useEffect(() => {
// //     const check = () => {
// //       const tab = window.innerWidth >= 768 && window.innerWidth < 1024;
// //       setIsTab(tab);
// //       if (!tab) setTabOpen(false);
// //     };
// //     check();
// //     window.addEventListener("resize", check);
// //     return () => window.removeEventListener("resize", check);
// //   }, []);

// //   return (
// //     <div className="flex w-full h-screen overflow-hidden">
// //       <Sidebar
// //         isTab={isTab}
// //         tabOpen={tabOpen}
// //         onClose={() => setTabOpen(false)}
// //       />

// //       <div className="flex flex-col flex-1">
// //         <TopBar
// //           isTab={isTab}
// //           onPanelClick={() => setTabOpen(true)}
// //         />

// //         <main
// //           className={`flex-1 overflow-y-auto transition-opacity
// //             ${isTab && tabOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
// //           `}
// //         >
// //           {children}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// // import { useEffect, useState } from "react";
// // import Sidebar from "../components/Sidebar";
// // import TopBar from "../components/TopBar";

// // export default function MainLayout({ children }) {
// //   const [tabOpen, setTabOpen] = useState(false);
// //   const [isTab, setIsTab] = useState(false);

// //   // Detect TAB only
// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsTab(window.innerWidth >= 768 && window.innerWidth < 1024);
// //       if (window.innerWidth >= 1024) {
// //         setTabOpen(false); // reset when leaving tab
// //       }
// //     };

// //     handleResize();
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   return (
// //     <div className="flex w-full h-screen overflow-hidden">
// //       <Sidebar
// //         tabOpen={tabOpen}
// //         setTabOpen={setTabOpen}
// //         isTab={isTab}
// //       />

// //       {/* <div className="flex flex-col flex-1 overflow-hidden"> */}
// //       <div
// //   className={`flex flex-col flex-1 overflow-hidden ${
// //     isTab && tabOpen ? "hidden" : "block"
// //   }`}
// // >

// //         <TopBar
// //           isTab={isTab}
// //           onPanelClick={() => setTabOpen(prev => !prev)}
// //         />

// //         {/* HIDE MAIN CONTENT WHEN TAB SIDEBAR IS OPEN */}
// //         <main
// //           className={`flex-1 overflow-y-auto transition-opacity duration-300
// //             ${isTab && tabOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
// //           `}
// //         >
// //           {children}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";
// import TopBar from "../components/TopBar";

// export default function MainLayout({ children }) {
//   const [tabOpen, setTabOpen] = useState(false);
//   const [isTab, setIsTab] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsTab(window.innerWidth >= 768 && window.innerWidth < 1024);
//       if (window.innerWidth >= 1024) setTabOpen(false);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="flex w-full h-screen overflow-hidden bg-[#292929]">
      
//       <Sidebar
//         isTab={isTab}
//         tabOpen={tabOpen}
//         setTabOpen={setTabOpen}
//       />

//       <div className="flex flex-col flex-1 overflow-hidden">
        
//         {/* TOPBAR NEVER DISAPPEARS */}
//         <TopBar
//           isTab={isTab}
//           onPanelClick={() => setTabOpen(prev => !prev)}
//         />

//         {/* MAIN CONTENT */}
//         <main
//           className={`
//             flex-1 overflow-y-auto transition-opacity duration-300
//             ${isTab && tabOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
//           `}
//         >
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// }

// // import panelIcon from "../assets/icons/panel.png";
// // import sparkleIcon from "../assets/icons/app-title.png";
// // import arrowDownIcon from "../assets/icons/arrow-down.png";
// // import newChatIcon from "../assets/icons/New Chat Icon.png";

// // export default function TopBar({ isTab, onPanelClick }) {
// //   return (
// //     <header className="h-[60px] md:h-[68px] bg-[#111] border-b border-white/10 px-4 flex items-center justify-between">
      
// //       {/* PANEL ICON – TAB + MOBILE */}
// //       {isTab && (
// //         <button
// //           onClick={onPanelClick}
// //           className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center"
// //         >
// //           <img src={panelIcon} alt="panel" className="w-4 h-4" />
// //         </button>
// //       )}

// //       <div className="flex items-center gap-3 ml-auto">
// //         <button
// //           className="
// //             h-[36px] px-4 flex items-center gap-2 rounded-lg
// //             bg-[#282828] border border-[#FFFFFF1A]
// //             text-white text-sm font-semibold
// //             hover:bg-[#FFFFFF26] transition
// //           "
// //         >
// //           <img src={sparkleIcon} className="w-4 h-4" />
// //           <span>SuperAI 2.0</span>
// //           <img src={arrowDownIcon} className="w-4 h-4" />
// //         </button>

// //         <button
// //           className="
// //             h-[36px] px-4 flex items-center gap-2
// //             bg-white text-black rounded-lg font-semibold
// //             hover:bg-gray-200 transition whitespace-nowrap
// //           "
// //         >
// //           <img src={newChatIcon} className="w-4 h-4" />
// //           New Chat
// //         </button>
// //       </div>
// //     </header>
// //   );
// // }
// import { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";
// import TopBar from "../components/TopBar";

// export default function MainLayout({ children }) {
//   const [mode, setMode] = useState("desktop"); // mobile | tab | desktop
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const w = window.innerWidth;
//       if (w < 768) setMode("mobile");
//       else if (w < 1024) setMode("tab");
//       else setMode("desktop");
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // desktop sidebar always visible
//   const isSidebarOpen = mode === "desktop" ? true : sidebarOpen;


// return (
//   <div className="flex h-screen bg-[#292929] overflow-hidden">
//     {/* SIDEBAR */}
//     <Sidebar
//       isTab={mode === "tab" || mode === "mobile"}
//       tabOpen={isSidebarOpen}
//       setTabOpen={setSidebarOpen}
//     />

//     {/* RIGHT SIDE */}
//     <div className="flex flex-col flex-1 overflow-hidden">
//       {/* <TopBar
//         isTab={mode === "tab" || mode === "mobile"}
//         onPanelClick={() => setSidebarOpen(prev => !prev)}
//       /> */}
// <TopBar
//   isMobile={mode === "mobile"}
//   isTab={mode === "tab"}
//   onPanelClick={() => setSidebarOpen(prev => !prev)}
// />

//       <main
//         className={`
//           flex-1 overflow-y-auto transition-opacity duration-300
//           ${isSidebarOpen && (mode === "tab" || mode === "mobile")
//             ? "opacity-0 pointer-events-none"
//             : "opacity-100"}
//         `}
//       >
//         {children}
//       </main>
//     </div>
//   </div>
// );
// }
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

export default function MainLayout({ children }) {
  const [mode, setMode] = useState("desktop"); // mobile | tab | desktop
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) setMode("mobile");
      else if (w < 1024) setMode("tab");
      else setMode("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSidebarOpen = mode === "desktop" ? true : sidebarOpen;

  return (
    <div className="flex h-screen bg-[#292929] overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar
        isTab={mode === "tab" || mode === "mobile"}
        tabOpen={isSidebarOpen}
        setTabOpen={setSidebarOpen}
      />

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar
          isMobile={mode === "mobile"}
          isTab={mode === "tab"}
          onPanelClick={() => setSidebarOpen(prev => !prev)}
        />

        <main
          className={`
            flex-1 overflow-y-auto transition-opacity duration-300
            ${isSidebarOpen && (mode === "tab" || mode === "mobile")
              ? "opacity-0 pointer-events-none"
              : "opacity-100"}
          `}
        >
          {/* 🔴 IMPORTANT: pass isMobile */}
          {typeof children === "function"
            ? children({ isMobile: mode === "mobile" })
            : children}
        </main>
      </div>
    </div>
  );
}
