import type { NextApiRequest, NextApiResponse } from "next";

interface PortfolioItem {
  id: number;
  name: string;
  desc: string;
  fw: string;
  date: string;
  link: string;
  img: string;
}

const getPortfolio = (req:NextApiRequest,res:NextApiResponse<PortfolioItem[]>) => {
  const portfolio = [
    {
      "id": 1,
      "name":"Portfolio",
      "desc":"Má předešlá webová stránka, s portfoliem a informacemi o mě.",
      "fw":"Next.js",
      "date":"27.6.2024",
      "link":"https://alexpoky2011.fun",
      "img":"https://alexpoky2011.fun/portfolio.png"
    },
  ];

  return res.status(200).json(portfolio);
}

export default getPortfolio;