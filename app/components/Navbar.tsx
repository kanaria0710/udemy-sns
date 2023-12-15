import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-gray-700 p-4 text-white container mx-auto flex justify-between items-center">
            <h1 className="font-semibold text-xl">
            <Link href="/">SNS Clone</Link>
            </h1>
            <nav>
            <ul className="flex space-x-4 text-2xl">
                <>
                <Link
                    href="/login"
                    className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                >
                    ログイン
                </Link>
                <Link
                    href="/signup"
                    className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                >
                    サインアップ
                </Link>
                </>
            </ul>
            </nav>
        </header>
    );
};

export default Navbar;