import Link from 'next/link';
import { Button } from '@/components/ui/button';

const pillars = [
  { title: "🤖 AI Skills Matching", desc: "95% faster job placement" },
  { title: "🎓 Blockchain Credentials", desc: "99% fraud elimination" },
  { title: "📱 Mobile Inspections", desc: "3x faster compliance" },
  { title: "🥽 VR Training", desc: "60% cost reduction" },
  { title: "📊 LMIS Dashboard", desc: "Real-time insights" },
  { title: "🌍 Diaspora Network", desc: "Global expertise transfer" }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
          ELSIP Digital Transformation
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Comprehensive AI-powered platform revolutionizing Ministry of Labor & Skills service delivery
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pillars">
            <Button size="lg" className="px-12 py-6 text-xl">Explore Pillars</Button>
          </Link>
          <Link href="/problem">
            <Button variant="outline" size="lg" className="px-12 py-6 border-2">See Problems</Button>
          </Link>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        {pillars.map((pillar, i) => (
          <div key={i} className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/50">
            <div className="text-4xl mb-4">{pillar.title.split(' ')[0]}</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{pillar.title.slice(2)}</h3>
            <p className="text-gray-600 mb-6">{pillar.desc}</p>
            <Link href="/pillars" className="text-blue-600 font-semibold hover:underline">Learn More →</Link>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="grid md:grid-cols-4 gap-8 text-center mb-20">
        {[
          { num: "70%", label: "Efficiency Increase" },
          { num: "95%", label: "Time Reduction" },
          { num: "60%", label: "Cost Savings" },
          { num: "3x", label: "Training Capacity" }
        ].map((stat, i) => (
          <div key={i} className="p-8 bg-white/50 rounded-2xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">{stat.num}</div>
            <div className="text-gray-700 font-semibold">{stat.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
