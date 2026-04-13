import StatusError from "@/components/ui/StatusError";

export default function NotFound(): React.ReactNode {
  return <StatusError statusCode={404} />;
}
