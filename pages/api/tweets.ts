import type { NextApiRequest, NextApiResponse } from "next";

interface Ireply {
  id: number;
  name: string;
  userName: string;
  reply: string;
}

const result: Ireply[] = [
  {
    id: 0,
    name: "✨",
    userName: "Client",
    reply: "Best Quality Productions...",
  },
  {
    id: 1,
    name: "✨",
    userName: "Client",
    reply: "Your projects are amazing! 👍 💪",
  },
  {
    id: 2,
    name: "✨",
    userName: "Client",
    reply: "Excellent Work on Time 🔥",
  },
  {
    id: 3,
    name: "✨",
    userName: "Client",
    reply: "Really impressive man 👏",
  },
  {
    id: 4,
    name: "✨",
    userName: "Client",
    reply: "Your solutions are elite, lovely work.",
  },
  {
    id: 5,
    name: "✨",
    userName: "Client",
    reply: "Satisfied with the project 🔥🔥",
  },
  {
    id: 6,
    name: "✨",
    userName: "Client",
    reply: "Beautiful site you have! ❤️",
  },
  {
    id: 7,
    name: "✨",
    userName: "Client",
    reply: "Great work man 🚀🚀🚀...Wish you luck",
  },
  {
    id: 8,
    name: "✨",
    userName: "Client",
    reply: "Nice job... Good",
  },
  {
    id: 9,
    name: "✨",
    userName: "Client",
    reply: "Happy with the project",
  },
  {
    id: 10,
    name: "✨",
    userName: "Client",
    reply: "🔥 well-done.",
  },
  {
    id: 11,
    name: "✨",
    userName: "Client",
    reply: "Love your design! sharing now!",
  },
  {
    id: 12,
    name: "✨",
    userName: "Client",
    reply: "Awesome work!",
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data: result,
  });
}
