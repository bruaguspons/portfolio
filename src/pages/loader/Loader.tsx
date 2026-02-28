import Layout from "@/layout/Layout";
import type { ClassValue } from "clsx";

interface Props {
  headerHeight: ClassValue;
}

const Loader = ({ headerHeight }: Props): React.ReactNode => {
  return (
    <Layout className="min-h-screen" headerHeight={ headerHeight } showExtras={false}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-zinc-300" />
      </div>
    </Layout>
  );
};
export default Loader;