import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export async function POST(request: NextRequest) {
  const { nome, email, cargo, empresa } = await request.json()
  const prisma = new PrismaClient();

  try {
    const register = await prisma.registers.create({
      data: { nome, email, cargo, empresa }
    });

    return NextResponse.json({ register })
    
  } catch (error) {
    return NextResponse.json({
      res: "Erro no cadastro!",
      error
    })
  }
}

export async function GET() {
  const prisma = new PrismaClient();

  try {
    const registers = await prisma.registers.findMany();

    return NextResponse.json({ registers })
    
  } catch (error) {
    return NextResponse.json({
      res: "Erro ao consultar cadastros!",
      error
    })
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  const prisma = new PrismaClient();

  try {
    if (!id) {
      throw new Error("ID is required");
    }

    const register = await prisma.registers.delete({
      where: { id: Number(id) }
    });

    return NextResponse.json({ register })
    
  } catch (error) {
    return NextResponse.json({
      res: "Erro ao deletar cadastro!",
      error
    })
  }

}