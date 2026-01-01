import { PAGE_TITLES } from "../constants";

export function generateMetadata() {
  return { title: PAGE_TITLES.chats };
}

export default function ChatsPage() {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-900 text-gray-400">
      روی یکی از چت ها ضربه بزن
    </div>
  );
}

