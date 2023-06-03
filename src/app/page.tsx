import Image from 'next/image'
import MapContainer from './components/MapContainer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My Vibe Map</h1>
      <MapContainer />
    </main>
  )
}
