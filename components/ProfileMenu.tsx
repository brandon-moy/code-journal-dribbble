"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SessionInterface } from "@/common.types";

const ProfileImage = ({
  session,
  width,
  height,
}: {
  session: SessionInterface;
  width: string;
  height: string;
}) => {
  if (session?.user?.avatarUrl) {
    return (
      <Image
        src={session?.user?.avatarUrl}
        className={`rounded-full ${width} ${height}`}
        width={80}
        height={80}
        alt="profile Image"
      />
    );
  } else if (session?.user?.image) {
    return (
      <Image
        src={session?.user?.image}
        className="rounded-full"
        width={80}
        height={80}
        alt="profile Image"
      />
    );
  }
};

const ProfileMenu = ({ session }: { session: SessionInterface }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flexCenter z-10 flex-col relative">
      <Menu as="div">
        <Menu.Button
          className="flexCenter"
          onMouseEnter={() => setOpenModal(true)}
        >
          <ProfileImage session={session} width="w-[60px]" height="h-[60px]" />
        </Menu.Button>

        <Transition
          show={openModal}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            static
            className="flexStart profile_menu-items"
            onMouseLeave={() => setOpenModal(false)}
          >
            <div className="flex flex-col items-center gap-y-4">
              <ProfileImage
                session={session}
                width="w-[80px]"
                height="h-[80px]"
              />
              <p className="font-semibold">{session?.user?.name}</p>
            </div>

            <div className="flex flex-col gap-3 pt-10 items-start w-full">
              <Menu.Item>
                <Link
                  href={`/settings/${session?.user?.id}`}
                  className="text-sm"
                >
                  Settings
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href={`/profile/${session?.user?.id}`}
                  className="text-sm"
                >
                  Profile
                </Link>
              </Menu.Item>
            </div>
            <div className="w-full flexStart border-t border-nav-border mt-5 pt-5">
              <Menu.Item>
                <button
                  type="button"
                  className="text-sm"
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
