import * as Separator from '@radix-ui/react-separator';
import { HomeIcon, PersonIcon, ActivityLogIcon, Link1Icon, EnvelopeClosedIcon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const { t } = useTranslation();
    const catMenu = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItens = t('menus', { returnObjects: true });
    const socialItens = t('social', { returnObjects: true });
    const icons = [<HomeIcon />, <PersonIcon />, <ActivityLogIcon />, <Link1Icon />, <EnvelopeClosedIcon />]
    const socialIcons = [<LinkedInLogoIcon />, <GitHubLogoIcon />, <InstagramLogoIcon />]


    const handleClick = (e) => {
        if (isMenuOpen && !catMenu.current?.contains(e.target)) {
            setIsMenuOpen(!isMenuOpen)
        }
    }
    document.addEventListener('mousedown', handleClick)

    return (
        <>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" ref={catMenu} className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full ${!isMenuOpen ? "sm:translate-x-0" : "translate-x-0"}`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {menuItens.map(({ item, href }, index) =>
                            <li key={`'${index + item}'`}>
                                <Link to={href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    {icons[index]}
                                    <span className="ms-3">{item}</span>
                                </Link>
                            </li>
                        )}

                    </ul>                   
                    <Separator.Root className="bg-gray-50 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
                        <ul className="space-y-2 font-medium">
                            {socialItens.map(({ item, href }, index) =>
                                <li key={`'${index + item}'`}>
                                    <a href={href} target="_blank" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        {socialIcons[index]}
                                        <span className="ms-3">{item}</span>
                                    </a>
                                </li>
                            )}

                        </ul>
                    </div>
                
            </aside>
        </>
    );
}
