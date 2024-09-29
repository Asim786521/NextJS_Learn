// src/components/Layout.js
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ flex: 3, padding: '1rem' }}>
        {children}  
      </main>
      <Footer />
    </div>
  );
}
