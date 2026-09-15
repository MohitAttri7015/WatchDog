import Link from "next/link";

export default function logo() {
    return (
        <Link href="/">
            <h1 className="font-logo text-xl">WatchDog</h1>
        </Link>
    )
}