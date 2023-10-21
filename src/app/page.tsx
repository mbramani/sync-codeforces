import { CodeSyncForm } from "@/components/code-sync-form";

export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center gap-3 p-4 md:p-8">
      <h1 className="text-xl md:text-2xl font-semibold">
        Seamlessly Sync Your Codeforces Solutions to GitHub.
      </h1>
      <div className="flex flex-col md:flex-row justify-between w-full md:w-auto gap-3 md:gap-6">
        <CodeSyncForm />
      </div>
    </main>
  );
}
