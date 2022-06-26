import Header from "./Header";
import { Carousel, Button, Card, Divider } from "react-daisyui";
import { GlobeAltIcon, LightningBoltIcon } from "@heroicons/react/outline";
import { Founder } from "./contact";

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
        <h1 className="tracking-tight font-extrabold text-gray-900 text-6xl">
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

function AboutUs(args) {
  const callouts = [
    {
      name: "Yash Gehlot",
      description: "MA French in Translation (JNU), BA Hons in French(JNU).",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
      imageAlt: "Yash",
      href: " https://www.linkedin.com/in/yash-gehlot-8749861a7",
    },
    {
      name: "Garvita Gahlot",
      description:
        "MA in French Literature (JNU), BA Hons in French (JNU), DELF B1.",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
      imageAlt: "Garvitha",
      href: "https://www.linkedin.com/in/garvita-gahlot-909930174",
    },
  ];

  return (
    <div className="md:flex md:justify-around m-auto lg:w-3/5">
      {callouts.map((callout) => (
        <Card {...args} className="flex m-10">
          <Card.Image src={callout.imageSrc} alt={callout.imageAlt} />
          <Card.Body>
            <Card.Title tag="h2">{callout.name}</Card.Title>
            <p>{callout.description}</p>
            <Card.Actions>
              <Button href={callout.href} color="primary">
                LinkedIn
              </Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

function Slick(args) {
  return (
    <Carousel {...args} className="rounded-box flex">
      <Carousel.Item
        className="flex"
        key={"Image1"}
        src="/Images/Image-1.jpg"
        alt="Car1"
      />
      <Carousel.Item
        className="flex"
        key={"Image2"}
        src="/Images/Image-2.jpg"
        alt="Car2"
      />
      <Carousel.Item
        className="flex"
        key={"Image3"}
        src="/Images/Image-3.jpg"
        alt="Car3"
      />
    </Carousel>
  );
}

export default function Home(args) {
  const buttonStyle = (value) => {
    return (
      <Button className="bg-indigo-500" color="primary">
        {value}
      </Button>
    );
  };
  return (
    <div className="overflow-hidden">
      <Header></Header>
      <Tagline></Tagline>
      <Content></Content>
      <div className="w-4/5 md:w-2/5 m-auto">
        <Slick
          display="numbered"
          snap="start"
          buttonStyle={buttonStyle}
        ></Slick>
      </div>
      <Founder></Founder>
      <AboutUs className="flex justify-around"></AboutUs>
    </div>
  );
}
