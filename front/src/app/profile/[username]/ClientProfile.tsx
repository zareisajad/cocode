"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import Avatar from "@components/ui/Avatar";
import Badge from "@components/ui/Badge";
import { Github, Globe, Instagram } from "@/app/components/ui/icons";
import FriendButton from "./_components/FriendButton";

type ClientProfileProps = {
  username: string;
};

export default function ClientProfile({ username }: ClientProfileProps) {
  const { accessToken, authUser } = useAuth();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchProfile() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${username}/`, {
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
        credentials: "include",
      });
      const data = await res.json();
      setUser(data);
    }

    fetchProfile();
  }, [username, accessToken]);

  if (!user) return <div>کاربری با این نام پیدا نشد</div>;

  return (
    <section className="pb-10 border-b border-gray-700">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
        <div className="flex items-center gap-6">
          <Avatar src={user?.profile?.avatar} imgClassName="w-36 h-36">
            <Badge text="champion" />
          </Avatar>
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-2xl font-bold mb-2">{user?.profile?.public_name}</h2>
            <span className="">۳۲ روز</span>
            <p className="text-sm mt-1">در حال یادگیری: پایتون</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 w-full md:w-auto">
          <div className="flex justify-around w-full md:w-64 text-center">
            <div>
              <span className="font-bold block">{user.friends_count ?? 0}</span>
              <span className="text-xs text-gray-400">دوست</span>
            </div>
            <div>
              <span className="font-bold block">42</span>
              <span className="text-xs text-gray-400">مهارت</span>
            </div>
            <div>
              <span className="font-bold block">2</span>
              <span className="text-xs text-gray-400">گروه</span>
            </div>
          </div>

         <FriendButton
            user={user}
            onFriendsCountChange={(newCount) =>
              setUser((prev) => ({ ...prev, friends_count: newCount }))
            }
          />
        </div>
      </div>

      <div className="md:flex-row mt-7 flex flex-col justify-between w-full flex-wrap gap-4">
        <div className="text-gray-300">{user.profile.bio}</div>
        <div className="flex items-center gap-3">
          {user.profile.links.map((link: any) => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label.toLowerCase() === "instagram" && <Instagram />}
              {link.label.toLowerCase() === "github" && <Github />}
              {link.label.toLowerCase() === "website" && <Globe />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

