"use client";
import { CodeSyncForm } from "@/components/code-sync-form";
import { StatusCard } from "@/components/status-card";
import { useState } from "react";
import { Tasks } from "../..";

export default function Home() {
  const [tasks, setTasks] = useState<Tasks>({
    fetchingQuestions: {
      status: "idle",
      message: "Fetch questions from codeforces: Idle",
    },
    crawlingSolutions: {
      status: "idle",
      message: "Crawling solutions: Idle",
    },
    addingToGitHub: {
      status: "idle",
      message: "Adding to GitHub: Idle",
    },
  });
  return (
    <main className="flex h-auto flex-col items-center gap-3 p-4 md:p-8">
      <h1 className="text-xl md:text-2xl font-semibold">
        Seamlessly Sync Your Codeforces Solutions to GitHub.
      </h1>
      <div className="flex flex-col md:flex-row justify-between w-full md:w-[65vw] gap-3 md:gap-6">
        <CodeSyncForm />
        <StatusCard tasks={tasks} />
      </div>
    </main>
  );
}
