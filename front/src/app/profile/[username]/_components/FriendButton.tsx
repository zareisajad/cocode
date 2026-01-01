"use client";

import { useState } from "react";
import { useAuth } from "@context/AuthContext";
import { MainButton } from "@components/ui/MainButton";
import { useRouter } from "next/navigation";

interface FriendButtonProps {
  user: any;
  onFriendsCountChange?: (newCount: number) => void;
}

export default function FriendButton({ user, onFriendsCountChange  }: FriendButtonProps) {
  const { authUser, accessToken } = useAuth();
  const router = useRouter();

  const [requestSent, setRequestSent] = useState(user.request_sent);
  const [requestReceived, setRequestReceived] = useState(user.request_received); 
  const [isFriend, setIsFriend] = useState(user.is_friend);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };


  const handleSendRequest = async () => {
    if (!authUser) {
      router.push("/auth/login");
      return;
    }
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/friends/send/`, {
        method: "POST",
        headers,
        body: JSON.stringify({ receiver_id: user.id }),
      });
      if (res.ok) setRequestSent(true);
  };

  const handleCancelRequest = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/friends/cancel/`, {
        method: "POST",
        headers,
        body: JSON.stringify({ receiver_id: user.id }),
      });
      if (res.ok) setRequestSent(false);
  };

  const handleAcceptRequest = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/friends/accept/`, {
        method: "POST",
        headers,
        body: JSON.stringify({ sender_id: user.id }),
      });
      if (res.ok) {
        setIsFriend(true);
        setRequestReceived(false);

        if (onFriendsCountChange) onFriendsCountChange(user.friends_count + 1);
      }
  };

  const handleRejectRequest = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/friends/reject/`, {
        method: "POST",
        headers,
        body: JSON.stringify({ sender_id: user.id }),
      });
      if (res.ok) setRequestReceived(false);
  };

  let button = (
    <MainButton onClick={handleSendRequest}>
      درخواست دوستی
    </MainButton>
  );

  if (requestReceived) {
    button = (
      <div className="flex flex-col w-full gap-2">
        <MainButton className="bg-green-600 hover:bg-green-600" onClick={handleAcceptRequest} >
          قبول درخواست
        </MainButton>
        <MainButton outline className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white" onClick={handleRejectRequest}>
          رد درخواست
        </MainButton>
      </div>
    );
  } else if (authUser?.username === user.username) {
    button = (
      <MainButton outline>
        ویرایش
      </MainButton>
    );
  } else if (requestSent) {
    button = (
      <MainButton
        className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
        outline
        onClick={handleCancelRequest}
      >
        لغو درخواست
      </MainButton>
    );
  } else if (isFriend) {
    button = (
      <MainButton className="border-yellow-600 hover:bg-yellow-600 text-yellow-600" outline>
        ارسال پیام
      </MainButton>
    );
  }

  return <>{button}</>;
}

