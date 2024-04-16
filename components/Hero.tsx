import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <div className={'h-screen px-24 bg-[url("/hero-bg.jpg")] bg-no-repeat bg-cover'}>
        <Navbar/>
        <div className={'flex flex-col text-center mt-[15%]'}>
            <span className={'text-white text-xl'}>Giant Of Africa</span>
            <h1 className={'text-9xl font-bold text-white my-1.5'}>Nigeria</h1>
        </div>
    </div>
  );
}
