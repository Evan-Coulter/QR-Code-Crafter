import Logo from "@/assets/logo.svg"
import GithubLogo from "@/assets/github_icon.svg"

type Props = {
    className: string
}

const Navbar = ({className}: Props) => {
  return (
    <nav className={`${className} w-full h-[100px] pl-[70px] pr-[70px] mt-[55px] flex justify-between items-center`}>
        <div className='flex items-center space-x-[40px]'>
          <img src={Logo} alt='qr-code-crafter-site-logo'/>
          <p className='text-2xl text-[2.5rem] font-bold'>
            QR Code Crafter
          </p>
        </div>
        <a href="https://github.com/Evan-Coulter/QR-Code-Crafter">
          <img src={GithubLogo} className='w-[80px] h-[80px]' alt='github-repo-link-image'/>
        </a>
    </nav>
  )
}

export default Navbar;