import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-14 sm:py-18 lg:py-24">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Check out our latest components.{" "}
              <Link
                href="/allcomponents"
                className="font-semibold text-red-900"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Show Me <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build Your Dream PC Today
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We have got your back. We have all the latest and premium pc
              components, all you need to start your dream pc.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/pcbuilder"
                className="rounded-md bg-red-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Build My PC
              </Link>
              <Link
                href="allcomponents"
                className="text-sm font-semibold leading-6 text-blue-900"
              >
                All Components <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
