import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from './components/SessionProvider';
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const inter = Inter({ subsets: ["latin"] });

const RootLayout = async ({ children }) => {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

export default RootLayout;