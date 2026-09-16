import React, { useState } from 'react'
import LocationModal from '../components/LocationModal'

function Home() {
  const [click, setClick] = useState(false)

  return (
    <div className="w-full flex justify-center">
      <div className="glass-panel soft-ring w-full max-w-4xl rounded-[32px] px-6 py-10 text-center sm:px-10 md:px-16 md:py-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-200">
          <span className="h-2 w-2 rounded-full bg-orange-300" />
          Live weather updates
        </div>

        <div className="mt-8">
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
            Weather <span className="gradient-text">app</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-stone-300 sm:text-lg">
            Check your city’s forecast in a clean, modern dashboard built for quick weather checks.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setClick(true)}
            className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40 focus:outline-none focus:ring-4 focus:ring-orange-400/40"
          >
            Check your weather
            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {click && <LocationModal onClose={() => setClick(false)} />}
    </div>
  )
}

export default Home