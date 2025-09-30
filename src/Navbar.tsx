const Navbar = () => {
  return (
    <div className="flex justify-between w-full px-40 py-6 bg-[#222222] text-white">
        <div className="font-[Poppins] font-extrabold">Aurelien Ebeng</div>
        <div>
            <ul className="flex justify-start text-base font-[Plus Jakarta Sans]">
                <li className="px-4">Home</li>
                <li className="px-4">About</li>
                <li className="px-4">Projects</li>
                <li className="px-4">Experience</li>
                <li className="px-4">Skills</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar