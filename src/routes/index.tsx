import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HomeCard } from "../components/HomeCard";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/3255761/pexels-photo-3255761.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="#"
        className="-z-10 absolute object-cover h-full w-full"
      />

      <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden absolute bottom-0 mb-4 mr-4 right-0">
        <div className="flex flex-col h-[300px]">
          <div className="px-4 py-3 border-b dark:border-zinc-700">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                Chatbot Assistant
              </h2>
              <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Online
              </div>
            </div>
          </div>
          <div
            className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2"
            id="chatDisplay"
          >
            <div className="chat-message self-end bg-blue-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
              Hello! How can I assist you today?
            </div>
            <div className="chat-message self-start bg-zinc-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
              Hello! I need a Chatbot!
            </div>
          </div>
          <div className="px-3 py-2 border-t dark:border-zinc-700">
            <div className="flex gap-2">
              <input
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm"
                id="chatInput"
                type="text"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
                id="sendButton"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90vw] ">
        <div className="text-3xl font-bold text-center font-mono  mt-5">
          CHOOSE YOUR ROLE...
        </div>
        <div className="p-2   px-28 flex justify-around items-center relative top-20 ">
          <a href="/login/college">
            <HomeCard
              Role={"College"}
              Content={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, blanditiis."
              }
              url={
                "https://img.freepik.com/free-vector/college-students-concept-illustration_114360-13745.jpg?uid=R156288701&ga=GA1.1.1836323769.1721458537&semt=ais_hybrid"
              }
            />
          </a>
          <a href="/login/inspector">
            <HomeCard
              Role={"Inspector"}
              Content={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, blanditiis."
              }
              url={
                "https://img.freepik.com/free-vector/product-quality-control-abstract-concept_335657-3107.jpg?uid=R156288701&ga=GA1.1.1836323769.1721458537&semt=ais_hybrid"
              }
            />
          </a>
        </div>
      </div>
    </>
  );
}
