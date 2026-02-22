import { Minus, Plus, Search, Download, TableProperties, MoreVertical, X } from "lucide-react";

const Toolbar = () => {
  return (
    <div className="h-12 bg-toolbar-bg border-b border-border flex items-center justify-between px-4">
      {/* Left: file info */}
      <div className="flex items-center gap-3">
        <span className="text-toolbar-fg text-sm">📄</span>
        <span className="text-sm font-medium text-foreground">Quarterly Financial Report.pdf</span>
        <div className="flex items-center gap-1 ml-2">
          <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs text-muted-foreground px-1">125%</span>
          <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex items-center gap-1.5 ml-3 text-xs text-muted-foreground">
          <span>Page</span>
          <span className="bg-muted px-2 py-0.5 rounded text-foreground font-medium">12</span>
          <span>of 45</span>
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-2">
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Search className="w-4 h-4" />
        </button>
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Download className="w-4 h-4" />
        </button>
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <TableProperties className="w-4 h-4" />
        </button>
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <MoreVertical className="w-4 h-4" />
        </button>
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
