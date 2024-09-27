"use client";

import signOut from "@/actions/auth/signOut";
import useAuthContext from "@/hooks/useAuthContext";
import { IoMdLogOut as LogoutIcon } from "react-icons/io";

export default function SignOutBTN() {
  const { resetAuth } = useAuthContext();
  const signOutFN = async () => {
    try {
      const res = await signOut();
      if (res.success === false) {
        return console.log(res.error);
      }
      resetAuth();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      className="btn btn-sm btn-flex btn-secondary"
      onClick={signOutFN}
    >
      <LogoutIcon />
      <span>Sign Out</span>
    </button>
  );
}
