import React, { useState } from 'react';
import { BookOpen, Clock, Search, BarChart2, Shuffle, Eye } from 'lucide-react';
import { Line, Bar, Scatter } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const features = [
  {
    id: 1,
    title: "Registrar",
    contentDescription: `Anote o que sente para organizar pensamentos.
Registro automático para emoções intensas (nível ≥ 7 e abertura 3).
Tags geradas automaticamente.`,
    icon: BookOpen
  },
  {
    id: 2,
    title: "Minha Linha do Tempo",
    contentDescription: "Acompanhe suas mudanças emocionais ao longo do tempo para perceber evolução.",
    icon: Clock
  },
  {
    id: 3,
    title: "Meu Perfil",
    contentDescription: "Descubra padrões emocionais mais frequentes e ganhe consciência sobre recorrências.",
    icon: Search
  },
  {
    id: 4,
    title: "Resumo Emocional",
    contentDescription: "Visualize um panorama claro e simples das suas emoções ao longo do tempo.",
    icon: BarChart2
  },
  {
    id: 5,
    title: "Conexões entre Emoções",
    contentDescription: "Veja como a Eco reconhece e relembra emoções passadas para criar conexões significativas.",
    icon: Shuffle
  },
  {
    id: 6,
    title: "Conversar em tempo real",
    contentDescription: "Converse em tempo real com a Eco para encontrar clareza no que sente.",
    icon: Eye
  }
];

const appleChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#1D3557',
        font: { size: 12, weight: '400' }
      }
    },
    tooltip: {
      backgroundColor: '#FFFFFF',
      titleColor: '#1D3557',
      bodyColor: '#4B5563',
      borderColor: '#E5E7EB',
      borderWidth: 1
    }
  },
  scales: {
    x: {
      grid: { color: 'rgba(0,0,0,0.05)' },
      ticks: { color: '#6B7280', font: { size: 11 } }
    },
    y: {
      grid: { color: 'rgba(0,0,0,0.05)' },
      ticks: { color: '#6B7280', font: { size: 11 } }
    }
  }
};

const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(1);
  const active = features.find(f => f.id === activeFeature);

  return (
    <section id="recursos" className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F8F6FA]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1D3557] mb-3 sm:mb-4">
            Explore os <span className="text-[#275C7A] font-semibold">recursos</span> da Eco
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-500 max-w-2xl mx-auto">
            Ferramentas para escrever, refletir e acompanhar suas emoções com mais clareza.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          <div className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-3xl shadow p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`flex items-center w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-2xl transition
                  ${activeFeature === feature.id
                    ? 'bg-white/70 shadow-md border border-[#E8E3F5]'
                    : 'hover:bg-white/40'
                  }`}
              >
                <div
                  className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 shadow-sm mr-3
                    ${activeFeature === feature.id
                      ? 'bg-[#275C7A]/90'
                      : 'bg-white/20'
                    }`}
                >
                  <feature.icon
                    size={18}
                    strokeWidth={1.5}
                    className={activeFeature === feature.id ? 'text-white' : 'text-[#1D3557]/80'}
                  />
                </div>
                <span
                  className={`text-sm sm:text-base md:text-lg font-medium transition
                    ${activeFeature === feature.id ? 'text-[#275C7A]' : 'text-[#1D3557]/80'}
                  `}
                >
                  {feature.title}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/20 shadow p-5 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#275C7A] mb-3 sm:mb-4">
              {active?.title}
            </h3>
            <p className="text-gray-600 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
              {active?.contentDescription}
            </p>

            {active?.id === 1 && (
              <div className="space-y-4">
                <div className="bg-white/60 backdrop-blur rounded-2xl p-4 sm:p-5 shadow border border-gray-100">
                  <h4 className="font-medium text-[#275C7A] mb-2">Registro Pessoal</h4>
                  <p className="text-sm text-gray-700">
                    "Hoje me senti confuso, tentando entender o que sinto aqui dentro. Escrevi para clarear."
                  </p>
                  <div className="flex flex-wrap mt-3 gap-2">
                    <span className="bg-[#275C7A]/20 text-[#275C7A] text-xs px-2 py-1 rounded-full">Reflexão</span>
                    <span className="bg-[#F7CAC9]/20 text-[#275C7A] text-xs px-2 py-1 rounded-full">Introspecção</span>
                  </div>
                  <p className="mt-3 text-xs text-gray-500">
                    *Entradas com intensidade ≥ 7 e abertura 3 são registradas automaticamente, com tags sugeridas.*
                  </p>
                </div>
              </div>
            )}

            {active?.id === 2 && (
              <div className="h-64 sm:h-72 md:h-80">
                <Line
                  data={{
                    labels: ['Jun 24', 'Jun 27', 'Jun 30', 'Jul 3', 'Jul 6'],
                    datasets: [
                      {
                        label: 'Emocional',
                        data: [5, 8, 3, 10, 6],
                        borderColor: '#275C7A',
                        backgroundColor: 'rgba(39,92,122,0.15)',
                        borderWidth: 2,
                        tension: 0.4
                      }
                    ]
                  }}
                  options={appleChartOptions}
                />
              </div>
            )}

            {active?.id === 3 && (
              <div className="h-64 sm:h-72 md:h-80">
                <Bar
                  data={{
                    labels: ['Alegria', 'Tristeza', 'Ansiedade'],
                    datasets: [{
                      label: 'Ocorrências',
                      data: [14, 11, 8],
                      backgroundColor: ['rgba(39,92,122,0.6)', 'rgba(247,202,201,0.6)', 'rgba(191,216,184,0.6)'],
                      borderRadius: 8,
                      barPercentage: 0.6
                    }]
                  }}
                  options={appleChartOptions}
                />
              </div>
            )}

            {active?.id === 4 && (
              <div className="p-4 sm:p-5 rounded-2xl bg-white/60 backdrop-blur shadow border border-gray-100">
                <h4 className="font-medium text-[#275C7A] mb-2">Resumo Emocional</h4>
                <p className="text-sm text-gray-600">
                  Veja de forma clara e resumida suas variações emocionais ao longo do tempo.
                </p>
              </div>
            )}

            {active?.id === 5 && (
              <div className="p-4 sm:p-5 rounded-2xl bg-white/60 backdrop-blur shadow border border-gray-100">
                <h4 className="font-medium text-[#275C7A] mb-2">Conexões entre Emoções</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Veja como a Eco reconhece e relembra emoções passadas para ajudar você a perceber padrões e agir diferente.
                </p>
                <ul className="list-disc ml-5 text-gray-700 text-sm">
                  <li>Trabalho → Ansiedade → Reflexão</li>
                  <li>Relacionamento → Alegria → Gratidão</li>
                </ul>
              </div>
            )}

            {active?.id === 6 && (
              <div className="bg-white/60 backdrop-blur p-4 sm:p-5 rounded-2xl shadow border border-gray-100 space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <p className="text-sm text-gray-700">Você: "Hoje estou me sentindo ansioso."</p>
                </div>
                <div className="bg-[#275C7A]/10 rounded-lg p-3 shadow-sm border border-gray-100">
                  <p className="text-sm text-[#275C7A] italic">Eco: "Entendi. Quer explorar o que está causando isso comigo agora?"</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
