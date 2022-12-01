import Image, { StaticImageData } from "next/image";
import Stars1 from "@/images/stars.svg";

interface Skills_cardProps {
  Title: string;
  Logo: any;
  Stars: any;
  size: string;
}

export default function Skills_card({
  Title,
  Logo,
  Stars,
  size,
  ...props
}: Skills_cardProps) {
  return (
    <div className="p-4 md:w-1/3 lg:w-1/4 w-full hover:scale-105 group">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center flex-col mb-3">
          <Logo height={size} width={size} />
          <h2 className="text-gray-900 text-lg title-font font-medium">
            {Title}
          </h2>
          <span className="mt-5 mx-auto flex-row hidden group-hover:flex">
            <Stars1 height="25px" />
            <Stars1 height="25px" />
            <Stars height="25px" />
          </span>
        </div>
      </div>
    </div>
  );
}
