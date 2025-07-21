import { blog_data, assets } from '@/app/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return blog_data.map(post => ({
    id: post.id.toString(),
  }));
}

export default function Page({ params }) {
  const data = blog_data.find(item => Number(params.id) === item.id);

  if (!data) {
    // Optionally handle 404
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <Link href="/">
        <div className="flex justify-around items-center text-[#154656]">
          <p className="text-2xl capitalize">Blogger</p>
          <button className="bg-white flex items-center rounded-sm shadow-[-7px_7px_0px_#000000] gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-solid border-2 border-black">
            Get started
          </button>
        </div>
      </Link>

      <div className="text-center my-24">
        <p className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</p>
        <Image src={data.author_img} alt="Author image" width={60} height={60} className="mx-auto mt-6 border border-white rounded-full" />
        <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image src={data.image} width={720} height={720} alt="Blog visual" />
        <h1 className="py-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[15px] leading-relaxed text-gray-700">
          Contrary to popular belief, Lorem Ipsum is not simply random text...
        </h3>

        <p className="text-black font-semibold">Share this on social media</p>
        <div className="flex my-4 gap-4 cursor-pointer">
          <Image src={assets.facebook_icon} width={50} alt="Facebook icon" />
          <Image src={assets.twitter_icon} width={50} alt="Twitter icon" />
          <Image src={assets.googleplus_icon} width={50} alt="Google Plus icon" />
        </div>
      </div>
    </div>
  );
}
