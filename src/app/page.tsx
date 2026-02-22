// export default function Home() {
//   return <div>Hello World</div>;
// }

// app/page.tsx
"use client";

import Sidebar from "@/components/Sidebar";
import Toolbar from "@/components/Toolbar";
import DocumentViewer from "@/components/DocumentViewer";
import ChatPanel from "@/components/ChatPanel";

export default function Home() {
  return (
    <div className="flex h-screen  overflow-hidden bg-[#05081c] text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Toolbar />
        <div className="flex flex-1 overflow-hidden">
          <DocumentViewer />
          <ChatPanel />
        </div>
      </div>
    </div>
  );
}
