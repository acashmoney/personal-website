import { useRouter } from "next/router";

export default function Chess() {
    const router = useRouter();
    return (
        <div>
            <h1>Chess</h1>
            <button onClick={() => router.push("/")}>Home</button>
        </div>
    );
}