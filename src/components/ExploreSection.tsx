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
    description: "Registre e relembre seus sentimentos.",
    contentDescription: "Crie um diário emocional com memórias detalhadas. Escreva o que sentiu, veja suas tags e emoções associadas.",
    icon: BookOpen
  },
  {
    id: 2,
    title: "Linha do Tempo Emocional",
    description: "Veja sua evolução emocional em gráficos de linha.",
    contentDescription: "Acompanhe mudanças ao longo do tempo com um gráfico elegante.",
    icon: Clock
  },
  {
    id: 3,
    title: "Perfil Emocional",
    description: "Seu panorama emocional em destaque.",
    contentDescription: "Visualize as emoções mais frequentes e temas mais recorrentes em gráficos de barras coloridos.",
    icon: Search
  },
  {
    id: 4,
    title: "Relatório Emocional",
    description: "Análise profunda das suas memórias.",
    contentDescription: "Receba um mapa emocional 2D com valência e excitação.",
    icon: BarChart2
  },
  {
    id: 5,
    title: "Referências Cruzadas",
    description: "Conexões entre momentos.",
    contentDescription: "Veja conexões entre memórias com gráficos de rede.",
    icon: Shuffle
  },
  {
    id: 6,
    title: "Reflexo em Tempo Real",
    description: "Converse com a IA para refletir imediatamente.",
    contentDescription: "Troque mensagens sensíveis e reflexivas em um chat simulado.",
    icon: Eye
  }
];

const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  const active = features.find(f => f.id === activeFeature);

  return (
    <>
      <section id="recursos" className="pt-16 pb-24 px-6 bg-[#F8F6FA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#1D3557] mb-4">
              Explore os recursos da Eco
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-700 max-w-3xl mx-auto">
              Conheça cada parte que ajuda você a se entender melhor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Sidebar */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`flex items-center w-full text-left p-3 rounded-lg transition-all
                    ${activeFeature === feature.id ? 'bg-[#E8E3F5]' : 'hover:bg-gray-50'}`}
                >
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full mr-4
                    ${activeFeature === feature.id ? 'bg-[#7A9EBF]' : 'bg-gray-100'}`}>
                    <feature.icon size={20} className={activeFeature === feature.id ? 'text-white' : 'text-[#7A9EBF]'} />
                  </div>
                  <span className={`text-base md:text-lg font-medium
                    ${activeFeature === feature.id ? 'text-[#1D3557]' : 'text-gray-700'}`}>
                    {feature.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl md:text-3xl font-medium text-[#1D3557] mb-4">
                {active?.title}
              </h3>
              <p className="text-gray-600 mb-6">{active?.contentDescription}</p>

              {/* === Simulações Gráficas === */}
              {active?.id === 1 && (
                <div className="space-y-4">
                  <div className="bg-[#F8F6FA] p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-[#1D3557] mb-2">Exemplo de Memória</h4>
                    <p className="text-sm text-gray-700">"Hoje me senti ansioso com o trabalho e busquei refletir antes de agir."</p>
                    <div className="flex flex-wrap mt-2 gap-2">
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
                        backgroundColor: '#7A9EBF30'
                      },
                      {
                        label: 'Pessoal',
                        data: [3, 5, 2, 8, 4],
                        borderColor: '#F7CAC9',
                        backgroundColor: '#F7CAC930'
                      }
                    ]
                  }}
                  options={{
                    responsive: true,
                    plugins: { legend: { position: 'bottom' } }
                  }}
                />
              )}

              {active?.id === 3 && (
                <Bar
                  data={{
                    labels: ['Frustração', 'Medo', 'Curiosidade'],
                    datasets: [{
                      label: 'Ocorrências',
                      data: [14, 11, 8],
                      backgroundColor: ['#7A9EBF', '#F7CAC9', '#BFD8B8']
                    }]
                  }}
                  options={{
                    responsive: true,
                    plugins: { legend: { display: false } }
                  }}
                />
              )}

              {active?.id === 4 && (
                <Scatter
                  data={{
                    datasets: [{
                      label: 'Mapa Emocional',
                      data: Array.from({ length: 50 }, () => ({
                        x: Math.random() * 10 - 5,
                        y: Math.random() * 10 - 5
                      })),
                      backgroundColor: '#7A9EBF80'
                    }]
                  }}
                  options={{
                    responsive: true,
                    scales: {
                      x: { title: { display: true, text: 'Valência' } },
                      y: { title: { display: true, text: 'Excitação' } }
                    }
                  }}
                />
              )}

              {active?.id === 5 && (
                <div className="p-4 rounded-lg bg-[#F8F6FA] shadow-sm">
                  <h4 className="font-medium text-[#1D3557] mb-2">Rede de Referências Cruzadas</h4>
                  <p className="text-sm text-gray-600 mb-2">Exemplo de conexões entre memórias:</p>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Trabalho → Ansiedade → Reflexão</li>
                    <li>Relacionamento → Alegria → Gratidão</li>
                    <li>Saúde → Medo → Autocuidado</li>
                  </ul>
                </div>
              )}

              {active?.id === 6 && (
                <div className="bg-[#F8F6FA] p-4 rounded-lg shadow-sm">
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <p className="text-sm text-gray-700">Você: "Hoje me sinto ansioso."</p>
                    </div>
                    <div className="bg-[#7A9EBF]/10 rounded-lg p-3 shadow-sm border border-gray-100">
                      <p className="text-sm text-[#1D3557] italic">IA: "Vejo que você está com o coração acelerado. Quer falar mais sobre o que gerou essa ansiedade?"</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <p className="text-sm text-gray-700">Você: "Estou preocupado com prazos."</p>
                    </div>
                    <div className="bg-[#7A9EBF]/10 rounded-lg p-3 shadow-sm border border-gray-100">
                      <p className="text-sm text-[#1D3557] italic">IA: "Entendo. Vamos pensar juntos em como lidar com isso de forma mais leve."</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 max-w-3xl mx-auto border border-gray-100 rounded-xl bg-white shadow-sm px-6 py-8 text-center">
        <h3 className="text-lg md:text-xl font-medium text-[#1D3557] mb-3">
          Evidência científica
        </h3>
        <p className="text-gray-600 mb-4 text-sm md:text-base">
          Registrar memórias e refletir sobre elas ajuda a organizar emoções, criar coerência narrativa e melhorar a autoconsciência. Estudos mostram que construir uma linha do tempo emocional fortalece o insight e o bem-estar.
        </p>
        <div className="flex items-center justify-center mt-4 space-x-2 text-sm text-gray-500">
          <span className="text-xl">🎓</span>
          <span className="text-[0.9rem]">
            Baseado em pesquisas de James W. Pennebaker e Dan P. McAdams
            <span className="block text-[0.85rem] mt-0.5 italic text-[#7A9EBF]/80">
              University of Texas & Northwestern University
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
