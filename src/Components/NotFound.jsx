import { Link } from "react-router-dom";

// ─── صفحة 404 ──────────────────────────────────────────
const NotFound = () => (
  <section className="min-h-[70vh] flex flex-col items-center justify-center gap-4 px-6 pt-[140px] pb-20 text-center text-primary dark:text-white bg-white dark:bg-gray-900">
    <p className="text-6xl font-bold text-[#0C96E2]">404</p>

    <h1 className="text-2xl md:text-3xl font-semibold">Page not found</h1>

    <p className="text-gray-500 dark:text-gray-400 max-w-md">
      The page you're looking for doesn't exist or has been moved.
    </p>

    <Link
      to="/"
      className="mt-4 px-6 py-3 rounded-lg bg-[#0C96E2] text-white font-medium hover:opacity-90 transition-opacity"
    >
      Back to Home
    </Link>
  </section>
);

export default NotFound;
