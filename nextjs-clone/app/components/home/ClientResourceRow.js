import React from "react";
import Link from "next/link";
import { FaGithub, FaDiscord, FaTelegram } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { HiOutlineBookOpen } from "react-icons/hi2";
import Image from "next/image";

const ClientResourceRow = ({
  client,
  clientLink,
  githubLink,
  docsLink,
  chatLink,
  chatType,
  status,
  support,
  language,
  donateLink,
  donation,
}) => {
  return (
    <tr>
      <td className="px-4 py-3 border border-gray-300">
        <Link
          href={clientLink}
          target="_blank"
          className="flex items-center text-blue-600 font-[600] underline"
        >
          {client}{" "}
          <GoLinkExternal className="text-[14px] text-black opacity-70" />{" "}
        </Link>
      </td>
      <td className="px-4 py-3 border border-gray-300">
        <Link
          href={githubLink}
          target="_blank"
          className="flex items-center gap-[3px]"
        >
          <FaGithub className="text-[24px]" />
          <GoLinkExternal className="text-[14px] text-black opacity-70" />
        </Link>
      </td>
      <td className="px-4 py-3 border border-gray-300">
        <Link
          href={docsLink}
          target="_blank"
          className="flex items-center gap-[3px]"
        >
          <HiOutlineBookOpen className="text-[28px]" />
          <GoLinkExternal className="text-[14px] text-black opacity-70" />
        </Link>
      </td>
      <td className="px-4 py-3 border border-gray-300">
        {chatLink ? (
          <Link
            href={chatLink}
            target="_blank"
            className="flex items-center gap-[3px]"
          >
            {chatType === "discord" ? (
              <FaDiscord className="text-[28px]" />
            ) : (
              <FaTelegram className="text-[28px]" />
            )}

            <GoLinkExternal className="text-[14px] text-black opacity-70" />
          </Link>
        ) : (
          <p>-</p>
        )}
      </td>
      <td className="px-4 py-3 border border-gray-300">{status}</td>
      <td className="px-4 py-3 border border-gray-300">{support}</td>
      <td className="px-4 py-3 border border-gray-300">{language}</td>
      <td className="px-4 py-3 border border-gray-300">
        {donateLink ? (
          <Link
            href={donateLink}
            target="_blank"
            className="flex items-center gap-[3px]"
          >
            {donation === 1 ? (
              <Image src="/images/donate.png" width={25} height={25} alt="" />
            ) : (
              <Image src="/images/donate2.ico" width={25} height={25} alt="" />
            )}

            <GoLinkExternal />
          </Link>
        ) : (
          <p>-</p>
        )}
      </td>
    </tr>
  );
};

export default ClientResourceRow;
