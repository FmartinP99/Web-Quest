import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-7xl font-extrabold text-gray-900">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        The page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800"
      >
        Go back home
      </Link>
    </div>
  );
}
