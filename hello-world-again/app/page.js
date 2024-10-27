import Image from "next/image";
import LearnLink from './components/learnLink.jsx'
import LearnData from './components/learnDataFetching.jsx'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {/* <LearnLink/> */}
      <LearnData/>
    </main>
  );
}
  