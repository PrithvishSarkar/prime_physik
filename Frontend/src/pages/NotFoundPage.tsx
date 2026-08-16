import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div className="text-[8rem] leading-none font-bold italic text-rose-500">
        404
      </div>
      <div className="text-5xl text-rose-500 font-bold">Page Not Found</div>
      <div className="text-muted-foreground mt-4">Seems like you're lost</div>
      <Link
        to="/"
        className="inline-block mt-16 text-5xl/none text-emerald-800 py-2 px-8 bg-emerald-200 rounded-full font-bold"
      >
        HOME
      </Link>
    </main>
  );
};

export default NotFoundPage;
