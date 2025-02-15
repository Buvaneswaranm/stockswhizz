import React, { useState } from 'react';
import { TrendingUp, Users, Clock, ChevronRight, ArrowRight } from 'lucide-react';

function App() {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const features = [
    {
      id: 'expert',
      title: 'Expert-Backed Recommendations',
      description: 'Tailored to your financial goals and risk appetite.',
      image: 'https://i.postimg.cc/RFkRGtms/7-Key-Benefits-of-Financial-Advisory-Services.jpg',
      icon: <TrendingUp className="w-8 h-8" />,
      content: 'Our expert financial advisors analyze market trends, economic indicators, and your personal financial goals to provide tailored investment recommendations. We consider factors like risk tolerance, investment timeline, and market conditions to help you make informed decisions. Our recommendations are backed by thorough research and years of market experience.'
    },
    {
      id: 'updates',
      title: 'Free Market Updates',
      description: 'Regular updates to keep you ahead of market changes.',
      image: 'https://i.postimg.cc/9QLYKKVq/Music-Player.jpg',
      icon: <Users className="w-8 h-8" />,
      content: 'Stay ahead with our comprehensive market updates delivered daily to your inbox. Our updates include:\n\n• Real-time market analysis\n• Stock recommendations\n• Economic news impact\n• Sector-specific insights\n• Investment opportunities\n• Risk alerts and mitigation strategies'
    },
    {
      id: 'support',
      title: 'Lifetime Support',
      description: 'Ask anytime—our experts are here to guide you.',
      image: 'https://i.postimg.cc/qM4QWksR/1.jpg',
      icon: <Clock className="w-8 h-8" />,
      content: "Get unlimited access to our expert support team throughout your investment journey. Our support includes:\n\n• 24/7 query resolution\n• Portfolio review sessions\n• Market guidance\n• Risk assessment\n• Investment strategy adjustments\n• Regular performance tracking"
    }
  ];

  const handleLearnMore = (feature: typeof features[0]) => {
    setModalContent({
      title: feature.title,
      content: feature.content
    });
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <div className="absolute inset-0 bg-[url('https://i.postimg.cc/pdyJHCXc/Strategies-for-capital-markets.jpg')] bg-cover bg-center" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-32">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            One Right Investment Can Grow Your Wealth
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            One wrong choice? That could cost you much more.
          </p>
          <button 
            className="group bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-yellow-500 transition-all transform hover:scale-105"
            onClick={() => {
              setModalContent({
                title: 'Premium Investment Advisory Package',
                content: 'Start your successful investment journey with our comprehensive service:\n\n• Personalized investment strategy\n• Risk profiling and portfolio allocation\n• Regular market updates and alerts\n• Quarterly portfolio review sessions\n• Access to premium research reports\n• Tax-saving investment advice\n• Dedicated relationship manager\n\nPremium Advisory Package: ₹9,999/year\n\nBonus: Get 3 months of extended support FREE!'
              });
              setShowModal(true);
            }}
          >
            Get Your Recommendation Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="relative group"
                onMouseEnter={() => setIsHovered(feature.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-4 text-yellow-400">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                    <button 
                      className={`mt-4 flex items-center gap-2 text-yellow-400 transition-opacity duration-300 ${isHovered === feature.id ? 'opacity-100' : 'opacity-0'}`}
                      onClick={() => handleLearnMore(feature)}
                    >
                      <span>Learn more</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Why Choose Us?</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Investing in stocks, mutual funds, or trading can be overwhelming. With our expert-backed recommendations, 
                you can make informed decisions and avoid costly mistakes. We provide personalized advice, regular updates, 
                and lifetime support to help you achieve your financial goals.
              </p>
              <button 
                className="text-yellow-400 flex items-center gap-2 group"
                onClick={() => {
                  setModalContent({
                    title: 'Our Investment Approach',
                    content: 'At StocksWhizz, we follow a data-driven approach to investment advisory:\n\n1. Goal Analysis\n   • Understanding your financial objectives\n   • Timeline planning\n   • Risk capacity assessment\n\n2. Market Research\n   • Technical analysis\n   • Fundamental research\n   • Global market trends\n\n3. Portfolio Strategy\n   • Asset allocation\n   • Diversification planning\n   • Risk management\n\n4. Regular Monitoring\n   • Performance tracking\n   • Market impact analysis\n   • Strategy adjustments\n\n5. Continuous Support\n   • Expert consultation\n   • Query resolution\n   • Strategy refinement'
                  });
                  setShowModal(true);
                }}
              >
                <span>Discover our approach</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://i.postimg.cc/kgJyjqrm/Benefits-and-Considerations-of-Mutual-Funds-Excelebiz.jpg"
                alt="Mutual Funds Investment"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-400 text-black py-6 px-4">
        <div className="max-w-7xl mx-auto text-center font-semibold">
          © 2024 StocksWhizz. All rights reserved.
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">{modalContent.title}</h2>
            <div className="text-gray-300 whitespace-pre-line">
              {modalContent.content}
            </div>
            <button
              className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors w-full"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;