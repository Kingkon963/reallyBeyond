import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const BlogPost: React.FC = () => {
  return (
    <div className="flex py-[40px] gap-[31px] border-b border-green lg:w-[904px]">
      <div className="flex-1 flex flex-col items-center justify-start gap-2 text-[12px] text-[#7D7D7D]">
        <div className="rounded-full w-[65px] h-[65px] border overflow-clip flex justify-center items-center">
          <Image src="/images/profile_pic.png" width={65} height={65} />
        </div>
        <span className="uppercase font-openSansBold text-[12px]">
          Jane Elliot
        </span>
        <span className="font-openSansBold text-[12px]">22.12.22</span>
      </div>
      <div className="flex flex-col ml-auto lg:w-[800px]">
        <Link href="#">
          <h2 className="font-poppinsSemibold text-[##333333] text-[26px] leading-[39px] cursor-pointer">
            Lorem Ipsum dolores sit amet, consectetur
            <hr className="border-green mb-[6px] w-[20px]" />
          </h2>
        </Link>
        <p className="font-openSansRegular text-[14px] leading-[21px] ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequun et quasi architecto
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia consequun
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
