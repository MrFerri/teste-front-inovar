import Link from "next/link";
import { Circle } from "./icons/Circle";
import { Facebook } from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Logo from "./icons/Logo";

export default function Footer() {
  return (
    <footer className="flex justify-center text-xs px-2 ">
      <div className="flex flex-wrap w-full max-w-[40rem] justify-between ">
        <div className="flex gap-x-2 py-2 m-auto sm:m-0">
          <Link href={"/"}>
            <Logo />
          </Link>
          <div className="flex-col text-grays-700 ">
            <div className="font-bold">The UX Library</div>
            <div className="text-2xs">
              Community curated design content & discussion
            </div>
          </div>
        </div>
        <div className="flex flex-col  py-2  m-auto sm:m-0">
          <div className="flex items-center gap-x-2 text-link-400 text-2xs">
            <Link
              href={"/whatever"}
              className="flex items-center gap-x-1 text-grays-700"
            >
              <Facebook />
              Facebook
            </Link>
            <Link
              href={"/whatever"}
              className="flex items-center gap-x-1 text-grays-700"
            >
              <Twitter />
              Twitter
            </Link>
            <Circle />
            <Link href={"/whatever"}> About</Link>
            <Link href={"/whatever"}> Contact</Link>
            <Link href={"/whatever"}> Sign</Link>
          </div>
          <div className="flex justify-end text-grays-300 text-[8px]">
            © 2014 - The UX Library
          </div>
        </div>
      </div>
    </footer>
  );
}
