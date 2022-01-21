import * as React from "react";
import Image from "next/image";
import defaultAvatar from "../../public/images/profile_pic.png";

const Avatar: React.FC<{ imgUrl: string | null }> = ({ imgUrl }) => {
  return (
    <div className="rounded-full w-[65px] h-[65px] overflow-clip flex justify-center items-center">
      <Image src={imgUrl || defaultAvatar} width={65} height={65} />
    </div>
  );
};

export default Avatar;
