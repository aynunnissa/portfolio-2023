import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="homepage flex items-center pt-10 md:pt-0 pb-10 px-8 sm:px-16 md:px-22 lg:px-44">
      <div className="w-full flex justify-center items-center flex-col-reverse md:flex-row gap-16">
        <div className="flex-1">
          <div>
            <p className="text-lg sm:text-2xl font-medium mb-4">Hi, welcome!</p>
            <h1 className="text-[24px] sm:text-[42px] font-bold">
              {`I'm`} Aynun Nissa
              <br />A{' '}
              <span className="text-blue-primary">Software Engineer</span>
            </h1>
            <p className="text-gray-600">
              and a long-life learner {`who's`} passionate about harnessing the
              power of technology to create meaningful impact and bring value to
              society.
            </p>
            <p className="text-gray-600">
              Information System graduate from University of Indonesia.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-5">
            <Link
              href="/experience"
              className="btn btn-md btn-primary text-white"
            >
              <i class="bi bi-airplane-fill mr-2 rotate-45"></i>Explore
            </Link>
            <a
              href="https://drive.google.com/file/d/18KYKSDGkxGQfwprSM0zANN9AOT90xpzm/view?usp=sharing"
              target="_blank"
              className="text-blue-primary hover:text-blue-600"
            >
              <i class="bi bi-download"></i> Download CV
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/main/me.svg"
            alt="Header icon"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </main>
  );
}
