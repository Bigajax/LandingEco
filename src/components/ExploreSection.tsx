import React, { useState } from 'react';
import { BookOpen, Clock, Search, BarChart2, Shuffle, Eye } from 'lucide-react';
import {
  Line,
  Bar,
  Scatter
} from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const features = [
  {
    id: 1,
    title: "Registro de Memórias",
    contentDescription: "Escreva o que sente. A Eco te ajuda a organizar pensamentos e identificar padrões importantes para refletir depois.",
    icon: BookOpen
  },
  {
    id: 2,
    title: "Linha do Tempo Emocional",
    contentDescription: "Acompanhe suas emoções ao longo do tempo. Veja mudanças e ciclos para reconhecer como você está evoluindo.",
    icon: Clock
  },
  {
    id: 3,
    title: "Perfil Emocional",
    contentDescription: "Entenda quais emoções são mais presentes em você. Reconheça padrões e compreenda melhor o que sente.",
    icon: Search
  },
  {
    id: 4,
    title: "Relatório Emocional",
    contentDescription: "Visualize sua variação emocional em gráficos para entender melhor o que te move e como reagir com mais clareza.",
    icon: BarChart2
  },
  {
    id: 5,
    title: "Referências Cruzadas",
    contentDescription: "Veja como diferentes memórias se conectam para entender histórias que se repetem e encontrar clareza para agir diferente.",
    icon: Shuffle
  },
  {
    id: 6,
    title: "Reflexo em Tempo Real",
    contentDescription: "Converse em tempo real para explorar sentimentos, organizar pensamentos e ganhar clareza para agir.",
    icon: Eye
  }
];


const appleChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#4B5563',
        font: {
          size: 12,
          weight: '400'
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(255,255,255,0.9)',
      titleColor: '#1D3557',
      bodyColor: '#4B5563',
      borderColor: '#E5E7EB',
      borderWidth: 1
    }
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(0,0,0,0.05)'
      },
      ticks: {
        color: '#6B7280',
        font: {
          size: 11
        }
      }
    },
    y: {
      grid: {
        color: 'rgba(0,0,0,0.05)'
      },
      ticks: {
        color: '#6B7280',
        font: {
          size: 11
        }
      }
    }
  }
};

