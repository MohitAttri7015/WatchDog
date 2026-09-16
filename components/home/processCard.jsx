import {
  Search,
  Lightbulb,
  Settings,
} from "lucide-react";

const processData = [
  {
    description: "Paste in the product link you want watched yours or a rivals",
    icon: Search,
    heading: "Point it at a competitor",
  },
  {
    description: "Running quietly in the background, day and night",
    icon: Lightbulb,
    heading: "It checks every hour",
  },
  {
    description: "The moment something changes, before their customers do",
    icon: Settings,
    heading: "You get the alert first",
  },
];

export default function ProcessCard() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {processData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
              font-main
                group
                relative
                md:min-h-[500px]
                min-h-[400px]
                w-full
                rounded-3xl
                border border-black/10
                bg-[#f5f5f5]
                p-6
                flex flex-col
                justify-between
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-black
              "
            >
              {/* Description */}
              <p
                className="
                  max-w-[280px]
                  text-sm
                  font-medium
                  leading-6
                  text-black/50
                  transition-colors duration-300
                  group-hover:text-white
                "
              >
                {item.description}
              </p>

              {/* Icon */}
              <div className="flex items-center justify-center">
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border border-black/10
                    bg-white
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:border-white/20
                  "
                >
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="text-black"
                  />
                </div>
              </div>

              {/* Heading */}
              <div className="flex items-end justify-between">
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-black
                    transition-colors duration-300
                    md:text-3xl
                    group-hover:text-white
                    md:w-[50%]
                  "
                >
                  {item.heading}
                </h3>

                <span
                  className="
                    text-sm
                    text-black/30
                    transition-colors duration-300
                    group-hover:text-white/40
                  "
                >
                  0{index + 1}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}