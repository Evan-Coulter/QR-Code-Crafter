import Logo from "@/assets/logo.svg"
import GithubLogo from "@/assets/github_icon.svg"

type Props = {
    className: string
}

const Navbar = ({className}: Props) => {
  return (
    <nav className={`${className} w-full h-[100px] pl-[70px] pr-[70px] mt-[55px] flex justify-between items-center`}>
        <div className='flex items-center space-x-[30px]'>
          <img src={Logo} alt='qr-code-crafter-site-logo' className="w-[48px] h-[48px] md:w-[70px] md:h-[70px]"/>
          <p className='md:text-[2rem] text-[1.5rem] font-bold'>
            QR Code Crafter
          </p>
        </div>
        <a href="https://github.com/Evan-Coulter/QR-Code-Crafter">
          <img src={GithubLogo} className='w-[48px] min-w-[48px] min-h-[48px] resize-none h-[48px] md:w-[70px] md:h-[70px]' alt='github-repo-link-image'/>
        </a>
    </nav>
  )
}

export default Navbar;