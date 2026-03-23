const stats = [
  { label: "創業", value: "45", unit: "年" },
  { label: "累計施工実績", value: "1,500", unit: "棟以上" },
  { label: "年間施工数", value: "50", unit: "棟以上" },
  { label: "職人在籍", value: "12", unit: "名" },
];

export default function StatsSection() {
  return (
    <section className="bg-secondary/30 py-12 md:py-16">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary">
                {stat.value}
                <span className="text-lg md:text-xl ml-1">{stat.unit}</span>
              </div>
              <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
