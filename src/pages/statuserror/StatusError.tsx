import Layout from "@/layout/Layout";
import type { ClassValue } from "clsx";

interface Props {
  statusCode?: number;
  message?: string;
  headerHeight: ClassValue;
}

const StatusError = ({ statusCode, message, headerHeight }: Props): React.ReactNode => {
  return (
    <Layout headerHeight={headerHeight}>
      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">{statusCode || "Error"}</h1>
        <p className="mt-4 text-xl">{message || "An unexpected error occurred."}</p>
      </div>
    </Layout>
  );
};
export default StatusError;