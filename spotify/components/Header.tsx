"use client";

import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { toast } from "react-hot-toast";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import usePlayer from "@/hooks/usePlayer";

import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  className,
}) => {
  const player = usePlayer();
  const router = useRouter(); // Router instance for navigation
  const authModal = useAuthModal(); // Hook for managing the authentication modal

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    // Sign out the user
    const { error } = await supabaseClient.auth.signOut();
    player.reset(); // Reset the player state
    router.refresh(); // Refresh the page

    if (error) {
      toast.error(error.message);
    }
  }

  return (
    <div
      className={twMerge(`
        h-fit 
        bg-gradient-to-b 
        from-yellow-800 
        p-6
        `,
        className
      )}>
      <div className="w-full mb-4 flex items-center justify-between">
        {/* Back/Forward navigation for desktop */}
        <div className="hidden md:flex gap-x-2 items-center">
          <button 
            onClick={() => router.back()}  // Go to the previous page
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button 
            onClick={() => router.forward()}  // Go to the next page
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        {/* Mobile view buttons for Home/Search */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button 
            onClick={() => router.push('/')}  // Navigate to the home page
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button 
            onClick={() => router.push('/search')} // Navigate to the search page
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button 
                onClick={handleLogout} 
                className="bg-white px-6 py-2"
              >
                Logout
              </Button>

              {/* Navigate to account */}
              <Button 
                onClick={() => router.push('/account')} 
                className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
            {/* Show authentication options */}
              <div>
                <Button 
                  onClick={authModal.onOpen} 
                  className="
                    bg-transparent 
                    text-neutral-300 
                    font-medium
                  "
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button 
                  onClick={authModal.onOpen} 
                  className="bg-white px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header;