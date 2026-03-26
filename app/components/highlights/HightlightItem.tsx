import Image from "next/image";

type HighlightItemProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const HightlightItem = ({
  imageSrc,
  title,
  description,
}: HighlightItemProps) => {
  return (
    <div className="flex flex-col gap-4 items-center text-white not-last:border-b border-gray-700 pb-8 ">
      <Image
        src={imageSrc}
        alt={title}
        className="object-cover"
        height={1249}
        width={327}
      />
      <h3 className="font-bold text-xl text-center tracking-tight">{title}</h3>
      <p className="text-center w-80">{description}</p>
    </div>
  );
};

export default HightlightItem;
