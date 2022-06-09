/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "French Course", href: "#" },
  { name: "Entrance Exam Preparation", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Contact Us", href: "/contact" },
];

function Logo() {
  return (
    <img
      className="w-10 sm:w-10 md:w-20 lg:w-30"
      alt="logo"
      src="/result.svg"
    ></img>
  );
}

export default function Header() {
  return (
    <div className="x-10 relative bg-white">
      <div className=" mx-auto">
        <div className="relative pb-4 bg-white">
          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex justify-between items-center sm:h-10"
                aria-label=""
              >
                <a href="#">
                  <Logo className="sm:w-30" />
                </a>
                <a className="font-ptserif italic sm:text-xl md:text-2xl lg:text-3xl text-indigo-600">
                  Infinite d&apos;Apprentissage
                </a>
                <div className="-mr-2 flex">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </nav>
            </div>
            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute top-0 right-0 p-2 transition transform origin-top-right max-w-md "
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-end">
                    {/* <div>
                          <Logo></Logo>
                        </div> */}
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="false" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  );
}
