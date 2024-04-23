import PrimaryInput from "./ui/PrimaryInput";
import Separator from "./ui/Separator";
import Filter from "./Filter";
import Logo from "./icons/Logo";
import { Suspense } from "react";
import AddPostButton from "./ui/AddPostButton";
import UserProfile from "./ui/UserProfile";
import Link from "next/link";

export default function Header() {
  return (
    <Suspense>
      <header className="flex border-b-2 border-grays-50  justify-center px-2">
        <div className=" flex flex-wrap w-full max-w-[40rem] py-6 justify-center">
          <div className="flex items-center gap-4 pr-4 ">
            <Link href={"/"}>
              <Logo />
            </Link>
            <Separator />
            <Filter />
          </div>
          <div className="py-2 sm:py-0  ">
            <PrimaryInput />
          </div>
          <div className="flex items-center gap-x-4  m-auto sm:mr-0">
            <AddPostButton />
            <UserProfile />
          </div>
        </div>
      </header>
    </Suspense>
  );
}
