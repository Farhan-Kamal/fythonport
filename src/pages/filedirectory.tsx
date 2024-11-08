"use client";
import { useRouter } from 'next/router';
import { useState } from "react";
import { FileTree } from "@/components/file-explorer/file-tree";
import { ContentView } from "@/components/file-explorer/content-view";
import 'tailwindcss/tailwind.css';

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
          title: "CFU #3 | Mathematical operations ",
          description: "In the simplest form CFU # 3 was all about making a simple calculator. We overall used our knowledge on math operators and just ask for 2 inputs 1st number and 2nd number these will be used for the calculation.",
          url: "https://py3.codeskulptor.org/#user309_iMT9WkUmpB_0.py",
        },
      },
      {
        id: "5",
        name: "Cfu #4",
        type: "file" as const,
        content: {
          title: "CFU #4 | Quadratic Equation Calculator",
          description: "Think of CFU # 3 as our simplier version of this. Overall we had to use our basic knowledge in math to add the Quadartic equation into Python we go ahead and ask for the Coefficient of the standard form equation then calculate the Roots of the Quadratic equation. hen lastly print it out.",
          url: "https://py3.codeskulptor.org/#user309_iMT9WkUmpB_1.py",
        },
      },
      {
        id: "6",
        name: "Cfu #5",
        type: "file" as const,
        content: {
          title: "CFU #5 | Coins to cash converter",
          description: "We made a program similar to CFU # 3 and 4 where we get numbers and output the result. Here we are asking for a certain amount of coins like pennies, nickles, dimes, and much more. then once we get those we calculate and add up the coins and dived them via dollars to overall get the output which is coins in dollars.",
          url: "https://py3.codeskulptor.org/#user309_iMT9WkUmpB_2.py",
        },
      },
      {
        id: "7",
        name: "Cfu #6",
        type: "file" as const,
        content: {
          title: "CFU #6 | Advance use of Mathematical operations",
          description: "Like in CFU # 3 we are going to show off all our wys of calculations. But also add on by using random which helps generate a random number.",
          url: "https://py3.codeskulptor.org/#user309_iMT9WkUmpB_3.py",
        },
      },
      {
        id: "8",
        name: "Cfu #7",
        type: "file" as const,
        content: {
          title: "CFU #7 | The Sum or Average",
          description: "We are pretty much asking the user for 3 numbers. Once we got them we add them up to get a sum from all of them then we go ahead and use those same numbers to find the average between them.",
          url: "https://py3.codeskulptor.org/#user309_iMT9WkUmpB_4.py",
        },
      },
      {
        id: "9",
        name: "Cfu #8",
        type: "file" as const,
        content: {
          title: "CFU #8 | The Grub Hub Copy",
          description: "A copycat of GrubHub Simplified. we ask if the user order food if yes then yay if not oh well. Then we ask for the cost of the food and also how many were eating or how many are splitting the order.",
          url: "https://py3.codeskulptor.org/#user309_iMT9WkUmpB_5.py",
        },
      },
      {
        id: "10",
        name: "Cfu #9",
        type: "file" as const,
        content: {
          title: "CFU #9 | Roll the Dice Game",
          description: "We are making a simple python game where we ask how many times a user might want to play then we get the user to guess a number between 1-6 (Like how a dice has 1-6 if they get it right they get 6+ points if they get it wrong they lose 1 point after the rolls they inputed we print their final score.)",
          url: "https://py3.codeskulptor.org/#user309_iMT9WkUmpB_6.py",
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
    <div className="flex h-screen bg-background grid grid-cols-3">
      <div className="overflow-y-auto col-span-1 w-64 border-r bg-muted/10">
        <div className="p-2 font-semibold text-sm">Explorer</div>
        <button type="button" onClick={handleGoBack}>
              Return
          </button>
          <FileTree
            data={FILE_TREE_DATA}
            onSelect={(node) => node.content && setSelectedContent(node.content)}
          />
      </div>
      <div className="overflow-y-auto top-0 col-span-2 flex-1 overflow-auto">
        <ContentView {...selectedContent} />
      </div>
    </div>
  );
}
