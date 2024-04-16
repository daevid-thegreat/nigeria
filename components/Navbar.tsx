import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
      <div className={'flex items-center justify-between text-white font-semibold text-lg'}>
          <div className={'flex gap-6'}>
              <Link href={''}>
                  Adventure
              </Link>
              <Link href={''}>
                  Entertainment
              </Link>
          </div>
          <Image src="/flag.svg" alt="logo" width={100} height={100}/>
          <div className={'flex gap-6'}>
              <Link href={''}>
                  Culture
              </Link>
              <Link href={''}>
                  Sport
              </Link>
          </div>
      </div>
  );
}
