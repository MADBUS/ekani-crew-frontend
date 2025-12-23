import ChatRoomClient from './ChatRoomClient';

interface Props {
  params: Promise<{ roomId: string }>;
}

export default async function ChatRoomPage({ params }: Props) {
  const { roomId } = await params;
  return <ChatRoomClient roomId={roomId} />;
}
