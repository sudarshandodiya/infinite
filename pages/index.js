import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobeAltIcon, LightningBoltIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Initiative",
    description:
      "Aimez-vous le FRANÇAIS? If the answer to the question is YES! and you want to build your career in the field of language and literature, you are at the best place to make your dream come true.",
    icon: GlobeAltIcon,
  },
  {
    name: "Approach",
    description:
      "Here at IDA, we tend to follow a communicative approach based on modern teaching methodologies. This in turn facilitates the learner to grasp the language and to appreciate the way it functions.",
    icon: LightningBoltIcon,
  },
];

function Tagline() {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Think French, think</span>{" "}
          <span className="block text-indigo-600 xl:inline italic">IDA.</span>
        </h1>
      </div>
    </main>
  );
}

function Content() {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="false" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  const callouts = [
    {
      name: "Yash Gehlot",
      description: "",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
      imageAlt: "Yash",
      href: "#",
    },
    {
      name: "Garvita Gahlot",
      description: "",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
      imageAlt: "Garvitha",
      href: "#",
    },
  ];

  return (
    <div className="">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">About Us</h2>
          <div className="mt-6   flex justify-around">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative inline-block">
                <div className="relative bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-40 h-40 object-center object-cover"
                  />
                </div>
                <div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slick() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="/Images/Image-1.jpg" className="m-auto" alt="Img1" />
      </div>
      <div>
        <img src="/Images/Image-2.jpg" className="m-auto" alt="Img2" />
      </div>
      <div>
        <img src="/Images/Image-3.jpg" className="m-auto" alt="Img3" />
      </div>
    </Slider>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header></Header>
      <Tagline></Tagline>
      <Content></Content>
      <div className="p-10">
        <Slick></Slick>
      </div>
      <AboutUs></AboutUs>
    </div>
  );
}
