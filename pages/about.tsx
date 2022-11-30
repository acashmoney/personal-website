import { useRouter } from "next/router";

export default function About() {
    const router = useRouter();
    return (
        <div>
            <h1>About</h1>
            <button onClick={() => router.push("/")}>Home</button>
        </div>
    );
}