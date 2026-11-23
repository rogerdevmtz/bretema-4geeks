import type { Metadata } from "next";
import { RoomView } from "@/components/RoomView";
import { stays } from "@/data/stays";

type RoomProps = { params: Promise<{ id: string }> };

export const generateMetadata = async ({ params }: RoomProps): Promise<Metadata> => {
  const { id } = await params;
  return { title: stays.find((stay) => stay.id === id)?.title ?? "Alojamiento no disponible" };
};

const RoomPage = async ({ params }: RoomProps) => {
  const { id } = await params;
  return <RoomView key={id} id={id} />;
};
export default RoomPage;
