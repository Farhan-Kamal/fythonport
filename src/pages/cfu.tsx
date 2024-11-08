"use client";
import { useRouter } from 'next/router';
import { useState } from "react";
import { FileTree } from "@/components/file-explorer/file-tree";
import { ContentView } from "@/components/file-explorer/content-view";

const INITIAL_DATA = {
  title: "File Directory",
  description: "Select a file from the explorer to view its content.",
  url: "",
};

const FILE_TREE_DATA = [
  {
    id: "1",
    name: "Check For Understanding",
    type: "folder" as const,
    children: [
      {
        id: "2",
        name: "Cfu #1",
        type: "file" as const,
        content: {
          title: "CFU #1",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "3",
        name: "Cfu #2",
        type: "file" as const,
        content: {
          title: "CFU #2",
          description: "Like the first CFU, We were just using what we know so far. This CFU had 5 tasks which was to ask the user for first and last name then ask for their age then how long they have been eating (Strange question I know), and print out all the info they gave us into a creative format using only one print statement. This overall required us to use our previous knowledge on formatting print outputs.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_1.py",
        },
      },
      {
        id: "4",
        name: "Cfu #3",
        type: "file" as const,
        content: {
          title: "CFU #3",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "5",
        name: "Cfu #4",
        type: "file" as const,
        content: {
          title: "CFU #4",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "6",
        name: "Cfu #5",
        type: "file" as const,
        content: {
          title: "CFU #5",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "7",
        name: "Cfu #6",
        type: "file" as const,
        content: {
          title: "CFU #6",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "8",
        name: "Cfu #7",
        type: "file" as const,
        content: {
          title: "CFU #7",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "9",
        name: "Cfu #8",
        type: "file" as const,
        content: {
          title: "CFU #8",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "10",
        name: "Cfu #9",
        type: "file" as const,
        content: {
          title: "CFU #9",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "11",
        name: "Cfu #10",
        type: "file" as const,
        content: {
          title: "CFU #10",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "12",
        name: "Cfu #11",
        type: "file" as const,
        content: {
          title: "CFU #11",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "13",
        name: "Cfu #12",
        type: "file" as const,
        content: {
          title: "CFU #12",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "14",
        name: "Cfu #13",
        type: "file" as const,
        content: {
          title: "CFU #13",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "15",
        name: "Cfu #14",
        type: "file" as const,
        content: {
          title: "CFU #14",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "16",
        name: "Cfu #15",
        type: "file" as const,
        content: {
          title: "CFU #15",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "17",
        name: "Cfu #16",
        type: "file" as const,
        content: {
          title: "CFU #16",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "18",
        name: "Cfu #17",
        type: "file" as const,
        content: {
          title: "CFU #17",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "19",
        name: "Cfu #18",
        type: "file" as const,
        content: {
          title: "CFU #18",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "20",
        name: "Cfu #19",
        type: "file" as const,
        content: {
          title: "CFU #19",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "21",
        name: "Cfu #20",
        type: "file" as const,
        content: {
          title: "CFU #20",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "22",
        name: "Cfu #21",
        type: "file" as const,
        content: {
          title: "CFU #21",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "23",
        name: "Cfu #22",
        type: "file" as const,
        content: {
          title: "CFU #22",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "24",
        name: "Cfu #23",
        type: "file" as const,
        content: {
          title: "CFU #23",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "25",
        name: "Cfu #24",
        type: "file" as const,
        content: {
          title: "CFU #24",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "26",
        name: "Cfu #25",
        type: "file" as const,
        content: {
          title: "CFU #25",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "27",
        name: "Cfu #26",
        type: "file" as const,
        content: {
          title: "CFU #26",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "28",
        name: "Cfu #27",
        type: "file" as const,
        content: {
          title: "CFU #27",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "29",
        name: "Cfu #28",
        type: "file" as const,
        content: {
          title: "CFU #28",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "30",
        name: "Cfu #29",
        type: "file" as const,
        content: {
          title: "CFU #29",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "31",
        name: "Cfu #30",
        type: "file" as const,
        content: {
          title: "CFU #30",
          description: "This was our first Check for Understanding assigment overall it was simple. All we needed to do was show some basic understanding we have so far of Python and use it for this CFU.",
          url: "https://py3.codeskulptor.org/#user309_7eooRclogq_0.py",
        },
      },
      {
        id: "32",
        name: "TBD",
        type: "folder" as const,
        children: [
          {
            id: "33",
            name: "",
            type: "file" as const,
            content: {
              title: "",
              description: "",
              url: "",
            },
          },
        ],
      },
    ],
  },
  {
    id: "15",
    name: "PS Assignment",
    type: "folder" as const,
    children: [
      {
        id: "16",
        name: "PS Assignment #1",
        type: "file" as const,
        content: {
          title: "PS Assignment #1",
          description: "",
          url: "",
        },
      },
    ],
  },
];

export default function Home() {
  const [selectedContent, setSelectedContent] = useState(INITIAL_DATA);

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="flex h-screen bg-background">
      <div className="w-64 border-r bg-muted/10">
        <div className="p-2 font-semibold text-sm">Explorer</div>
        <button type="button" onClick={handleGoBack}>
              Return
          </button>
          <FileTree
            data={FILE_TREE_DATA}
            onSelect={(node) => node.content && setSelectedContent(node.content)}
          />
      </div>
      <div className="flex-1 overflow-auto">
        <ContentView {...selectedContent} />
      </div>
    </div>
  );
}
