import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
	title: 'Threads Clone',
	description: 'A Next.js 13 Meta Threads Clone',
};

const inter = Inter({ subsets: ['latin'] });
const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={`inter.className bg-dark-1`}>{children}</body>
			</html>
		</ClerkProvider>
	);
};

export default RootLayout;
