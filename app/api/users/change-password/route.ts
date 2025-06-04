import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

export async function PUT(request: NextRequest) {
  const { id, password } = await request.json()
  const prisma = new PrismaClient();

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.update({
      data: { password: hashPassword },
      where: { id }
    });

    return NextResponse.json({ user })

  } catch (error) {
    return NextResponse.json({
      res: "Erro no cadastro de usuário!",
      error
    })
  }
}