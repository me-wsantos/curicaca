import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  const prisma = new PrismaClient();

  try {
    const user = await prisma.users.findFirst({
      where: { email }
    });

    if (!user) {
      return NextResponse.json({ status: false, message: "Usuário não encontrado" })
    }
    
    const compare = await bcrypt.compare(password, user?.password);

    if (!compare) {
      return NextResponse.json({ status: false, message: "Usuário/senha incorreto" })
    }
    
    // Remove a senha do usuário antes de retornar
    const { password: _, ...userReturn } = user;

    return NextResponse.json({ status: true, user: userReturn })

  } catch (error) {
    return NextResponse.json({
      res: "Erro no login de usuário!",
      error
    })
  }
}