const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(1);
  const active = features.find(f => f.id === activeFeature);

  return (
    <section id="recursos" className="py-16 md:py-24 px-4 md:px-6 bg-[#F8F6FA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#1D3557] mb-4">
            Para se conhecer melhor
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-500 max-w-3xl mx-auto">
  Apoio para transformar momentos de confusão em clareza emocional. Organize seus sentimentos e acompanhe sua evolução com cuidado.
</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Sidebar */}
          <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow p-4 md:p-6 space-y-3">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`flex items-center w-full text-left px-4 py-3 md:px-5 md:py-4 rounded-2xl transition
                  ${activeFeature === feature.id
                    ? 'bg-white/70 shadow-md border border-[#E8E3F5]'
                    : 'hover:bg-white/40'
                  }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border border-white/20 shadow-sm mr-4
                    ${activeFeature === feature.id
                      ? 'bg-[#7A9EBF]/80'
                      : 'bg-white/20'
                    }`}
                >
                  <feature.icon
                    size={20}
                    strokeWidth={1.5}
                    className={activeFeature === feature.id ? 'text-white' : 'text-[#1D3557]/80'}
                  />
                </div>
                <span
                  className={`text-base md:text-lg font-medium transition
                    ${activeFeature === feature.id ? 'text-[#1D3557]' : 'text-[#1D3557]/80'}
                  `}
                >
                  {feature.title}
                </span>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl border border-white/20 shadow p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-medium text-[#1D3557] mb-4">
              {active?.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{active?.contentDescription}</p>

            {active?.id === 1 && (
              <div className="space-y-4">
                <div className="bg-white/60 backdrop-blur rounded-2xl p-4 shadow border border-gray-100">
                  <h4 className="font-medium text-[#1D3557] mb-2">Memória Emocional</h4>
                  <p className="text-sm text-gray-700">
                    "Senti um aperto no peito antes de uma reunião importante. Percebi que era ansiedade e tentei respirar mais fundo para me acalmar."
                  </p>
                  <div className="flex flex-wrap mt-3 gap-2">
                    <span className="bg-[#7A9EBF]/20 text-[#1D3557] text-xs px-2 py-1 rounded-full">Trabalho</span>
                    <span className="bg-[#F7CAC9]/20 text-[#1D3557] text-xs px-2 py-1 rounded-full">Ansiedade</span>
                    <span className="bg-gray-100 text-[#1D3557] text-xs px-2 py-1 rounded-full">Reflexão</span>
                  </div>
                </div>
              </div>
            )}

            {active?.id === 2 && (
              <Line
                data={{
                  labels: ['Jun 24', 'Jun 27', 'Jun 30', 'Jul 3', 'Jul 6'],
                  datasets: [
                    {
                      label: 'Emocional',
                      data: [5, 8, 3, 10, 6],
                      borderColor: '#7A9EBF',
                      backgroundColor: 'rgba(122,158,191,0.15)',
                      borderWidth: 2,
                      tension: 0.4
                    },
                    {
                      label: 'Pessoal',
                      data: [3, 5, 2, 8, 4],
                      borderColor: '#F7CAC9',
                      backgroundColor: 'rgba(247,202,201,0.15)',
                      borderWidth: 2,
                      tension: 0.4
                    }
                  ]
                }}
                options={appleChartOptions}
              />
            )}

            {active?.id === 3 && (
              <Bar
                data={{
                  labels: ['Frustração', 'Medo', 'Curiosidade'],
                  datasets: [{
                    label: 'Ocorrências',
                    data: [14, 11, 8],
                    backgroundColor: ['rgba(122,158,191,0.6)', 'rgba(247,202,201,0.6)', 'rgba(191,216,184,0.6)'],
                    borderRadius: 8,
                    barPercentage: 0.6
                  }]
                }}
                options={appleChartOptions}
              />
            )}

            {active?.id === 4 && (
  <>
    <Scatter
      data={{
        datasets: [{
          label: 'Mapa Emocional',
          data: Array.from({ length: 50 }, () => ({
            x: Math.random() * 10 - 5,
            y: Math.random() * 10 - 5
          })),
          backgroundColor: 'rgba(122,158,191,0.5)',
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      }}
      options={{
        ...appleChartOptions,
        scales: {
          x: { title: { display: true, text: 'Valência', color: '#4B5563' }, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#6B7280' } },
          y: { title: { display: true, text: 'Excitação', color: '#4B5563' }, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#6B7280' } }
        }
      }}
    />

    <div className="mt-4 text-sm text-gray-500">
      <p><strong>Valência:</strong> indica se a emoção é mais positiva ou negativa.</p>
      <p><strong>Excitação:</strong> mostra a intensidade de calma até agitação.</p>
    </div>
  </>
)}


            {active?.id === 5 && (
              <div className="p-4 rounded-2xl bg-white/60 backdrop-blur shadow border border-gray-100">
                <h4 className="font-medium text-[#1D3557] mb-2">Rede de Referências Cruzadas</h4>
                <p className="text-sm text-gray-600 mb-3">
                  A Eco estuda padrões das suas memórias e mostra conexões entre diferentes momentos para você enxergar essas relações com mais clareza.
                </p>
                <ul className="list-disc ml-5 text-gray-700 text-sm">
                  <li>Trabalho → Ansiedade → Reflexão</li>
                  <li>Relacionamento → Alegria → Gratidão</li>
                  <li>Saúde → Medo → Autocuidado</li>
                </ul>
              </div>
            )}

            {active?.id === 6 && (
              <div className="bg-white/60 backdrop-blur p-4 rounded-2xl shadow border border-gray-100 space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <p className="text-sm text-gray-700">Você: "Hoje estou me sentindo ansioso."</p>
                </div>
                <div className="bg-[#7A9EBF]/10 rounded-lg p-3 shadow-sm border border-gray-100">
                  <p className="text-sm text-[#1D3557] italic">Eco: "Vejo que isso te preocupa. Quer falar um pouco mais sobre o que está causando essa ansiedade?"</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <p className="text-sm text-gray-700">Você: "Tenho muitos prazos acumulados."</p>
                </div>
                <div className="bg-[#7A9EBF]/10 rounded-lg p-3 shadow-sm border border-gray-100">
                  <p className="text-sm text-[#1D3557] italic">Eco: "Entendo. Que tal pensarmos juntos em estratégias para lidar com isso?"</p>
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
