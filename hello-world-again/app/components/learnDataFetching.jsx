
async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}

async function learnDataFetching() {
const data = await getData();
  return (
    <div>{
        data.map((ele, index) => (
            <div key={index} >{ele.title} <hr /> </div>
        ))    
    }</div>
  )
}

export default learnDataFetching