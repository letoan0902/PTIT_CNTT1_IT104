import "./App.css"

export default function Bai5() {
  return (
    <div className="w-[300px] h-[200px] rounded-xl bg-blue-100 p-1 flex items-center justify-center ml-[200px]">
        <div className="w-[90%] h-[90%] bg-blue-300 relative">
            <p className="text-1xl mt-2 ml-2 text-blue-600 font-bold">Relative parent</p>
            <button className="absolute w-[120px] h-[40px] rounded-2xl bottom-0 !bg-blue-400 text-white font-bold">Absolute child</button>
        </div>
    </div>
  )
}
