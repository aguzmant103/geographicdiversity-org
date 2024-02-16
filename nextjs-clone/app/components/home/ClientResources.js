import React from "react";
import ClientResourceRow from "./ClientResourceRow";
import {
  ConsensusClientsData,
  ExecutionClientsData,
} from "../../data/ClientResource";
import Link from "next/link";

const ClientResources = () => {
  return (
    <div className="container">
      <div className="w-full lg:w-[85%] mx-auto py-[7rem]">
        <h1 className="text-[32px] md:text-[40px] leading-[35px] font-[800] opacity-90 text-center mb-[3rem]">
          Client Resources
        </h1>
        <h2 className="text-[26px] font-[600] opacity-9 mb-[10px]">
          Consensus Clients
        </h2>
        <div className="overflow-x-scroll lg:overflow-x-hidden w-full">
          <table className="w-full text-left border border-gray-300">
            <thead>
              <tr>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Client
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Github
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Docs
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Chat
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Status
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Support
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Language
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Donate
                </th>
              </tr>
            </thead>
            <tbody>
              {ConsensusClientsData.map((client, index) => (
                <ClientResourceRow
                  key={index}
                  client={client.name}
                  clientLink={client.clientLink}
                  githubLink={client.githubLink}
                  docsLink={client.docsLink}
                  chatLink={client.chatLink}
                  chatType={client.chatType}
                  status={client.status}
                  support={client.support}
                  language={client.language}
                  donateLink={client.donateLink}
                  donation={client.donation}
                />
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[15px] text-center opacity-80 mt-[10px]">
          * Grandine is not open sourced
        </p>

        <h2 className="text-[26px] font-[600] opacity-9 mb-[10px] mt-[2rem]">
          Execution Clients
        </h2>

        <div className="overflow-x-scroll lg:overflow-x-hidden">
          <table className="w-full text-left border border-gray-300">
            <thead>
              <tr>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Client
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Github
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Docs
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Chat
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Status
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Support
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Language
                </th>
                <th className="border-gray-300 border text-[15px] p-[12px]">
                  Donate
                </th>
              </tr>
            </thead>
            <tbody>
              {ExecutionClientsData.map((client, index) => (
                <ClientResourceRow
                  key={index}
                  client={client.name}
                  clientLink={client.clientLink}
                  githubLink={client.githubLink}
                  docsLink={client.docsLink}
                  chatLink={client.chatLink}
                  chatType={client.chatType}
                  status={client.status}
                  support={client.support}
                  language={client.language}
                  donateLink={client.donateLink}
                  donation={client.donation}
                />
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center mt-[2rem]">
          <span className="font-[700]">Note:</span> Donations made to{" "}
          <Link
            href="https://protocol-guild.readthedocs.io/en/latest/index.html"
            target="_blank"
            className="text-blue-600 underline"
          >
            Protocol Guild
          </Link>{" "}
          are distributed among Ethereum
        </p>
        <p className="text-center">
          protocol contributors, including client teams. All recipients and
          splits can be{" "}
          <Link
            href="https://protocol-guild.readthedocs.io/en/latest/9-membership.html"
            target="_blank"
            className="text-blue-600 underline"
          >
            seen here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ClientResources;
