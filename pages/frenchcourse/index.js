import Header from "../Header";
import { Card, Button } from "react-daisyui";

function Main() {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">French Course Details</span>{" "}
        </h1>
        <h2 className="text-lg py-10">
          IDA offers a wide range of well structured courses that cater to
          requirements of the students in an effective manner.
        </h2>
      </div>
    </main>
  );
}

function CourseTiers(args) {
  const tier = [
    {
      name: "Course for school children",
      description:
        " Classes covered 4th to 12th Standard. Individual as well as group classes offered. We cover prescribed syllabus in CBSE and ICSE schools. Special classes for board students.",
      imageSrc: "/Images/children.jpg",
      imageAlt: "Children",
      href: " https://www.linkedin.com/in/yash-gehlot-8749861a7",
    },
    {
      name: "Courses for professionals",
      description:
        "Those who intend to learn French language for professional needs like to settle abroad, or for a job requirement in a time bound manner with special focus on communicative approach and skills.",
      imageSrc: "/Images/professionals.jpg",
      imageAlt: "Garvitha",
      href: "https://www.linkedin.com/in/garvita-gahlot-909930174",
    },
    {
      name: "Preparatory classes for DELF/DALF",
      description:
        "We also run special batches for students and professionals aspiring to clear DELF and DALF exams.",
      imageSrc: "/Images/classes.jpg",
      imageAlt: "Garvitha",
      href: "https://www.linkedin.com/in/garvita-gahlot-909930174",
    },
  ];

  return (
    <div className="md:flex md:justify-around m-auto p-10">
      {tier.map((tier) => (
        <Card
          {...args}
          className="m-10 lg:w-2/6 hover:scale-105 ease-in duration-200"
        >
          <Card.Image src={tier.imageSrc} alt={tier.imageAlt} className="" />
          <Card.Body>
            <Card.Title tag="h2">{tier.name}</Card.Title>
            <p>{tier.description}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default function ContactUs() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <CourseTiers></CourseTiers>
    </div>
  );
}
