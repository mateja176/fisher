import './App.css'

function App() {
  return (
    <div>
      <div id="fish" className="relative h-[80px] w-[150px]">
        <div
          id="body"
          className="absolute h-full w-full rounded-full bg-green-300"
        ></div>
        <div
          id="tail"
          className="absolute top-0 right-[-70px] h-[0px] w-[0px] rotate-[-45deg] rounded-full border-[40px] border-solid border-t-green-300 border-r-transparent border-b-transparent border-l-green-300"
        ></div>
        <div
          id="fin-top"
          className="absolute top-[-20px] left-[40%] h-0 w-0 border-t-[20px] border-r-[30px] border-b-[20px] border-solid border-t-transparent border-r-green-300 border-b-transparent"
        ></div>
        <div
          id="fin-bottom"
          className="absolute bottom-[-20px] left-[40%] h-0 w-0 border-t-[20px] border-r-[30px] border-b-[20px] border-solid border-t-transparent border-r-green-300 border-b-transparent"
        ></div>
        <div
          id="eye"
          className="absolute top-[20px] left-[25px] h-[10px] w-[10px] rounded-full bg-white"
        ></div>
      </div>
    </div>
  )
}

export default App
