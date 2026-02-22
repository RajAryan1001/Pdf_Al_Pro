import Sidebar from "@/components/Sidebar";
import Toolbar from "@/components/Toolbar";
import DocumentViewer from "@/components/DocumentViewer";
import ChatPanel from "@/components/ChatPanel";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden">
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
};

export default Index;
