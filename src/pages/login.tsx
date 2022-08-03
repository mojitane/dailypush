import { Label } from "@radix-ui/react-label";
import { NextPage } from "next";
import Card from "../components/Card";

const Login: NextPage = () => {
  return (
    <div className="bg-gray-500 h-screen">
      <div className="mr-auto ml-auto pt-64 max-w-md relative">
        <Card>
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to DailyPush</h5>
            <div>
              <Label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </Label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              ></input>
            </div>
            <div>
              <Label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your password
              </Label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              ></input>
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  ></input>
                </div>
                <Label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remember me
                </Label>
              </div>
              <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                Create account
              </a>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
