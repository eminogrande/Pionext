'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function Homepage() {
  const startups = [
    {
      title: "Long Audio Transcribe",
      description: "Transcribe and analyze long audio files up to 5 hours",
      tokenPrice: 0.00245,
      priceChange: 5.2,
      fundingGoal: 35000,
      currentFunding: 28000,
    },
    {
      title: "AI Code Reviewer",
      description: "Automated code review and suggestions powered by advanced AI",
      tokenPrice: 0.00187,
      priceChange: -2.8,
      fundingGoal: 42000,
      currentFunding: 25200,
    },
    {
      title: "Virtual Event Platform",
      description: "Host immersive online events with interactive features",
      tokenPrice: 0.00312,
      priceChange: 10.1,
      fundingGoal: 50000,
      currentFunding: 47500,
    },
    {
      title: "Data Visualization Tool",
      description: "Create stunning interactive data visualizations effortlessly",
      tokenPrice: 0.00209,
      priceChange: -1.5,
      fundingGoal: 28000,
      currentFunding: 14000,
    },
  ].sort((a, b) => (b.currentFunding / b.fundingGoal) - (a.currentFunding / a.fundingGoal));

  const getProgressColor = (percentage: number) => {
    const hue = ((1 - percentage) * 120).toString(10);
    return [`hsl(${hue}, 100%, 35%)`, `hsl(${hue}, 100%, 45%)`];
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-4 py-4 border-b">
        <div className="flex items-center space-x-6">
          <svg
            className="text-blue-600 h-8 w-8"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span className="text-xl font-semibold">Pionext</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Submit Project</Button>
          <Button variant="ghost" className="hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">Log in</Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">Sign up</Button>
        </div>
      </header>
      <main className="px-4 py-12">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Trade App Credits, Fund Indie Hackers</h1>
          <p className="text-xl text-gray-600 mb-8">
            Buy, sell, and trade app credits through a fair bonding curve. Early supporters are rewarded with lower prices, helping to fund MVPs while backing innovative projects.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">Explore Projects</Button>
            <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-100 transition-colors duration-200">Raise Capital</Button>
          </div>
        </section>
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {startups.map((startup, index) => {
            const fundingPercentage = startup.currentFunding / startup.fundingGoal;
            const [progressColor, progressColorHover] = getProgressColor(fundingPercentage);
            return (
              <Link href="#" key={index} className="block">
                <div className="rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg bg-white border border-gray-200 hover:bg-gray-50">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{startup.title}</h3>
                      <div className="text-right">
                        <span className="text-lg font-bold block">${startup.tokenPrice.toFixed(5)}</span>
                        <div className={`flex items-center justify-end ${startup.priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {startup.priceChange >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                          <span className="text-sm font-medium">{Math.abs(startup.priceChange).toFixed(1)}%</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{startup.description}</p>
                    <div className="text-sm text-gray-500 mb-2">
                      Funding Goal: ${startup.fundingGoal.toLocaleString()}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div 
                        className="h-2.5 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${fundingPercentage * 100}%`,
                          backgroundColor: progressColor,
                        }}
                      ></div>
                    </div>
                    <div className="text-sm text-right text-gray-500 mt-1">
                      {(fundingPercentage * 100).toFixed(1)}% funded
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
    </div>
  )
}