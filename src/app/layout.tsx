import type { Metadata } from 'next'
import 'styles/globals.css';
import { Provider, defaultOptions } from './provider';

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
        <Provider options={defaultOptions}>
          <div>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
