import { db } from "@/lib/db";
import { PrismaClient } from "@prisma/client";
type Task = {
  id: number;
  title: string;
};

const prisma = new PrismaClient();

export default async function Home() {
  const tasks: Task[] = await prisma.task.findMany();

  return (
    <div>
      {tasks.map((task: Task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>    
  );
}
