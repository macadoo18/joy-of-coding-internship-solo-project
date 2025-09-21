import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const createTaskSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
  });

  const validation = createTaskSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error, { status: 400 });

  const newTask = await prisma.task.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newTask, { status: 201 });
}
