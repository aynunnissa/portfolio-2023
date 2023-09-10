import '@/styles/main.scss';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import 'bootstrap-icons/font/bootstrap-icons.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Aynun Nissa',
  description: 'Aynun Nissa, Software Engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light-blue`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
