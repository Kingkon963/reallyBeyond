import { getStrapiMedia } from "const/api";
import { Post } from "interfaces/Post";
import Link from "next/link";
import * as React from "react";
import Avatar from "./Avatar";

const BlogPost: React.FC<{ post: Post }> = ({ post }) => {
  const getAvatarURL = (post: Post): string | null => {
    const avatarData = post?.attributes.author.data?.attributes.avatar;
    if (avatarData) {
      // if (avatarData.data.attributes.formats?.xsmall)
      //   return getStrapiMedia(avatarData.data.attributes.formats.xsmall.url);
      return getStrapiMedia(avatarData.data.attributes.url);
    }
    return null;
  };

  return (
    <div className="flex flex-col lg:flex-row py-[20px] lg:py-[40px] gap-[12px] lg:gap-[31px] border-b border-green lg:w-[904px]">
      <div className="flex-1 flex lg:flex-col items-center justify-start gap-3 text-[12px] text-[#7D7D7D] ">
        {post.attributes.author.data && <Avatar imgUrl={getAvatarURL(post)} />}
        <span className=" flex flex-col lg:items-center gap-2">
          <span className="uppercase font-openSansBold text-[12px] text-center">
            {post.attributes.author.data?.attributes.username}
          </span>
          <span className="font-openSansBold text-[12px]">
            {new Date(post.attributes.publishedAt).toLocaleDateString(
              undefined,
              { day: "2-digit", month: "2-digit", year: "2-digit" }
            )}
          </span>
        </span>
      </div>
      <div className="flex flex-col ml-auto lg:w-[800px] ">
        <Link href={`blog/${post.attributes.slug}`}>
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
