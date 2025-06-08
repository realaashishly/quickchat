import Link from "next/link";

export default function Home() {
    return (
        <div className='flex w-full min-h-screen items-center justify-center'>
            <Link href={"/dashboard"}>Go to app</Link>
        </div>
    );
}
