import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  text: string;
  className?: string;
  targetId?: string;
  href?: string;
  arrowDirection?: "down" | "right";
};

const Button = ({
  text,
  className = "",
  targetId,
  href,
  arrowDirection = "down",
}: ButtonProps) => {
  const arrowIcon =
    arrowDirection === "right"
      ? "/images/arrow-right.svg"
      : "/images/arrow-down.svg";

  const content = (
    <div
      className={`cta-button group ${
        arrowDirection === "right" ? "arrow-right" : ""
      }`}
    >
      <div className="bg-circle" />
      <p className="text">{text}</p>
      <div className="arrow-wrapper">
        <Image src={arrowIcon} alt="" width={18} height={18} />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={`${className} cta-wrapper`}>
        {content}
      </Link>
    );
  }

  return (
    <a href={`#${targetId}`} className={`${className} cta-wrapper`}>
      {content}
    </a>
  );
};

export default Button;
