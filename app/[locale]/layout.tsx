import type { Metadata } from 'next'
import './globals.css'
import './styles.css'
import { PoppinsRegular } from './fonts'
import { AppContextProvider } from './context/appContext'
import Metrics from './components/metrics'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

//import Cdn4Events from './components/widgets/cdn4events'

export const metadata: Metadata = {
  title: 'Curicaca',
  description: 'Festival Curicaca',
  keywords: ['Curicaca'],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || `http://localhost:${process.env.NEXT_PUBLIC_APP_PORT || "3000"}`),
  authors: [
    { name: 'ABDI', url: 'https://www.abdi.com.br/' },
  ],
  icons: {
    icon:
      {
        url: "/img/favicon.png",
        href: "/img/favicon.png",
        sizes: "32x32",
        type: "image/png"
      }
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curicaca',
    description: 'Curicaca',
    creator: '@abdi_digital',
    images: `${process.env.NEXT_PUBLIC_APP_URL}/img/share.png`,
  },
  openGraph: {
    images: `${process.env.NEXT_PUBLIC_APP_URL}/img/share.png`,
  },
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${PoppinsRegular.className} bg-custom-gray-100`}>
        <NextIntlClientProvider messages={messages}>
          <AppContextProvider>
            <Metrics />
            {/* <Cdn4Events args="open" /> */}
            {children}
          </AppContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
