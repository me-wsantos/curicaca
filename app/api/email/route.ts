import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {

  const { nome, email, cargo, empresa, lgpd } = await request.json()

  const nodemailer = require("nodemailer")
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    },
    tls: { rejectUnauthorized: false }
  })

  const mailOptions = {
    from: '"Curicaca"<noreply@abdi.com.br>',
    to: process.env.MAIL_TO,
    subject: 'Novo cadastro Curicaca',
    html: `<strong>Nome</strong>: ${ nome } <br>
          <strong>E-mail</strong>: ${ email } <br>
          <strong>Cargo</strong>: ${ cargo } <br>
          <strong>Empresa</strong>: ${ empresa } <br>
          <br><br>
          Esse é um e-mail automático. Por favor, não responda.
          `
  }
  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ result: true })
  } catch (error) {
    return NextResponse.json({
      res: "Erro ao enviar o email!",
      error
    })
  }
}
