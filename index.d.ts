export interface Task {
  status: "idle" | "loading" | "pending" | "success" | "error";
  message: string;
}

export interface Tasks {
  fetchingQuestions: Task;
  crawlingSolutions: Task;
  addingToGitHub: Task;
}
