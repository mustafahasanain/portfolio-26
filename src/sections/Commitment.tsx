import { abilities } from "../constants";
import { TitleHeader } from "@/components";

const Commitment = () => (
  <div id="commitment" className="flex-center section-padding">
    <div className="w-full h-full md:px-10 px-5">
      <TitleHeader title="My Commitment" sub="Why Work With Me" />
      <div className="mx-auto mt-16 grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-[#00A19B] hover:shadow-[0_12px_30px_rgba(0,161,155,0.2)]"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Commitment;
