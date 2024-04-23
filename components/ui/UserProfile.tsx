import Image from "next/image";

export default function UserProfile() {
  return (
    <div className="relative w-8 h-8">
      <div className="relative w-3 h-3 -ml-2 mt-2.5 text-center content-center  text-2xs rounded-sm text-white font-semibold bg-link-400">
        2
      </div>

      <Image
        className="rounded-sm aspect-square	-z-10"
        src={
          "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1713829166~exp=1713829766~hmac=e275612588fb72eb849ad9f44379d05f58b3feaf309872f68d9bdb7ef2367215"
        }
        alt="teste"
        fill
        sizes="2vw"
      />
    </div>
  );
}
