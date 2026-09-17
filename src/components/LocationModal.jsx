import { X } from "lucide-react"
import { useState } from "react"
import { getGeoLocation } from "../services/get-location"
import { useNavigate } from "react-router"

const LocationModal = ({ onClose }) => {
  const navigate = useNavigate()
  const [city, setCity] = useState("")
  const [error, setError] = useState("")

  const goToPage = (location) => {
    navigate("/weather", { state: { location } })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const value = city.trim()

    if (!value) {
      setError("Please enter a city name")
      return
    }

    try {
      const location = await getGeoLocation(value)

      if (!location) {
        setError("Geocoding request failed!")
        return
      }

      goToPage(location)
    } catch (err) {
      setError(err.message || "Something went wrong")
    }
  }

  const handleGeoLocations = () => {
    if (!navigator.geolocation) {
      setError("Geo locations not found!")
      return
    }

    navigator.geolocation.getCurrentPosition(
      (positions) => {
        const { latitude, longitude } = positions.coords
        goToPage({ name: "Your Location", lat: latitude, lon: longitude })
      },
      (geoError) => {
        setError(geoError.message)
      },
      { timeout: 10000 }
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="glass-panel w-full max-w-md rounded-3xl p-5 shadow-2xl shadow-orange-900/30 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-white">Where are you today?</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 bg-stone-900/80 text-stone-200 transition hover:bg-stone-800"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-7">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              placeholder="Enter city name"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-2xl border border-orange-400/25 bg-stone-950/80 px-4 py-3 text-white placeholder:text-stone-400 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-500/20"
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-linear-to-r from-orange-400 via-orange-500 to-amber-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5 hover:shadow-orange-500/40"
            >
              Get weather
            </button>
          </form>
        </div>

        <div className="my-4 flex items-center gap-3 text-sm text-stone-300">
          <div className="h-px flex-1 bg-stone-700" />
          <span>or</span>
          <div className="h-px flex-1 bg-stone-700" />
        </div>

        <button
          type="button"
          onClick={handleGeoLocations}
          className="w-full rounded-2xl border border-orange-400/30 bg-stone-900/80 px-5 py-3 text-base font-semibold text-orange-100 transition hover:border-orange-300 hover:bg-stone-800"
        >
          Use my location
        </button>

        {error && <p className="mt-4 text-sm font-medium text-rose-300">{error}</p>}
      </div>
    </div>
  )
}

export default LocationModal