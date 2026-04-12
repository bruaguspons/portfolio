import StatusError from "./_components/StatusError";

export default function NotFound(): React.ReactNode {
  return <StatusError statusCode={404} />;
}
