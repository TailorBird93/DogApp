import Image from 'next/image'
import DogCard from './components/DogCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DogCard></DogCard>
      <DogCard></DogCard>
      <DogCard></DogCard>
      <DogCard></DogCard>
      <DogCard></DogCard>
    </main>
  )
}
