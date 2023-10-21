"use client";

import { z } from "zod";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const codeSyncFormSchema = z.object({
  codeforcesUsername: z.string().min(1),
  githubUsername: z.string().min(1),
  githubRepo: z.string().min(1),
  githubAccessToken: z.string().min(1),
});

export function CodeSyncForm() {
  const form = useForm<z.infer<typeof codeSyncFormSchema>>({
    resolver: zodResolver(codeSyncFormSchema),
    defaultValues: {
      codeforcesUsername: "",
      githubUsername: "",
      githubRepo: "",
      githubAccessToken: "",
    },
  });

  function onSubmit(values: z.infer<typeof codeSyncFormSchema>) {
    console.log(values);
  }

  return (
    <Card className="w-full md:w-1/2">
      <CardContent className="grid gap-4 py-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="codeforcesUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Codeforces Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Codeforces Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="githubUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Github Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="githubRepo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github Repo</FormLabel>
                  <FormControl>
                    <Input placeholder="Github Repository Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="githubAccessToken"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github AccessToken</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Github AccessToken" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full">Start</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
