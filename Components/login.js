import { useSession, signIn, signOut } from "next-auth/client";

export default function Login() {
    const [session] = useSession();
    return (
        <div>
            {!session ? (
                <>
                    <button onClick={() => signIn("github")}>
                        Sign in with Github
                    </button>
                </>
            ) : (
                <>
                    <button onClick={signOut}>Logout</button> <br />
                </>
            )}
        </div>
    );
}