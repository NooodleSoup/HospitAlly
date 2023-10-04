'use client'

import { useContext } from "react";
import { googleSignIn, signOutUser } from "@/lib/firebase";
import { UserContext } from "@/lib/context";

export default function EnterPage() {
    const { user, username } = useContext(UserContext);

    return (
        <main>
            {
                user ? <SignOutButton /> : <SignInButton /> 
            }
        </main>
    );
}

function SignInButton() {

  return (
    <button className="btn-google" onClick={googleSignIn}>
      <img src={'/google.png'} /> Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => signOutUser}>Sign Out</button>;
}
