import Header from "../Header";

function Main() {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Contact Us</span>{" "}
        </h1>
      </div>
    </main>
  );
}

function Body() {
  return (
    <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl">
        For discovering the plethora of career prospects here at IDA, contact us
        at:
      </h2>
      <a
        className="text-2xl text-purple-600 italic"
        href="mailto:idapprentissage.21@gmail.com"
      >
        idapprentissage.21@gmail.com
      </a>
    </div>
  );
}

function Founder() {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Founders</span>{" "}
        </h1>
      </div>
    </main>
  );
}

function Details() {
  return (
    <div className="text-2xl mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="">
        Garvita Gahlot:
        <a className="text-purple-600 italic px-5" href="tel:+919910761994">
          +919910761994
        </a>
      </h2>

      <h2 className="">
        Yash Gehlot:
        <a className="text-purple-600 italic px-5" href="tel:+917970083120">
          +917970083120
        </a>
      </h2>
    </div>
  );
}

export default function ContactUs() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Body></Body>
      <Founder></Founder>
      <Details></Details>
    </div>
  );
}
