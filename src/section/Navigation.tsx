import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="max-w-[1280px] mx-auto px-4 py-4">
                <div className="md:hidden flex items-center justify-between">
                    <span></span>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleMenu}
                        className="text-black hover:bg-gray-200"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                            />
                        </svg>
                    </Button>
                </div>

                <div
                    className={`fixed inset-0 z-50 md:hidden ${isOpen ? 'flex' : 'hidden'
                        } flex-col items-center justify-center bg-white space-y-6`}
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-black hover:bg-gray-200"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </Button>
                    <a href="#summary" className="text-2xl hover:underline hover:text-gray-500" onClick={toggleMenu}>
                        Summary
                    </a>
                    <a href="#about" className="text-2xl hover:underline hover:text-gray-500" onClick={toggleMenu}>
                        About
                    </a>
                    <a href="#services" className="text-2xl hover:underline hover:text-gray-500" onClick={toggleMenu}>
                        Services
                    </a>
                    <a href="#contact" className="text-2xl hover:underline hover:text-gray-500" onClick={toggleMenu}>
                        Contact
                    </a>
                </div>

                <div className="hidden md:flex justify-center space-x-20">
                    <a href="#summary" className="hover:underline hover:text-gray-500">
                        Summary
                    </a>
                    <a href="#technical-skills" className="hover:underline hover:text-gray-500">
                        Technical Skills
                    </a>
                    <a href="#experience" className="hover:underline hover:text-gray-500">
                        Experience
                    </a>
                    <a href="#contact" className="hover:underline hover:text-gray-500">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;