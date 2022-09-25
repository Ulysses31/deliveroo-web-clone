import { Link, useLocation } from "react-router-dom";

export default function MainNavigation() {
  const location = useLocation().pathname;

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://links.papareact.com/wru"
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to={"/"}
                  aria-current="page"
                  className={`${
                    location === "/" ? "bg-gray-300" : ""
                  } hover:bg-gray-300 p-2 rounded`}
                >
                  Home
                </Link>

                <Link
                  to={"/restaurant"}
                  className={`${
                    location === "/restaurant" ? "bg-gray-300" : ""
                  } hover:bg-gray-300 p-2 rounded`}
                >
                  Restaurant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
