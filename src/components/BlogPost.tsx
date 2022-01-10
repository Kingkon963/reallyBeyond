import Image from "next/image";
import * as React from "react";

const BlogPost: React.FC = () => {
  return (
    <div className="flex pb-5  border-b border-green lg:w-[904px]">
      <div className="flex flex-col items-center gap-2 bg-red-400 text-[12px]">
        <div className="rounded-full w-[65px] h-[65px] border overflow-clip flex justify-center items-center">
          <Image src="/images/profile_pic_demo.jpg" width={65} height={65} />
        </div>
        <span className="uppercase">Jane Elliot</span>
        <span>22.12.22</span>
      </div>
      <div className="flex flex-col ml-auto bg-yellow-300">
        <h2 className="font-poppinsSemibold text-[##333333] text-[26px] leading-[39px]">
          Lorem Ipsum dolores sit amet, consectetur
        </h2>
        <p className="font-openSansRegular text-[14px] leading-[21px] lg:w-[800px]">
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
