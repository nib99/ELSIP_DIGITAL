export default function Pillars() {
  const pillars = [
    "AI-Powered Skills Matching Engine",
    "Blockchain-Based Credential Verification",
    "Mobile-First Workplace Inspections",
    "VR/AR Immersive Training Platform",
    "Real-Time Labor Market Intelligence System",
    "Diaspora Knowledge Transfer Network"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Six Transformative Pillars
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pillars.map((p, i) => (
          <div key={i} className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl hover:scale-105 transition-all border">
            <div className="text-6xl mb-6">0{i + 1}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{p}</h3>
            <p className="text-gray-600">Fully integrated AI & blockchain solution</p>
          </div>
        ))}
      </div>
    </div>
  );
                     }
