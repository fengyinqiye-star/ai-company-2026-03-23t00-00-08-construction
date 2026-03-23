import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-primary-dark overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-accent/40" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2260%22%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22%20stroke%3D%22%23fff%22%20stroke-opacity%3D%22.04%22%20stroke-width%3D%221%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />

      <div className="relative container-wide py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-white/80 text-sm md:text-base font-medium mb-3">
            埼玉県さいたま市 創業45年
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-heading-1 font-serif font-bold text-white leading-tight">
            職人の技と想いが宿る
            <br />
            家づくり
          </h1>
          <p className="mt-5 text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
            耐震等級3・高断熱・自然素材。
            <br className="hidden md:block" />
            地元の熟練職人が一棟入魂で、ご家族の理想の住まいをかたちにします。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="cta" size="lg">
              資料請求・無料相談
            </Button>
            <Button href="/works" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              施工事例を見る
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
