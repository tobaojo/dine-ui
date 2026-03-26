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
    <div className="flex w-full flex-col items-center gap-4 border-gray-700 pb-8 text-white not-last:border-b">
      <Image
        src={imageSrc}
        alt={title}
        className="object-cover"
        height={1249}
        width={327}
      />
      <h3 className="font-bold text-xl text-center tracking-tight">{title}</h3>
      <p className="w-full max-w-80 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default HightlightItem;
