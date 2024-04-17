import Image from "next/image";

export default function About() {
  return (
      <div className={'grid grid-cols-2 my-24 space-x-4 items-center px-16'}>
        <div className={'text-xl text-justify'}>
            On January 1, 1914, Lord Frederick Lugard, the governor of both the Northern Nigeria Protectorate and the Colony and Protectorate of Southern Nigeria, signed a document consolidating the two, thereby creating the Colony and Protectorate of Nigeria.
            <br/>
            The name Nigeria was coined in the late 19th century by British journalist Flora Shaw, She was the wife of Lord Lugard. The name comes from the Niger River, which runs through the country.
            <br/>
            Nigeria gained a degree of self-rule in 1954, and full independence from the United Kingdom on 1 October 1960, as the Federation of Nigeria with Abubakar Tafawa Balewa as its prime minister, while retaining the British monarch, Elizabeth II, as nominal head of state and Queen of Nigeria.


        </div>
          <div className={'flex justify-center'}>
              <Image src={'/group.png'} alt={'group'} width={450} height={450}/>
              </div>
      </div>
  );
}
