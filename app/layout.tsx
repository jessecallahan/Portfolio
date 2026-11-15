// app/layout.tsx
import type { Metadata } from "next";
import { AppRouterCacheProvider } from
  "@mui/material-nextjs/v16-appRouter";
import NavBar from "./components/navbar";
import styles from './layout.module.css';
import './globals.css';

export const metadata: Metadata = {
  title: "Jesse's Portfolio",
  description: "A site of professional work of Jesse Callahan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={styles.main} >
        <AppRouterCacheProvider>
          

            <nav className={styles.navbar}>
              <NavBar />
            </nav>

            <main>
              <div className={styles.content}>
                {children}
              </div>
            </main>


         
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}