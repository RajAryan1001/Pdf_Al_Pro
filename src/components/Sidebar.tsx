import { FileText, Clock, BarChart3, FolderOpen, Settings, Sparkles, User  } from "lucide-react";

const navItems = [
  { icon: FileText, label: "Documents", active: true },
  { icon: Clock, label: "History", active: false },
  { icon: BarChart3, label: "Analysis", active: false },
  { icon: FolderOpen, label: "Library", active: false },
];

const Sidebar = () => {
  return (
    <div className="w-[200px] flex flex-col bg-sidebar-bg border-r border-border h-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
           <Sparkles className="w-8 h-8 p-2 bg-blue-600 text-white rounded-[25%]" />
        </div>
        <div>
          <div className="text-sm font-bold text-foreground">PDF AI PRO</div>
          <div className="text-[10px] text-muted-foreground tracking-widest uppercase">Workspace</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 mt-4 px-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
              item.active
                ? "bg-[#0b1f3a] text-blue-700 font-medium rounded-[25%]"
                : "text-sidebar-fg hover:bg-sidebar-hover"
            }`}
          >
            <item.icon className="w-[18px] h-[18px]" />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-fg hover:bg-sidebar-hover transition-colors">
          <Settings className="w-[18px] h-[18px]" />
          Settings
        </button>
        <div className="flex items-center gap-3 px-3 py-3 mt-2">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground">
            AM
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">Alex Miller</div>
            <div className="text-[11px] text-muted-foreground">Professional Plan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
