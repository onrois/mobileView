import React from "react";

const cards = [
  {
    id: 1,
    description: "I'd feel more outgoing",
  },
  {
    id: 2,
    description: "Grow Your Wealth",
  },
  {
    id: 3,
    description: "Expand Your Mind",
  },
  {
    id: 4,
    description: "Find Inner Peace",
  },
  {
    id: 5,
    description: "Get More Active",
  },
  {
    id: 6,
    description: "Build Lasting Bonds",
  },
  {
    id: 7,
    description: "Live With Purpose",
  },
  {
    id: 8,
    description: "Unleash Your Creativity",
  },
  {
    id: 9,
    description: "Master Your Schedule",
  },
  {
    id: 10,
    description: "Make A Difference",
  },
  {
    id: 11,
    description: "Never Stop Growing",
  },
  {
    id: 12,
    description: "Find Your Harmony",
  },
];

export default function Cards() {
  return (
    <div className="flex flex-col w-full gap-2 h-[27rem] shadow-inner overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex justify-between items-center border border-[#2b2b2d] p-4 rounded-xl bg-[#1a1a1c] text-white"
        >
          <div>{card.description}</div>
          <div>
            <input
              type="checkbox"
              className="w-5 h-5 flex justify-center items-center border-2 border-[#48484a] rounded-md appearance-none checked:bg-white checked:border-transparent focus:outline-none transition-all duration-300 "
            />
          </div>
        </div>
      ))}
    </div>
  );
}
