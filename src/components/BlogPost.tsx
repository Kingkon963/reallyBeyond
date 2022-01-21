import { Post } from "interfaces/Post";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const BlogPost: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="flex flex-col lg:flex-row py-[20px] lg:py-[40px] gap-[12px] lg:gap-[31px] border-b border-green lg:w-[904px]">
      <div className="flex-1 flex lg:flex-col items-center justify-start gap-3 text-[12px] text-[#7D7D7D] ">
        <div className="rounded-full w-[65px] h-[65px] border overflow-clip flex justify-center items-center">
          <Image src="/images/profile_pic.png" width={65} height={65} />
        </div>
        <span className=" flex flex-col lg:items-center gap-2">
          <span className="uppercase font-openSansBold text-[12px]">
            Jane Elliot
          </span>
          <span className="font-openSansBold text-[12px]">22.12.22</span>
        </span>
      </div>
      <div className="flex flex-col ml-auto lg:w-[800px] ">
        <Link href="#">
          <h2
            className="font-poppinsSemibold text-[##333333] text-[18px] leading-[27px]
          lg:text-[26px] lg:leading-[39px] cursor-pointer"
          >
            {post.attributes.title}
            <hr className="border-green mt-[6px] lg:mt-0 mb-[6px] w-[20px]" />
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
