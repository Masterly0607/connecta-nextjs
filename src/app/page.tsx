import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
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
        <SignInButton mode="modal" />

        <SignUpButton mode="modal">
          <Button variant="outline">Sign Up</Button>
        </SignUpButton>
      </SignedOut>
      {/* If user signed out, show user button */}
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle />
    </div>
  );
}

export default page;
