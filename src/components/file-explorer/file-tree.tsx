"use client";

import { ChevronRight, ChevronDown, FileIcon, FolderIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FileNode {
  id: string;
  name: string;
  type: "file" | "folder";
  content?: {
    title: string;
    description: string;
    url: string;
  };
  children?: FileNode[];
}

interface FileTreeProps {
  data: FileNode[];
  onSelect: (node: FileNode) => void;
}

export function FileTree({ data, onSelect }: FileTreeProps) {
  return (
    <div className="p-2">
      {data.map((node) => (
        <FileTreeNode key={node.id} node={node} onSelect={onSelect} />
      ))}
    </div>
  );
}

function FileTreeNode({ node, onSelect }: { node: FileNode; onSelect: (node: FileNode) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (node.type === "folder") {
      setIsExpanded(!isExpanded);
    } else {
      onSelect(node);
    }
  };

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-2 p-1.5 rounded-md cursor-pointer hover:bg-muted/50",
          "text-sm text-muted-foreground hover:text-foreground"
        )}
        onClick={handleClick}
      >
        {node.type === "folder" ? (
          <>
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 shrink-0" />
            ) : (
              <ChevronRight className="h-4 w-4 shrink-0" />
            )}
            <FolderIcon className="h-4 w-4 shrink-0 text-blue-500" />
          </>
        ) : (
          <>
            <span className="w-4" />
            <FileIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          </>
        )}
        <span className="truncate">{node.name}</span>
      </div>
      {node.type === "folder" && isExpanded && node.children && (
        <div className="ml-4 border-l pl-2 border-border">
          {node.children.map((child) => (
            <FileTreeNode key={child.id} node={child} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}