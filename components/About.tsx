import Image from "next/image";

export default function About() {
  return (
      <div className={'grid grid-cols-2 my-24 space-x-4 items-center px-16'}>
        <div>
             lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem, lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem
          lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem
        </div>
          <div className={'flex justify-center'}>
              <Image src={'/group.png'} alt={'group'} width={450} height={450}/>
              </div>
      </div>
  );
}
