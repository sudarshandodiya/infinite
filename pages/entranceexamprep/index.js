import Header from "../Header";
import { Card, Button } from "react-daisyui";

function Main() {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">
            MA Entrance Examination Preparatory Course (CUET PG)
          </span>{" "}
        </h1>
        <h2 className="text-lg py-10">
          We, here at IDA, offer special entrance exam preparation courses for
          MA French level at universities like JNU, DU, EFLU, etc. <br></br>In
          our preparatory course, you will find the entire syllabus covered and
          accompanied by regular tests.
        </h2>
      </div>
    </main>
  );
}

export default function ContactUs() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
    </div>
  );
}
