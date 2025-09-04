import "./App.css"

export default function Bai8() {
  return (
    <div className="w-[100vw] h-[100vh]">
        <div className='flex gap-3 w-full h-[100px]'>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>01</div>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>02</div>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>03</div>
        </div>
        <div className='flex gap-3 w-full h-[100px] justify-end'>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>01</div>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>02</div>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>03</div>
        </div>
        <div className='flex gap-3 w-full h-[100px] justify-center'>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>01</div>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>02</div>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>03</div>
        </div>
        <div className='flex gap-3 w-full h-[100px] justify-between'>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>01</div>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>02</div>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>03</div>
        </div>
        <div className='flex gap-3 w-full h-[100px] justify-around'>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>01</div>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>02</div>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>03</div>
        </div>
        <div className='flex gap-3 w-full h-[100px] justify-evenly'>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>01</div>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>02</div>
            <div className='flex size-16 text-white font-bold items-center justify-center rounded-xl bg-blue-400'>03</div>
        </div>
    </div>
  )
}
