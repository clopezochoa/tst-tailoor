import type { Metadata } from 'next'
import 'styles/globals.css';

export const metadata: Metadata = {
  title: 'Tailoor Test',
  description: 'A test to satisfy technical requirements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='bg-white grid'>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
