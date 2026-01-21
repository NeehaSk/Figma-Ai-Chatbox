
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
