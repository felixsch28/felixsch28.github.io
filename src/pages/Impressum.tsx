import Header from '@/components/Header';
import Impressum from '@/components/Impressum';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Impressum />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
