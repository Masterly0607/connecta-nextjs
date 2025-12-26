import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div>
      {/* If user signed out, show sign in and up button */}
      <SignedOut>
        <SignInButton />
        <SignUpButton>
          <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      {/* If user signed out, show user button */}
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default page;
