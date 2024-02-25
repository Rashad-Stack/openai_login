import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 justify-center">
      <div className="py-4">
        <h1 className="text-3xl font-bold">Welcome back</h1>
      </div>
      <form action="">
        <div className="w-full sm:w-72 mb-3">
          <input
            type="text"
            className="border-1 border outline-none p-3 border-gray-400 w-full rounded-md placeholder:text-gray-300 text-sm"
            placeholder="Email Address"
          />
        </div>
        <div className="w-full sm:w-72 mb-4">
          <input
            type="text"
            className="border-1 border outline-none p-3 border-gray-400 w-full rounded-md placeholder:text-gray-300 text-sm"
            placeholder="Password"
          />
        </div>
        <div className="w-full sm:w-72 mb-3">
          <button className="outline-none p-3 w-full rounded-md text-sm bg-blue-500 text-white">
            Continue
          </button>
        </div>
        <div className="w-full sm:w-72 mb-6 text-center space-y-2">
          <Link
            href="#"
            className="outline-none p-3 w-full rounded-md text-sm text-blue-500 ">
            Forgot your password?
          </Link>
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="#"
              className="outline-none w-full rounded-md text-sm text-blue-500 ">
              Sign up
            </Link>
          </p>
        </div>
        <div className="w-full sm:w-72 mb-3 flex items-center gap-2">
          <span className="block border-b-2 border-gray-300 w-full" />
          <p className="text-center text-black uppercase text-xs font-medium">
            OR
          </p>
          <span className="block border-b-2 border-gray-300 w-full" />
        </div>

        <div className="w-full sm:w-72 mb-3 space-y-3">
          <button className="text-start outline-none p-3 w-full rounded-md text-sm border border-gray-400 text-black flex items-center gap-4">
            <Image src="/google.svg" width={25} height={25} alt="google" />
            Continue with Google
          </button>
          <button className="text-start outline-none p-3 w-full rounded-md text-sm border border-gray-400 text-black flex items-center gap-4">
            <Image
              src="/microsoft-icon.svg"
              width={20}
              height={20}
              alt="google"
            />
            Continue with Microsoft account
          </button>
          <button className="text-start outline-none p-3 w-full rounded-md text-sm border border-gray-400 text-black flex items-center gap-4">
            <Image src="/apple-icon.svg" width={25} height={25} alt="google" />
            Continue with Apple
          </button>
        </div>
      </form>
    </main>
  );
}
