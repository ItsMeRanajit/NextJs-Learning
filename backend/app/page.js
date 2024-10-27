import Image from "next/image";
const getData = async  () => {
  const res = await fetch("http://localhost:3000/api/document",{
    headers: {
      'Content-Type' : 'application/json',
    }
  })
  const posts = await res.json()
  return posts;
}
export default async function Home() {
  const allPost = await getData()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {
        allPost.data.map((post, i) => (
          <div key={i}>
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
          <hr/>
          </div>
        ))
      }
    </div>
  );
}
// we are using out api ie. document/route.js to connect with the main jsonplaceholder api.
// so we are not directly using the main api we are using our backend to connect with the main. which is safer
 