import { motion } from "framer-motion";
import { Crosshair, BarChart3, Monitor, GraduationCap, Heart, ArrowRight, ArrowDown, Check, BookOpen, Settings, Users, Repeat, Search, ClipboardList, Play, RefreshCw } from "lucide-react";

const pillars = [
  {
    number: 1,
    icon: Crosshair,
    title: "Oferta",
    shortDesc: "ICP, personas e posicionamento",
    includes: ["ICP", "Personas", "Mercado", "Posicionamento"],
  },
  {
    number: 2,
    icon: BarChart3,
    title: "Gestão",
    shortDesc: "Metas, KPIs e rituais",
    includes: ["Metas", "KPIs", "Estrutura do time", "Rituais"],
  },
  {
    number: 3,
    icon: Monitor,
    title: "Tecnologia",
    shortDesc: "Stack, automações e BI",
    includes: ["Automação", "BI", "Stack Comercial", "Integrações"],
  },
  {
    number: 4,
    icon: GraduationCap,
    title: "Capacitação",
    shortDesc: "Treinamento e processos",
    includes: ["Treinamento", "Processos", "Conhecimento", "PDI"],
  },
  {
    number: 5,
    icon: Heart,
    title: "Cultura",
    shortDesc: "Engajamento e retenção",
    includes: ["Cultura", "Carreira", "Remuneração", "Incentivos"],
  },
];

const implementationSteps = [
  {
    number: "1",
    icon: BookOpen,
    title: "Playbook",
    description: "Material completo com todas as técnicas e processos da jornada de vendas.",
  },
  {
    number: "2",
    icon: Settings,
    title: "Ajuste de CRM",
    description: "Espelhamos seu processo ideal no CRM para gerar dados com visibilidade total.",
  },
  {
    number: "3",
    icon: Users,
    title: "Treinamento",
    description: "Capacitamos seu time dos fundamentos de vendas ao processo contextual da empresa.",
  },
  {
    number: "4",
    icon: Repeat,
    title: "Modelo de Gestão Ágil",
    description: "Implementamos um modelo simples que dá ritmo às operações e ações táticas.",
  },
];

const agileCycle = [
  {
    icon: Search,
    title: "Análise",
    description: "Analisamos os dados e identificamos as causas raízes da performance.",
  },
  {
    icon: ClipboardList,
    title: "Planejamento",
    description: "Planejamos e priorizamos as ações para aumento de performance.",
  },
  {
    icon: Play,
    title: "Execução",
    description: "Gerenciamos a execução das ações planejadas no Sprint.",
  },
  {
    icon: RefreshCw,
    title: "Revisão",
    description: "Revisamos as ações executadas e os resultados alcançados.",
  },
];

const finalResults = [
  "Execução consistente",
  "Máquina de vendas sustentável",
  "Crescimento previsível",
];

export default function MethodologyInfographic() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header - Tom positivo, sem vermelho */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Metodologia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              Sem atalhos. Sem fórmulas prontas. Sem hacks.
            </h2>
            <p className="text-xl text-primary font-semibold" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              Execução Disciplinada da Gestão Comercial.
            </p>
          </motion.div>

          {/* Loboh assume os 5 pilares */}
          <motion.div
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                <span className="text-primary">Gestão Comercial como Serviço</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cuidamos de <span className="font-semibold text-foreground">5 áreas críticas</span> que precisam funcionar em sincronia para que sua máquina comercial nunca pare.
              </p>
            </div>

            {/* Visual dos 5 pilares */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.number}
                  className="relative p-4 rounded-xl bg-card border-2 border-primary/50 shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.08 }}
                >
                  {/* Check badge */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-sm">
                    <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                      <pillar.icon className="w-4 h-4" strokeWidth={2} />
                    </div>
                    <span className="font-bold text-foreground text-sm">{pillar.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {pillar.includes.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-[10px] text-primary font-medium"
                      >
                        {item}
                      </span>
                    ))}
                    {pillar.includes.length > 3 && (
                      <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-[10px] text-primary font-medium">
                        +{pillar.includes.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Implementação em 65 dias */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                Implementação em <span className="text-primary">65 dias</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Construímos a base sólida da sua operação comercial. <span className="font-semibold text-foreground">Sem essa estrutura, nada funciona de verdade.</span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {implementationSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  <div className="absolute -top-3 left-4 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-3 mb-3 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow transition */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col items-center gap-2">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                A partir daí, ciclos ágeis contínuos
              </span>
            </div>
          </motion.div>

          {/* Gestão de Vendas Ágil */}
          <motion.div
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                <span className="text-primary">Gestão de Vendas Ágil</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Orquestramos ações em <span className="font-semibold text-foreground">Oferta, Gestão, Tecnologia, Capacitação e Cultura</span>,
                <br className="hidden md:block" />
                sempre priorizando o que gera <span className="font-semibold text-foreground">maior resultado por esforço</span>.
              </p>
            </div>

            {/* Ciclo Ágil */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {agileCycle.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  className="relative p-5 rounded-xl bg-card border border-primary/30 shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  {/* Arrow connector on desktop */}
                  {index < agileCycle.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <phase.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                      {phase.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Cycle indicator */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Repeat className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Ciclo contínuo de melhoria</span>
              </div>
            </motion.div>

            {/* Resultado Final */}
            <div className="pt-6 border-t border-primary/20">
              <p className="text-center text-sm font-semibold text-muted-foreground mb-4">RESULTADO:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {finalResults.map((result, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{result}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
