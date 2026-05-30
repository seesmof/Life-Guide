"use client";

import Link from "next/link";
import { useState } from "react";

interface Tip {
  content: string;
  reference: string;
  link?: string;
}

const baseUrl: string = "https://bolls.life/ESV/";

const tips: Tip[] = [
  {
    content:
      "Submit yourselves therefore to God. Resist the devil, and he will flee from you.",
    reference: "James 4:7",
    link: "59/4/7/",
  },
  {
    content:
      "And to aspire to live quietly, and to mind your own affairs, and to work with your hands, as we instructed you,",
    reference: "1 Thessalonians 4:11",
    link: "52/4/11/",
  },
  {
    content:
      "So, whether you eat or drink, or whatever you do, do all to the glory of God.",
    reference: "1 Corinthians 10:31",
    link: "46/10/31/",
  },
  {
    content: "Whatever you do, work heartily, as for the Lord and not for men,",
    reference: "Colossians 3:23",
    link: "51/3/23/",
  },
  {
    content:
      "Fight the good fight of the faith. Take hold of the eternal life to which you were called and about which you made the good confession in the presence of many witnesses.",
    reference: "1 Timothy 6:12",
    link: "54/6/12/",
  },
  {
    content:
      "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.",
    reference: "Romans 12:2",
    link: "45/12/2/",
  },
  {
    content:
      "Keep your life free from love of money, and be content with what you have, for he has said, “I will never leave you nor forsake you.”",
    reference: "Hebrews 13:5",
    link: "58/13/5/",
  },
  {
    content:
      "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
    reference: "Proverbs 3:5-6",
    link: "20/3/5/",
  },
  {
    content:
      "For “Whoever desires to love life and see good days, let him keep his tongue from evil and his lips from speaking deceit;",
    reference: "1 Peter 3:10",
    link: "60/3/10/",
  },
  {
    content: "Rejoice in the Lord always; again I will say, rejoice.",
    reference: "Philippians 4:4",
    link: "50/4/4/",
  },
  {
    content:
      "Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.",
    reference: "Ephesians 4:32",
    link: "49/4/32/",
  },
  {
    content:
      "And you shall love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.’",
    reference: "Mark 12:30",
    link: "41/12/30/",
  },
];

const Text = () => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex flex-col gap-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-white rounded-md outline outline-stone-300 py-2 px-4"
        placeholder="Search for a Bible verse here..."
      />
      <div className="flex flex-col md:gap-5 gap-3 lg:gap-7 mt-3 md:mt-5">
        {tips
          .filter(
            (tip) =>
              tip.content.toLowerCase().includes(input.toLowerCase()) ||
              tip.reference.toLowerCase().includes(input.toLowerCase()),
          )
          .map((tip, index) => (
            <p
              key={index}
              onClick={() =>
                navigator.clipboard.writeText(
                  `${tip.content} (${tip.reference})`,
                )
              }
              className="cursor-pointer"
            >
              {tip.content}{" "}
              <Link
                className="no-underline hover:underline underline-offset-4 italic"
                href={`${baseUrl}${tip.link}`}
              >
                ({tip.reference})
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default Text;
