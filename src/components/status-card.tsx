import { Tasks, Task } from "../..";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Circle, Loader2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

function TaskIcon({ status }: { status: Task["status"] }) {
  return status === "idle" || status == "pending" ? (
    <Circle className="m-px h-5 w-5" />
  ) : status === "loading" ? (
    <Loader2 className="m-px h-5 w-5 animate-spin" />
  ) : status === "success" ? (
    <CheckCircle className="m-px h-5 w-5" />
  ) : (
    <XCircle className="m-px h-5 w-5" />
  );
}

export function StatusCard({ tasks }: { tasks: Tasks }) {
  let tasksContent: JSX.Element[] = [];

  for (const key in tasks) {
    let task: Task = tasks[key as keyof Tasks];
    tasksContent.push(
      <div
        className={cn(
          "flex gap-1 md:gap-2 items-start md:space-x-2 p-2 rounded-md transition-all h-fit",
          task.status === "error" && "text-red-600",
          task.status === "success" && "text-green-600",
          (task.status === "idle" || task.status == "pending") &&
            "text-slate-600"
        )}
        key={key.toLowerCase() + Date.now().toString()}
      >
        <TaskIcon status={task.status} />
        <p>{task.message}</p>
      </div>
    );
  }
  return (
    <Card className="w-full md:w-1/2">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Request Status:</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 p-2 md:py-4 md:p-6">
        {tasksContent}
      </CardContent>
    </Card>
  );
}
