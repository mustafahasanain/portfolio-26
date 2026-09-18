import Image from "next/image";

type ButtonProps = {
  text: string;
  className?: string;
  targetId: string;
};

const Button = ({ text, className = "", targetId }: ButtonProps) => {
  return (
    <a href={`#${targetId}`} className={`${className} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <Image
            src="/images/arrow-down.svg"
            alt=""
            width={18}
            height={18}
          />
        </div>
      </div>
    </a>
  );
};

export default Button;
