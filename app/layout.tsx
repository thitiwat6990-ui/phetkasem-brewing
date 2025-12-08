import type { Metadata } from "next";
import HeaderPage from './header/header'
import FooterPage from './footer/footer'
import './layout.css';

export const metadata: Metadata = {
  title: "Phetkasem Brewing Co., Ltd.", 
  description: "Phetkasem Brewing Company's official website.",
};

export default function layoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="app-container">
        <HeaderPage/>
        
        <main>
          {children}
        </main>
        <footer style={{marginTop:'5000px'}}>
        <FooterPage/>
        </footer>
        </div> 
      </body>
    </html>
  );
}





