// import { Paperclip, Image } from "lucide-react";

// export default function PromptInput() {
//   return (
//     <div className="border-t border-[#2F2F2F] px-8 py-4">
//       <div className="bg-[#262626] rounded-xl px-4 py-3 flex items-center justify-between">
//         <span className="text-gray-500 text-sm">Ask me anything...</span>

//         <div className="flex items-center gap-4 text-gray-400">
//           <div className="flex items-center gap-1 text-sm">
//             <Paperclip size={16} />
//             Add Attachment
//           </div>
//           <div className="flex items-center gap-1 text-sm">
//             <Image size={16} />
//             Use Image
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import {
//   Plus,
//   Image as ImageIcon,
//   Globe,
//   ArrowUp,
// } from "lucide-react";

// export default function PromptInput() {
//   return (
//     <div className="px-8 pb-6">
//       <div className="bg-[#1F1F1F] border border-[#2A2A2A] rounded-2xl px-4 py-3">
//         {/* INPUT ROW */}
//         <div className="text-gray-400 text-sm mb-6">
//           Ask me anything...
//         </div>

//         {/* BOTTOM ROW */}
//         <div className="flex items-center justify-between">
//           {/* LEFT ICONS */}
//           <div className="flex items-center gap-4 text-gray-400 text-sm">
//             <div className="flex items-center gap-2 cursor-pointer hover:text-white">
//               <Plus size={16} />
//               <span>Add Attachment</span>
//             </div>

//             <div className="flex items-center gap-2 cursor-pointer hover:text-white">
//               <ImageIcon size={16} />
//               <span>Use Image</span>
//             </div>
//           </div>

//           {/* RIGHT CONTROLS */}
//           <div className="flex items-center gap-4">
//             {/* All Web */}
//             <button className="flex items-center gap-2 bg-[#2A2A2A] text-gray-300 px-3 py-1.5 rounded-lg text-sm hover:bg-[#333]">
//               <Globe size={14} />
//               <span>All Web</span>
//             </button>

//             {/* Counter */}
//             <span className="text-xs text-gray-500">0/1500</span>

//             {/* Send Button */}
//             <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200">
//               <ArrowUp size={18} className="text-black" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import {
//   Plus,
//   Image as ImageIcon,
//   Globe,
//   ArrowUp,
//   ChevronDown,
// } from "lucide-react";

// export default function PromptInput() {
//   return (
//     <div className="px-8 pb-6">
//       {/* OUTER CONTAINER */}
//       <div
//         className="
//           w-full
//           bg-[#212121]
//           border border-white/10
//           rounded-xl
//           px-5
//           py-4
//         "
//       >
//         {/* INPUT PLACEHOLDER */}
//         <div className="text-[#9CA3AF] text-sm mb-6">
//           Ask me anything...
//         </div>

//         {/* BOTTOM ROW */}
//         <div className="flex items-center justify-between">
//           {/* LEFT ACTIONS */}
//           <div className="flex items-center gap-6 text-[#9CA3AF] text-sm">
//             <div className="flex items-center gap-2 cursor-pointer hover:text-white">
//               <Plus size={16} />
//               <span>Add Attachment</span>
//             </div>

//             <div className="flex items-center gap-2 cursor-pointer hover:text-white">
//               <ImageIcon size={16} />
//               <span>Use Image</span>
//             </div>
//           </div>

//           {/* RIGHT ACTIONS */}
//           <div className="flex items-center gap-4">
//             {/* ALL WEB */}
//             <button
//               className="
//                 flex items-center gap-2
//                 bg-[#2A2A2A]
//                 text-[#E5E7EB]
//                 px-3
//                 py-1.5
//                 rounded-lg
//                 text-sm
//                 border border-white/10
//               "
//             >
//               <Globe size={14} />
//               <span>All Web</span>
//               <ChevronDown size={14} />
//             </button>

//             {/* COUNTER */}
//             <span className="text-xs text-[#6B7280]">
//               0/1500
//             </span>

//             {/* SEND BUTTON */}
//             <button
//               className="
//                 w-9 h-9
//                 bg-white
//                 rounded-lg
//                 flex items-center justify-center
//                 hover:bg-gray-200
//               "
//             >
//               <ArrowUp size={18} className="text-black" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import circlePlus from "../assets/icons/circleplus.png";
// import { Image as ImageIcon, Globe, ChevronDown, ArrowRight } from "lucide-react";

// export default function PromptInput() {
//   return (
//     <div className="w-full max-w-[1500px] mx-auto px-6">
      
//       {/* INPUT CONTAINER */}
//       <div className="bg-[#212121] border border-white/10 rounded-xl px-6 py-4 flex flex-col gap-4">

//         {/* TOP */}
//         <div className="flex items-center justify-between">
//           <span className="text-sm text-gray-400">
//             Ask me anything...
//           </span>

//           <button className="flex items-center gap-2 bg-[#2A2A2A] border border-white/10 px-3 py-1 rounded-full text-xs text-gray-300">
//             <Globe size={14} />
//             All Web
//             <ChevronDown size={14} />
//           </button>
//         </div>

//         {/* BOTTOM */}
//         <div className="flex items-center justify-between">

//           {/* LEFT ACTIONS */}
//           <div className="flex items-center gap-5 text-sm text-gray-400">
//             <button className="flex items-center gap-2 hover:text-white">
//               <img src={circlePlus} alt="add" className="w-4 h-4" />
//               Add Attachment
//             </button>

//             <button className="flex items-center gap-2 hover:text-white">
//               <ImageIcon size={16} />
//               Use Image
//             </button>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-3">
//             <span className="text-xs text-gray-400">0/1500</span>

//             <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white">
//               <ArrowRight size={16} className="text-black" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* DISCLAIMER */}
//      <p className="text-xs text-gray-500 text-center mt-2 leading-relaxed">
//   Centra may display inaccurate info, so please double check the response.{" "}
//   <span className="underline text-gray-300 cursor-pointer">
//     Your Privacy & Centra AI
//   </span>
// </p>

//     </div>
//   );
// }

// import circlePlus from "../assets/icons/circleplus.png";
// import { Image as ImageIcon, Globe, ChevronDown, ArrowRight } from "lucide-react";

// export default function PromptInput() {
//   return (
//     <div className="w-full max-w-[1500px] mx-auto px-6 mt-12 pb-5">
      
//       {/* INPUT CONTAINER */}
//       <div
//         className="
//           bg-[#212121]
//           border border-white/10
//           rounded-xl
//           px-8
//           py-6
//           flex
//           flex-col
//           gap-6
//         "
//       >
//         {/* TOP ROW */}
//         <div className="flex items-center justify-between">
//           <span className="text-[15px] text-gray-400">
//             Ask me anything...
//           </span>

//           <button
//             className="
//               flex
//               items-center
//               gap-2
//               bg-[#2A2A2A]
//               border border-white/10
//               px-4
//               py-1.5
//               rounded-full
//               text-xs
//               text-gray-300
//             "
//           >
//             <Globe size={14} />
//             All Web
//             <ChevronDown size={14} />
//           </button>
//         </div>

//         {/* BOTTOM ROW */}
//         <div className="flex items-center justify-between">
          
//           {/* LEFT ACTIONS */}
//           <div className="flex items-center gap-6 text-sm text-gray-400">
//             <button className="flex items-center gap-2 hover:text-white">
//               <img src={circlePlus} alt="add" className="w-4 h-4" />
//               Add Attachment
//             </button>

//             <button className="flex items-center gap-2 hover:text-white">
//               <ImageIcon size={16} />
//               Use Image
//             </button>
//           </div>

//           {/* RIGHT ACTIONS */}
//           <div className="flex items-center gap-4">
//             <span className="text-xs text-gray-400">0/1500</span>

//             <button
//               className="
//                 w-9
//                 h-9
//                 flex
//                 items-center
//                 justify-center
//                 rounded-md
//                 bg-white
//               "
//             >
//               <ArrowRight size={16} className="text-black" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* DISCLAIMER */}
//       <p className="text-xs text-gray-500 text-center mt-7 leading-relaxed">
//         Centra may display inaccurate info, so please double check the response.{" "}
//         <span className="underline text-gray-300 cursor-pointer">
//           Your Privacy & Centra AI
//         </span>
//       </p>
//     </div>
//   );
// }

// import circlePlus from "../assets/icons/circleplus.png";
// import { Image as ImageIcon, Globe, ChevronDown, ArrowRight } from "lucide-react";

// export default function PromptInput() {
//   return (
//     <div className="w-full max-w-[1080px] xl:max-w-[1500px] mx-auto px-6 mt-8 pb-5">
      
//       {/* INPUT CONTAINER */}
//       <div
//         className="
//           bg-[#212121]
//           border border-white/10
//           rounded-xl
//           px-6 xl:px-8
//           py-4 xl:py-5
//           flex
//           flex-col
//           gap-5
//         "
//       >
//         {/* TOP ROW */}
//         <div className="flex items-center justify-between">
//           <span className="text-[13px] xl:text-[14px] text-white/80">
//             Ask me anything...
//           </span>

//           <button
//             className="
//               flex items-center gap-1.5
//               bg-[#2F2F2F]
//               border border-white/10
//               px-3
//               py-1
//               rounded-full
//               text-[11px] xl:text-[12px]
//               text-white/85
//             "
//           >
//             <Globe size={13} />
//             All Web
//             <ChevronDown size={13} />
//           </button>
//         </div>

//         {/* BOTTOM ROW */}
//         <div className="flex items-center justify-between">
          
//           {/* LEFT ACTIONS */}
//           <div className="flex items-center gap-5 text-[11px] xl:text-[12px] text-white/65">
//             <button className="flex items-center gap-2 hover:text-white">
//               <img src={circlePlus} alt="add" className="w-4 h-4" />
//               Add Attachment
//             </button>

//             <button className="flex items-center gap-2 hover:text-white">
//               <ImageIcon size={14} />
//               Use Image
//             </button>
//           </div>

//           {/* RIGHT ACTIONS */}
//           <div className="flex items-center gap-3">
//             <span className="text-[11px] text-white/60">0/1500</span>

//             <button
//               className="
//                 w-8 h-8
//                 flex items-center justify-center
//                 rounded-md
//                 bg-white
//               "
//             >
//               <ArrowRight size={15} className="text-black" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* DISCLAIMER – UNCHANGED */}
//       <p className="text-xs text-gray-500 text-center mt-4  leading-relaxed">
//         Centra may display inaccurate info, so please double check the response.{" "}
//         <span className="underline text-gray-300 cursor-pointer">
//           Your Privacy & Centra AI
//         </span>
//       </p>
//     </div>
//   );
// }
// import circlePlus from "../assets/icons/circleplus.png";
// import { Image as ImageIcon, Globe, ChevronDown, ArrowRight } from "lucide-react";

// export default function PromptInput() {
//   return (
//     // <div className="w-full max-w-[1080px] xl:max-w-[1500px] mx-auto px-6 mt-12 xl:mt-14">
//     <div className="
//   w-full
//   max-w-[720px]        /* TAB */
//   md:max-w-[900px]     /* DESKTOP */
//   xl:max-w-[1080px]    /* LARGE */
//   mx-auto
//   px-6
//   mt-8 
//   md:mt-10
//    xl:mt-14

// ">

      
//       {/* INPUT CONTAINER */}
//       <div
//         className="
//           bg-[#212121]
//           border border-white/10
//           rounded-xl
//           px-6 xl:px-8
//           py-4
//           min-h-[120px] xl:min-h-[130px]
//           flex
//           flex-col
//           justify-between
//         "
//       >
//         {/* TOP ROW */}
//         <div className="flex items-start justify-between">
//           <span className="text-[13px] xl:text-[14px] text-white/80">
//             Ask me anything...
//           </span>

//           <button
//             className="
//               flex items-center gap-1.5
//               bg-[#2F2F2F]
//               border border-white/10
//               px-3 py-1
//               rounded-full
//               text-[11px] xl:text-[12px]
//               text-white/85
//             "
//           >
//             <Globe size={13} />
//             All Web
//             <ChevronDown size={13} />
//           </button>
//         </div>

//         {/* BOTTOM ROW */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-5 text-[11px] xl:text-[12px] text-white/65">
//             <button className="flex items-center gap-2 hover:text-white">
//               <img src={circlePlus} alt="add" className="w-4 h-4" />
//               Add Attachment
//             </button>

//             <button className="flex items-center gap-2 hover:text-white">
//               <ImageIcon size={14} />
//               Use Image
//             </button>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="text-[11px] text-white/60">0/1500</span>

//             <button className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
//               <ArrowRight size={15} className="text-black" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* DISCLAIMER */}
//       <p className="text-xs text-gray-500 text-center leading-relaxed mt-4 lg:mt-6">
//         Centra may display inaccurate info, so please double check the response.{" "}
//         <span className="underline text-gray-300 cursor-pointer">
//           Your Privacy & Centtra AI
//         </span>
//       </p>
//     </div>
//   );
// }

// import circlePlus from "../assets/icons/circleplus.png";
// import { Image as ImageIcon, Globe, ChevronDown, ArrowRight } from "lucide-react";

// export default function PromptInput({ isMobile }) {
//   return (
//     <>
//       {/* =====================================================
//           MOBILE PROMPT (FIXED BOTTOM)
//       ===================================================== */}
//       <div
//         className={`
//           ${isMobile ? "fixed" : "hidden"}
//           bottom-0 left-0 right-0 z-40
//           bg-[#292929]
//           px-4 pb-4
//         `}
//       >
//         <div
//           className="
//             bg-[#212121]
//             border border-white/10
//             rounded-xl
//             px-3 py-3
//             flex items-center gap-3
//           "
//         >
//           {/* PLUS */}
//           <button className="w-9 h-9 rounded-md bg-[#2F2F2F] flex items-center justify-center">
//             <img src={circlePlus} className="w-4 h-4" />
//           </button>

//           {/* INPUT PLACEHOLDER */}
//           <span className="flex-1 text-sm text-white/70 truncate">
//             Ask me anything...
//           </span>

//           {/* SEND */}
//           <button className="w-9 h-9 rounded-md bg-white flex items-center justify-center">
//             <ArrowRight size={16} className="text-black" />
//           </button>
//         </div>
//       </div>

//       {/* =====================================================
//           DESKTOP + TAB PROMPT (UNCHANGED)
//       ===================================================== */}
//       <div
//         className={`
//           ${isMobile ? "hidden" : "block"}
//           w-full
//           max-w-[720px]
//           md:max-w-[900px]
//           xl:max-w-[1080px]
//           mx-auto
//           px-6
//           mt-8
//           md:mt-10
//           xl:mt-14
//         `}
//       >
//         <div
//           className="
//             bg-[#212121]
//             border border-white/10
//             rounded-xl
//             px-6 xl:px-8
//             py-4
//             min-h-[120px] xl:min-h-[130px]
//             flex flex-col justify-between
//           "
//         >
//           {/* TOP ROW */}
//           <div className="flex items-start justify-between">
//             <span className="text-[13px] xl:text-[14px] text-white/80">
//               Ask me anything...
//             </span>

//             <button
//               className="
//                 flex items-center gap-1.5
//                 bg-[#2F2F2F]
//                 border border-white/10
//                 px-3 py-1
//                 rounded-full
//                 text-[11px] xl:text-[12px]
//                 text-white/85
//               "
//             >
//               <Globe size={13} />
//               All Web
//               <ChevronDown size={13} />
//             </button>
//           </div>

//           {/* BOTTOM ROW */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-5 text-[11px] xl:text-[12px] text-white/65">
//               <button className="flex items-center gap-2 hover:text-white">
//                 <img src={circlePlus} className="w-4 h-4" />
//                 Add Attachment
//               </button>

//               <button className="flex items-center gap-2 hover:text-white">
//                 <ImageIcon size={14} />
//                 Use Image
//               </button>
//             </div>

//             <div className="flex items-center gap-3">
//               <span className="text-[11px] text-white/60">0/1500</span>
//               <button className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
//                 <ArrowRight size={15} className="text-black" />
//               </button>
//             </div>
//           </div>
//         </div>

//         <p className="text-xs text-gray-500 text-center mt-4 lg:mt-6">
//           Centra may display inaccurate info, so please double check the response.{" "}
//           <span className="underline text-gray-300 cursor-pointer">
//             Your Privacy & Centtra AI
//           </span>
//         </p>
//       </div>
//     </>
//   );
// }
// import circlePlus from "../assets/icons/circleplus.png";
// import { Image as ImageIcon, Globe, ChevronDown, ArrowRight } from "lucide-react";

// export default function PromptInput({ isMobile }) {
//   return (
//     <div
//       className={`
//         w-full
//         ${isMobile ? "px-4 mt-6" : "max-w-[720px] md:max-w-[900px] xl:max-w-[1080px] mx-auto px-6 mt-8 md:mt-10 xl:mt-14"}
//       `}
//     >
//       {/* INPUT CONTAINER */}
//       <div
//         className={`
//           bg-[#212121]
//           border border-white/10
//           rounded-xl
//           ${isMobile ? "px-3 py-3" : "px-6 xl:px-8 py-4 min-h-[120px] xl:min-h-[130px]"}
//           flex flex-col justify-between
//         `}
//       >
//         {/* ================= MOBILE ================= */}
//         {isMobile && (
//           <div className="flex items-center gap-3">
//             <button className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center">
//               <img src={circlePlus} className="w-4 h-4" />
//             </button>

//             <div className="flex-1 text-sm text-white/70">
//               Ask me anything...
//             </div>

//             <span className="text-xs text-white/60">0/1500</span>

//             <button className="w-9 h-9 rounded-md bg-white flex items-center justify-center">
//               <ArrowRight size={16} className="text-black" />
//             </button>
//           </div>
//         )}

//         {/* ================= DESKTOP / TAB ================= */}
//         {!isMobile && (
//           <>
//             {/* TOP ROW */}
//             <div className="flex items-start justify-between">
//               <span className="text-[13px] xl:text-[14px] text-white/80">
//                 Ask me anything...
//               </span>

//               <button
//                 className="
//                   flex items-center gap-1.5
//                   bg-[#2F2F2F]
//                   border border-white/10
//                   px-3 py-1
//                   rounded-full
//                   text-[11px] xl:text-[12px]
//                   text-white/85
//                 "
//               >
//                 <Globe size={13} />
//                 All Web
//                 <ChevronDown size={13} />
//               </button>
//             </div>

//             {/* BOTTOM ROW */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-5 text-[11px] xl:text-[12px] text-white/65">
//                 <button className="flex items-center gap-2 hover:text-white">
//                   <img src={circlePlus} className="w-4 h-4" />
//                   Add Attachment
//                 </button>

//                 <button className="flex items-center gap-2 hover:text-white">
//                   <ImageIcon size={14} />
//                   Use Image
//                 </button>
//               </div>

//               <div className="flex items-center gap-3">
//                 <span className="text-[11px] text-white/60">0/1500</span>
//                 <button className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
//                   <ArrowRight size={15} className="text-black" />
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>

//       {/* DISCLAIMER */}
//       <p className="text-xs text-gray-500 text-center leading-relaxed mt-4 lg:mt-6">
//         Centra may display inaccurate info, so please double check the response.{" "}
//         <span className="underline text-gray-300 cursor-pointer">
//           Your Privacy & Centra AI
//         </span>
//       </p>
//     </div>
//   );
// }

import circlePlus from "../assets/icons/circleplus.png";
import { Image as ImageIcon, Globe, ChevronDown, ArrowRight } from "lucide-react";

export default function PromptInput() {
  return (
    <div className="w-full">
      {/* ================= DESKTOP + TAB ================= */}
      <div className="hidden md:block">
        <div
          className="
            bg-[#212121]
            border border-white/10
            rounded-xl
            px-6 xl:px-8
            py-4
            min-h-[120px]
            flex flex-col justify-between
          "
        >
          {/* TOP */}
          <div className="flex items-start justify-between">
            <span className="text-[13px] text-white/80">
              Ask me anything...
            </span>

            <button
              className="
                flex items-center gap-1.5
                bg-[#2F2F2F]
                border border-white/10
                px-3 py-1
                rounded-full
                text-[11px]
                text-white/85
              "
            >
              <Globe size={13} />
              All Web
              <ChevronDown size={13} />
            </button>
          </div>

          {/* BOTTOM */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5 text-[11px] text-white/65">
              <button className="flex items-center gap-2">
                <img src={circlePlus} className="w-4 h-4" />
                Add Attachment
              </button>

              <button className="flex items-center gap-2">
                <ImageIcon size={14} />
                Use Image
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] text-white/60">0/1500</span>
              <button className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
                <ArrowRight size={15} className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE (FIGMA EXACT) ================= */}
<div className="md:hidden flex items-end gap-3">
  
  {/* PLUS — OUTSIDE INPUT */}
  <button className="w-[60px] h-[60px] rounded-xl bg-[#212121] border border-white/10 flex items-center justify-center shrink-0">
              <img src={circlePlus} className="w-5 h-5" />
            </button>

  {/* INPUT BAR */}
  <div
    className="
      flex-1
      bg-[#212121]
      border border-white/10
      rounded-xl
      px-4
      py-3
      flex items-center gap-3
    "
  >
    {/* PLACEHOLDER */}
    <span className="flex-1 text-[13px] text-white/70 truncate">
      Ask me anything...
    </span>

    {/* COUNT */}
    <span className="text-[11px] text-white/50">
      0/1500
    </span>

    {/* SEND */}
    <button
      className="
        w-9 h-9
        rounded-md
        bg-white
        flex items-center justify-center
        shrink-0
      "
    >
      <ArrowRight size={15} className="text-black" />
    </button>
  </div>
</div>


      {/* DISCLAIMER */}
      <p className="text-xs text-gray-500 text-center mt-3 px-4">
        Centra may display inaccurate info, so please double check the response.{" "}
        <span className="underline text-gray-300 cursor-pointer">
          Your Privacy & Centtra AI
        </span>
      </p>
    </div>
  );
}
