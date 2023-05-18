import Navbar from "./scenes/navbar"

function App() {
  const pageBorderStyle = "w-full bg-primaryLight h-[24px] fixed"
  return (
    <div className='app bg-primaryDark text-primaryLight'>
      <div className={`${pageBorderStyle} top-[0%]`}></div>
      <Navbar className="mt-[24px]"/>
      <div className={`${pageBorderStyle} bottom-[0%]`}></div>
    </div>
  )
}

export default App
