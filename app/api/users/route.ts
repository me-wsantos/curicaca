import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
  const { name, email, password } = await request.json();
  const prisma = new PrismaClient();

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: { name, email, password: hashPassword }
    });

    return NextResponse.json({ user })

  } catch (error) {
    return NextResponse.json({
      res: "Erro no cadastro de usuário!",
      error
    })
  }
}

export async function GET() {
  const prisma = new PrismaClient();

  try {
    const users = await prisma.users.findMany();

    return NextResponse.json({ users })

  } catch (error) {
    return NextResponse.json({
      res: "Erro ao consultar usuários!",
      error
    })
  }
}

export async function PUT(request: NextRequest) {
  const { id, name, email, admin } = await request.json();
  const prisma = new PrismaClient();

  try {
    const user = await prisma.users.update({
      data: { 
        name,
        email,
        admin
      },
      where: { id }
    });

    return NextResponse.json({ user })

  } catch (error) {
    return NextResponse.json({
      res: "Erro ao editar o usuário!",
      error
    })
  }
}