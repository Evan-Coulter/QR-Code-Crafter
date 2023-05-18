import React from 'react'
import Logo from "@/assets/logo.svg"

type Props = {
    className: string
}

const Navbar = ({className}: Props) => {
  return (
    <nav className={`${className} w-full h-[24px]`}>
        <p>
            QR Code Crafter
        </p>

    </nav>
  )
}

export default Navbar;