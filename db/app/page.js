import Image from "next/image";
import GetData2 from './components/getData2.jsx'
import PostData from './components/sendData2.jsx'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <GetData2/>
     <PostData/>
    </div>
  );
}
