import type { Project } from "@/types";

export const projects: Project[] = [
  // ===== 新築 8棟 =====
  {
    id: "nb-01",
    slug: "natural-wood-house",
    title: "自然素材をふんだんに使った平屋の住まい",
    category: "new-build",
    thumbnail: "/images/works/new-build-01/thumb.jpg",
    images: [
      { src: "/images/works/new-build-01/exterior.jpg", alt: "外観", caption: "外観" },
      { src: "/images/works/new-build-01/living.jpg", alt: "リビング", caption: "リビング" },
      { src: "/images/works/new-build-01/kitchen.jpg", alt: "キッチン", caption: "キッチン" },
      { src: "/images/works/new-build-01/garden.jpg", alt: "庭", caption: "庭" },
    ],
    location: "さいたま市大宮区",
    structure: "木造平屋建て",
    floorArea: "28坪（92.56m2）",
    constructionPeriod: "約5ヶ月",
    familyStructure: "ご夫婦",
    features: ["無垢フローリング", "珪藻土塗り壁", "薪ストーブ", "ウッドデッキ"],
    description:
      "退職後のセカンドライフを見据え、ご夫婦お二人のための平屋住宅。県産材の杉と檜をふんだんに使い、リビングには薪ストーブを設置。ウッドデッキから庭へと続く開放的な空間が特徴です。",
    testimonial: {
      name: "S様ご夫婦",
      comment:
        "木の香りに包まれて毎日が幸せです。冬でも薪ストーブのおかげで暖かく、光熱費も驚くほど安くなりました。小林さんの丁寧な仕事ぶりに感動しました。",
    },
    completedAt: "2025年11月",
  },
  {
    id: "nb-02",
    slug: "earthquake-proof-family",
    title: "耐震等級3の安心子育て住宅",
    category: "new-build",
    thumbnail: "/images/works/new-build-02/thumb.jpg",
    images: [
      { src: "/images/works/new-build-02/exterior.jpg", alt: "外観", caption: "外観" },
      { src: "/images/works/new-build-02/living.jpg", alt: "リビング", caption: "LDK" },
      { src: "/images/works/new-build-02/kids-room.jpg", alt: "子供部屋", caption: "子供部屋" },
    ],
    location: "川越市",
    structure: "木造2階建て",
    floorArea: "35坪（115.70m2）",
    constructionPeriod: "約6ヶ月",
    familyStructure: "ご夫婦＋お子様2人",
    features: ["耐震等級3", "制震ダンパー", "リビング階段", "パントリー"],
    description:
      "お子様の安全を第一に考え、耐震等級3に制震ダンパーを組み合わせた強固な構造。リビング階段で家族の気配を常に感じられる間取りに。大容量パントリーなど収納力も抜群です。",
    testimonial: {
      name: "K様ご家族",
      comment:
        "地震のニュースを見ても安心していられます。子供たちがリビング階段を駆け上がる姿を見ると、この家にして本当に良かったと思います。",
    },
    completedAt: "2025年8月",
  },
  {
    id: "nb-03",
    slug: "zeh-eco-house",
    title: "ZEH対応の省エネ住宅",
    category: "new-build",
    thumbnail: "/images/works/new-build-03/thumb.jpg",
    images: [
      { src: "/images/works/new-build-03/exterior.jpg", alt: "外観", caption: "外観" },
      { src: "/images/works/new-build-03/solar.jpg", alt: "太陽光パネル", caption: "太陽光パネル" },
      { src: "/images/works/new-build-03/living.jpg", alt: "リビング", caption: "リビング" },
    ],
    location: "所沢市",
    structure: "木造2階建て",
    floorArea: "33坪（109.09m2）",
    constructionPeriod: "約5ヶ月",
    familyStructure: "ご夫婦＋お子様1人",
    features: ["ZEH認定", "太陽光発電5.5kW", "HEMS", "高断熱仕様UA値0.4"],
    description:
      "ZEH基準をクリアした省エネ住宅。太陽光発電とHEMSにより、年間のエネルギー収支がほぼゼロに。高断熱仕様で夏も冬も快適に過ごせます。",
    testimonial: {
      name: "M様ご家族",
      comment:
        "電気代が以前のアパートの半分以下になりました。夏も冬もエアコン1台で快適です。補助金の申請も全部やっていただけて助かりました。",
    },
    completedAt: "2025年5月",
  },
  {
    id: "nb-04",
    slug: "skip-floor-house",
    title: "スキップフロアで空間を楽しむ家",
    category: "new-build",
    thumbnail: "/images/works/new-build-04/thumb.jpg",
    images: [
      { src: "/images/works/new-build-04/exterior.jpg", alt: "外観", caption: "外観" },
      { src: "/images/works/new-build-04/skip.jpg", alt: "スキップフロア", caption: "スキップフロア" },
      { src: "/images/works/new-build-04/study.jpg", alt: "書斎", caption: "書斎コーナー" },
    ],
    location: "川口市",
    structure: "木造2階建て",
    floorArea: "30坪（99.17m2）",
    constructionPeriod: "約6ヶ月",
    familyStructure: "ご夫婦＋お子様1人",
    features: ["スキップフロア", "中二階書斎", "吹き抜けリビング", "造作家具"],
    description:
      "限られた敷地でも広がりを感じるスキップフロア設計。中二階の書斎コーナーはテレワークにも最適。吹き抜けのリビングに光が降り注ぐ、遊び心のある住まいです。",
    testimonial: {
      name: "T様ご家族",
      comment:
        "スキップフロアのおかげで実際の面積以上に広く感じます。中二階の書斎は在宅勤務の強い味方です。大工さんの技術の高さに驚きました。",
    },
    completedAt: "2025年3月",
  },
  {
    id: "nb-05",
    slug: "two-generation-house",
    title: "二世帯が心地よく暮らせる家",
    category: "new-build",
    thumbnail: "/images/works/new-build-05/thumb.jpg",
    images: [
      { src: "/images/works/new-build-05/exterior.jpg", alt: "外観", caption: "外観" },
      { src: "/images/works/new-build-05/shared.jpg", alt: "共用リビング", caption: "共用リビング" },
      { src: "/images/works/new-build-05/japanese.jpg", alt: "和室", caption: "1階和室" },
    ],
    location: "上尾市",
    structure: "木造2階建て",
    floorArea: "48坪（158.68m2）",
    constructionPeriod: "約7ヶ月",
    familyStructure: "親世帯＋子世帯（4名）",
    features: ["完全分離型二世帯", "1階バリアフリー", "共用中庭", "防音対策"],
    description:
      "1階を親世帯、2階を子世帯とした完全分離型二世帯住宅。1階は将来を見据えたバリアフリー設計。中庭を通じてほどよい距離感を保てる間取りです。",
    testimonial: {
      name: "A様ご家族",
      comment:
        "お互いのプライバシーを守りながらも、中庭で自然と顔を合わせられる距離感が絶妙です。親世帯のバリアフリーも安心できます。",
    },
    completedAt: "2024年12月",
  },
  {
    id: "nb-06",
    slug: "modern-japanese-house",
    title: "和モダンテイストの落ち着いた住まい",
    category: "new-build",
    thumbnail: "/images/works/new-build-06/thumb.jpg",
    images: [
      { src: "/images/works/new-build-06/exterior.jpg", alt: "外観", caption: "外観" },
      { src: "/images/works/new-build-06/entrance.jpg", alt: "玄関", caption: "玄関" },
      { src: "/images/works/new-build-06/tatami.jpg", alt: "畳リビング", caption: "畳リビング" },
    ],
    location: "さいたま市浦和区",
    structure: "木造2階建て",
    floorArea: "32坪（105.78m2）",
    constructionPeriod: "約5ヶ月",
    familyStructure: "ご夫婦",
    features: ["和モダンデザイン", "畳リビング", "格子戸", "坪庭"],
    description:
      "日本の伝統美と現代の快適性を融合させた和モダン住宅。畳のリビングや格子戸、坪庭など、落ち着いた空間が広がります。断熱性能も最新基準をクリアしています。",
    testimonial: {
      name: "N様ご夫婦",
      comment:
        "和の趣がありつつも暮らしやすい。友人を招くと皆さん「素敵な家だね」と言ってくれます。職人さんの手仕事が随所に光る家です。",
    },
    completedAt: "2024年9月",
  },
  {
    id: "nb-07",
    slug: "compact-smart-house",
    title: "コンパクトでも暮らしやすいスマート住宅",
    category: "new-build",
    thumbnail: "/images/works/new-build-07/thumb.jpg",
    images: [
      { src: "/images/works/new-build-07/exterior.jpg", alt: "外観", caption: "外観" },
      { src: "/images/works/new-build-07/ldk.jpg", alt: "LDK", caption: "LDK" },
      { src: "/images/works/new-build-07/storage.jpg", alt: "収納", caption: "収納スペース" },
    ],
    location: "草加市",
    structure: "木造2階建て",
    floorArea: "25坪（82.64m2）",
    constructionPeriod: "約4ヶ月",
    familyStructure: "ご夫婦＋お子様1人",
    features: ["コンパクト設計", "大容量収納", "家事動線重視", "IoT対応"],
    description:
      "限られた土地を最大限に活用したコンパクト住宅。無駄のない動線設計と大容量の収納で、実際の面積以上の暮らしやすさを実現しました。",
    testimonial: {
      name: "O様ご家族",
      comment:
        "25坪とは思えない広さを感じます。家事動線が完璧で、毎日の家事が楽になりました。予算内でここまでの家が建てられて大満足です。",
    },
    completedAt: "2024年6月",
  },
  {
    id: "nb-08",
    slug: "garden-living-house",
    title: "庭とつながる開放的なリビングの家",
    category: "new-build",
    thumbnail: "/images/works/new-build-08/thumb.jpg",
    images: [
      { src: "/images/works/new-build-08/exterior.jpg", alt: "外観", caption: "外観" },
      { src: "/images/works/new-build-08/living.jpg", alt: "リビング", caption: "リビング" },
      { src: "/images/works/new-build-08/deck.jpg", alt: "ウッドデッキ", caption: "ウッドデッキ" },
    ],
    location: "越谷市",
    structure: "木造2階建て",
    floorArea: "36坪（119.00m2）",
    constructionPeriod: "約6ヶ月",
    familyStructure: "ご夫婦＋お子様2人",
    features: ["大開口窓", "ウッドデッキ", "アウトドアリビング", "シンボルツリー"],
    description:
      "リビングの大開口窓からウッドデッキ、そして庭へと空間がシームレスにつながる開放的な住まい。BBQやガーデニングなど、アウトドアライフを身近に楽しめます。",
    testimonial: {
      name: "I様ご家族",
      comment:
        "天気の良い日はウッドデッキで朝食をとるのが家族の楽しみです。庭で子供たちが遊ぶ姿をリビングから見守れるのが安心です。",
    },
    completedAt: "2024年3月",
  },

  // ===== リフォーム 6事例 =====
  {
    id: "rf-01",
    slug: "kitchen-reform-kawagoe",
    title: "対面キッチンへの大変身リフォーム",
    category: "reform",
    thumbnail: "/images/works/reform-01/thumb.jpg",
    images: [
      { src: "/images/works/reform-01/before.jpg", alt: "施工前", caption: "施工前" },
      { src: "/images/works/reform-01/after.jpg", alt: "施工後", caption: "施工後" },
      { src: "/images/works/reform-01/detail.jpg", alt: "キッチン詳細", caption: "収納詳細" },
    ],
    location: "川越市",
    constructionPeriod: "約2週間",
    features: ["対面キッチン", "食洗機設置", "収納力アップ", "床張り替え"],
    description:
      "壁付きキッチンから対面キッチンへの変更。家族と会話しながら料理ができるようになり、リビングとの一体感が生まれました。食洗機も新設し、家事の負担を軽減。",
    testimonial: {
      name: "H様",
      comment:
        "料理中も子供の様子が見えて安心です。食洗機のおかげで自由な時間が増えました。仕上がりもとてもきれいです。",
    },
    reformType: "キッチンリフォーム",
    completedAt: "2025年10月",
  },
  {
    id: "rf-02",
    slug: "full-renovation-saitama",
    title: "築30年の戸建てフルリノベーション",
    category: "reform",
    thumbnail: "/images/works/reform-02/thumb.jpg",
    images: [
      { src: "/images/works/reform-02/before.jpg", alt: "施工前外観", caption: "施工前" },
      { src: "/images/works/reform-02/after-exterior.jpg", alt: "施工後外観", caption: "施工後外観" },
      { src: "/images/works/reform-02/after-interior.jpg", alt: "施工後内装", caption: "施工後内装" },
    ],
    location: "さいたま市見沼区",
    constructionPeriod: "約3ヶ月",
    features: ["間取り変更", "耐震補強", "断熱改修", "水回り全面更新"],
    description:
      "築30年の住宅をスケルトンからフルリノベーション。耐震補強と断熱改修で性能を現行基準まで引き上げ、間取りも現代のライフスタイルに合わせて一新しました。",
    testimonial: {
      name: "Y様ご夫婦",
      comment:
        "まるで新築のようです。特に冬の暖かさが全然違います。耐震補強もしたので安心して暮らせます。建て替えよりも費用を抑えられて良かったです。",
    },
    reformType: "フルリノベーション",
    completedAt: "2025年7月",
  },
  {
    id: "rf-03",
    slug: "barrier-free-reform",
    title: "親世帯のためのバリアフリーリフォーム",
    category: "reform",
    thumbnail: "/images/works/reform-03/thumb.jpg",
    images: [
      { src: "/images/works/reform-03/entrance.jpg", alt: "玄関スロープ", caption: "玄関スロープ" },
      { src: "/images/works/reform-03/bathroom.jpg", alt: "バリアフリー浴室", caption: "浴室" },
      { src: "/images/works/reform-03/corridor.jpg", alt: "廊下手すり", caption: "廊下手すり" },
    ],
    location: "春日部市",
    constructionPeriod: "約3週間",
    features: ["玄関スロープ", "手すり設置", "段差解消", "浴室バリアフリー化"],
    description:
      "高齢のご両親が安全に暮らせるよう、玄関スロープの設置、室内の段差解消、浴室のバリアフリー化を実施。介護保険の住宅改修制度を活用しました。",
    testimonial: {
      name: "W様",
      comment:
        "母が安心してお風呂に入れるようになりました。廊下の手すりも大活躍です。介護保険の手続きもサポートしていただけて助かりました。",
    },
    reformType: "バリアフリーリフォーム",
    completedAt: "2025年4月",
  },
  {
    id: "rf-04",
    slug: "exterior-painting-reform",
    title: "外壁塗装で新築同様の美しさに",
    category: "reform",
    thumbnail: "/images/works/reform-04/thumb.jpg",
    images: [
      { src: "/images/works/reform-04/before.jpg", alt: "施工前", caption: "施工前" },
      { src: "/images/works/reform-04/during.jpg", alt: "施工中", caption: "施工中" },
      { src: "/images/works/reform-04/after.jpg", alt: "施工後", caption: "施工後" },
    ],
    location: "戸田市",
    constructionPeriod: "約2週間",
    features: ["高耐候性塗料", "外壁クラック補修", "コーキング打ち替え", "15年保証"],
    description:
      "築15年で色褪せ・クラックが目立ち始めた外壁を高耐候性塗料で全面塗り替え。コーキングの打ち替えも同時に実施し、防水性能を回復しました。",
    testimonial: {
      name: "E様",
      comment:
        "見違えるほどきれいになりました。ご近所からも「新築みたい」と言われます。15年保証もついて安心です。",
    },
    reformType: "外壁塗装",
    completedAt: "2025年1月",
  },
  {
    id: "rf-05",
    slug: "earthquake-retrofit",
    title: "耐震補強で安心の住まいに",
    category: "reform",
    thumbnail: "/images/works/reform-05/thumb.jpg",
    images: [
      { src: "/images/works/reform-05/diagnosis.jpg", alt: "耐震診断", caption: "耐震診断" },
      { src: "/images/works/reform-05/work.jpg", alt: "補強工事", caption: "筋交い補強" },
      { src: "/images/works/reform-05/complete.jpg", alt: "完了", caption: "補強完了" },
    ],
    location: "熊谷市",
    constructionPeriod: "約1ヶ月",
    features: ["耐震診断", "筋交い追加", "基礎補強", "制震ダンパー設置"],
    description:
      "築40年の木造住宅の耐震補強工事。耐震診断の結果、評点0.4だったものを1.5以上に引き上げました。住みながらの工事で、生活への影響を最小限に抑えました。",
    testimonial: {
      name: "F様ご夫婦",
      comment:
        "大きな地震のニュースを見るたびに不安でしたが、補強工事をして安心できるようになりました。住みながらの工事だったのも助かりました。",
    },
    reformType: "耐震補強工事",
    completedAt: "2024年11月",
  },
  {
    id: "rf-06",
    slug: "bathroom-reform-kawaguchi",
    title: "最新ユニットバスへの浴室リフォーム",
    category: "reform",
    thumbnail: "/images/works/reform-06/thumb.jpg",
    images: [
      { src: "/images/works/reform-06/before.jpg", alt: "施工前", caption: "施工前" },
      { src: "/images/works/reform-06/after.jpg", alt: "施工後", caption: "施工後" },
    ],
    location: "川口市",
    constructionPeriod: "約1週間",
    features: ["最新ユニットバス", "浴室暖房乾燥機", "段差解消", "断熱浴槽"],
    description:
      "タイル張りの在来浴室から最新のユニットバスへリフォーム。浴室暖房乾燥機の設置でヒートショック対策も万全。断熱浴槽でお湯が冷めにくくなりました。",
    testimonial: {
      name: "G様",
      comment:
        "冬のお風呂が怖くなくなりました。暖房があるので脱衣所も暖かいです。お湯も冷めにくくなって嬉しいです。",
    },
    reformType: "浴室リフォーム",
    completedAt: "2024年8月",
  },
];
