import Link from 'next/link';
import Padding from './padding';

const Navbar = () => {
    return (
        <nav className="fixed top-0 py-4 w-full">
            <Padding>

            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
                    <ul className="flex">
                        <li className="mr-6">
                            <Link href="/">
                                <div className="text-white hover:text-gray-300">Home</div>
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link href="/services">
                                <div className="text-white hover:text-gray-300">Services</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <div className="text-white hover:text-gray-300">Contact</div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <Link href="/login">
                        <div className="text-white mr-4 hover:text-gray-300">Login</div>
                    </Link>
                    <Link href="/signup">
                        <div className="text-white hover:text-gray-300">Sign Up</div>
                    </Link>
                </div>
            </div>
            </Padding>
        </nav>
    );
};

export default Navbar;