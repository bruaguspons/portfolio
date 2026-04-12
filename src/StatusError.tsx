import Layout from "@/layout/Layout";
import TextColor from "@/components/TextColor";
import type { ClassValue } from "clsx";
import Glow from "@/components/Glow";

interface Props {
  statusCode?: number;
  message?: string;
  headerHeight: ClassValue;
}

const StatusError = ({ statusCode, message, headerHeight }: Props): React.ReactNode => {
  const is404 = statusCode === 404;

  const title = is404 ? "404" : statusCode || "Error";
  const heading = is404 ? "Página no encontrada" : "Ocurrió un error";
  const description = is404
    ? "La página que estás buscando no existe o fue movida."
    : message || "Ocurrió un error inesperado.";

  return (
    <Layout className="min-h-dvh" headerHeight={headerHeight} showExtras={false}>
      <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-xl">

          <TextColor className="text-6xl md:text-7xl font-extrabold tracking-tight from-red-500! to-pink-500!">
            Oops!
          </TextColor>

          <h1 className="mt-4 text-5xl font-bold">
            {title}
          </h1>

          <h2 className="mt-4 text-2xl font-semibold">
            {heading}
          </h2>

          <p className="mt-3 text-lg text-neutral-200">
            {description}
          </p>

          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <a
              href="/"
              className="px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Ir al inicio
            </a>

            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-zinc-800/50 transition cursor-pointer"
            >
              Volver atrás
            </button>
          </div>

        </div>
      </div>
      <Glow className="from-red-500/95 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
    </Layout>
  );
};

export default StatusError;
