import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/theme-provider'
import Header from '@/widgets/layout/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Couple Harmony',
	description:
		'Share your thoughts, ideas and feelings with your partner or on your own',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen bg-background antialiased relative',
					inter.className
				)}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<div className='max-w-full px-4 sm:px-6 md:px-8 lg:px-16'>
						<Header />
						<main>{children}</main>
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
