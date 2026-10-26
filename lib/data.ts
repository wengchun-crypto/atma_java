export interface MountainData {
  id: number;
  slug: string;
  nama: string;
  nama_gunung: string;
  gambar: string;
  titik_koordinat: string;
  lokasi_maps: string;
  maps_link: string;
  ketinggian: string;
  provinsi: string;
  deskripsi: string;
  deskripsi_page1: string;
  deskripsi_page2: string;
}

export interface ArticleData {
  id: number;
  judul: string;
  gambar: string;
  quote: string;
  isi: string;
}

export const MOUNTAINS: MountainData[] = [
  {
    id: 1,
    slug: "gunung-merapi",
    nama: "Gunung Merapi",
    nama_gunung: "Gunung Merapi",
    gambar: "merapi",
    titik_koordinat: '7°32\'30"S 110°26\'46"E',
    lokasi_maps: "https://maps.google.com/?q=Gunung+Merapi",
    maps_link: "https://maps.google.com/?q=Gunung+Merapi",
    ketinggian: "2.930 MDPL",
    provinsi: "Jawa Tengah",
    deskripsi: "Gunung api aktif di perbatasan DIY dan Jawa Tengah dengan ketinggian 2.930 mdpl.",
    deskripsi_page1: `<p>Gunung Merapi (ketinggian puncak 2.930 mdpl, per 2010) adalah gunung berapi di bagian tengah Pulau Jawa dan merupakan salah satu gunung api teraktif di Indonesia. Lereng sisi selatan berada dalam administrasi Kabupaten Sleman, Daerah Istimewa Yogyakarta, dan sisanya berada dalam wilayah Provinsi Jawa Tengah, yaitu Kabupaten Magelang di sisi barat, Kabupaten Boyolali di sisi utara dan timur, serta Kabupaten Klaten di sisi tenggara.</p><p>Kawasan hutan di sekitar puncaknya menjadi kawasan Taman Nasional Gunung Merapi sejak tahun 2004. Karakteristik letusan Merapi yang khas dengan pembentukan kubah lava dan awan panas (wedhus gembel) menjadikannya pusat perhatian vulkanologi internasional dan laboratorium alam bagi riset mitigasi bencana geologi.</p>`,
    deskripsi_page2: `<p>Bagi masyarakat lereng dan Keraton Yogyakarta, Merapi bukan sekadar bentang alam vulkanik, melainkan memiliki posisi spiritual penting dalam sumbu filosofis Yogyakarta. Setiap tahun upacara Labuhan Merapi digelar sebagai wujud syukur dan penghormatan terhadap alam semesta.</p><p>Sebagai gunung api teraktif, pendaki dan pelancong wajib mematuhi rekomendasi status vulkanik dari BPPTKG. Jalur pendakian resmi via Selo menuntut kebugaran fisik, masker debu vulkanik, serta kedisiplinan tidak mendekati bibir kawah aktif saat status dinaikkan.</p>`
  },
  {
    id: 2,
    slug: "gunung-sumbing",
    nama: "Gunung Sumbing",
    nama_gunung: "Gunung Sumbing",
    gambar: "sumbing",
    titik_koordinat: '7°23\'04"S 110°04\'13"E',
    lokasi_maps: "https://maps.google.com/?q=Gunung+Sumbing",
    maps_link: "https://maps.google.com/?q=Gunung+Sumbing",
    ketinggian: "3.371 MDPL",
    provinsi: "Jawa Tengah",
    deskripsi: "Gunung api di Jawa Tengah berketinggian 3.371 mdpl, kembaran Gunung Sindoro.",
    deskripsi_page1: `<p>Gunung Sumbing adalah gunung api yang terletak di Jawa Tengah dengan ketinggian 3.371 mdpl. Gunung ini merupakan gunung tertinggi ketiga di Pulau Jawa setelah Semeru dan Slamet. Berdiri berdampingan dengan Gunung Sindoro, keduanya dikenal masyarakat sebagai gunung kembar yang memesona pemandangan lanskap Temanggung dan Wonosobo.</p><p>Karakteristik Sumbing memiliki kaldera besar dengan kawah aktif dan bibir tebing curam. Lereng bawahnya dipenuhi persawahan bertingkat dan perkebunan tembakau khas lereng gunung.</p>`,
    deskripsi_page2: `<p>Pendakian via Garung di Wonosobo atau via Bowongso menawarkan pemandangan savana luas serta padang bunga edelweiss di ketinggian. Di puncaknya terdapat Puncak Rajawali, Puncak Sejati, dan Puncak Buntu.</p><p>Pendaki disarankan memperhatikan manajemen waktu dan cadangan air, karena sebagian besar pos atas tidak memiliki sumber mata air alami saat musim kemarau berlangsung.</p>`
  },
  {
    id: 3,
    slug: "gunung-slamet",
    nama: "Gunung Slamet",
    nama_gunung: "Gunung Slamet",
    gambar: "slamet",
    titik_koordinat: '7°14\'30"S 109°12\'40"E',
    lokasi_maps: "https://maps.google.com/?q=Gunung+Slamet",
    maps_link: "https://maps.google.com/?q=Gunung+Slamet",
    ketinggian: "3.428 MDPL",
    provinsi: "Jawa Tengah",
    deskripsi: "Gunung tertinggi di Jawa Tengah (3.428 mdpl) dengan bentang kawah Segara Wedi yang luas.",
    deskripsi_page1: `<p>Gunung Slamet dengan ketinggian 3.428 mdpl merupakan gunung tertinggi di Jawa Tengah serta gunung kedua tertinggi di Pulau Jawa setelah Semeru. Gunung ini terletak di antara 5 kabupaten, yaitu Brebes, Banyumas, Purbalingga, Tegal, dan Pemalang.</p><p>Puncak Slamet memiliki kawah aktif luas berdiameter lebih dari 1 kilometer yang dinamai Segara Wedi. Suhu udara di puncaknya sangat dingin dan hembusan angin kencang menerpa padang pasir bebatuan vulkanik yang membentang luas tanpa pepohonan pelindung.</p>`,
    deskripsi_page2: `<p>Nama "Slamet" berasal dari bahasa Jawa/Arab yang bermakna selamat atau aman. Terdapat mitos lokal bahwa apabila Gunung Slamet meletus dahsyat, Pulau Jawa bisa terbelah dua, sehingga masyarakat selalu berdoa agar gunung ini senantiasa memberi kedamaian.</p><p>Jalur pendakian yang populer antara lain via Bambangan (Purbalingga) dan Guci (Tegal). Persiapan fisik yang matang dan jaket tebal windproof sangat krusial untuk menghadapi trek panjang bertanah terjal serta hawa dingin menusuk tulang di pos-pos ketinggian.</p>`
  },
  {
    id: 4,
    slug: "gunung-salak",
    nama: "Gunung Salak",
    nama_gunung: "Gunung Salak",
    gambar: "salak",
    titik_koordinat: '6°43\'00"S 106°44\'00"E',
    lokasi_maps: "https://maps.google.com/?q=Gunung+Salak",
    maps_link: "https://maps.google.com/?q=Gunung+Salak",
    ketinggian: "3.153 MDPL",
    provinsi: "Jawa Barat",
    deskripsi: "Pegunungan berhutan hujan tropis lebat di Jawa Barat dengan ketinggian 2.211 mdpl.",
    deskripsi_page1: `<p>Gunung Salak merupakan kompleks gunung berapi yang terletak di selatan Jakarta, di antara Kabupaten Bogor dan Kabupaten Sukabumi, Jawa Barat. Nama Salak tidak berasal dari buah salak, melainkan diserap dari bahasa Sanskerta "Salaka" yang berarti perak.</p><p>Kawasan ini berada di dalam cakupan Taman Nasional Gunung Halimun Salak yang terkenal dengan curah hujan sangat tinggi, kabut tebal yang kerap turun mendadak, serta vegetasi hutan hujan tropis pegunungan yang sangat rimbun dan masih lestari menjadi habitat owa jawa, macan tutul, dan elang jawa.</p>`,
    deskripsi_page2: `<p>Gunung Salak menyimpan banyak peninggalan sejarah dan mitos mistis Sunda kuno, salah satunya makam keramat serta kawah aktif bernama Kawah Ratu yang mengeluarkan belerang alami.</p><p>Medan pendakian Gunung Salak dikenal sebagai salah satu yang paling menantang dan teknis di Jawa Barat karena jalur tanah liat yang licin, akar pohon yang menjalar, serta kontur punggungan rapat. Pendaki dianjurkan membawa peralatan navigasi darat yang memadai dan tidak memaksakan perjalanan di malam hari.</p>`
  },
  {
    id: 5,
    slug: "gunung-semeru",
    nama: "Gunung Semeru",
    nama_gunung: "Gunung Semeru",
    gambar: "semeru",
    titik_koordinat: '8°06\'29"S 112°55\'12"E',
    lokasi_maps: "https://maps.google.com/?q=Gunung+Semeru",
    maps_link: "https://maps.google.com/?q=Gunung+Semeru",
    ketinggian: "3.676 MDPL",
    provinsi: "Jawa Timur",
    deskripsi: "Puncak tertinggi Pulau Jawa (Mahameru 3.676 mdpl) dan Danau Ranu Kumbolo.",
    deskripsi_page1: `<p>Gunung Semeru adalah gunung berapi kerucut tertinggi di Pulau Jawa dengan puncak tertingginya Mahameru mencapai 3.676 meter dari permukaan laut (mdpl). Semeru secara administratif berada di dua kabupaten di Jawa Timur, yaitu Lumajang dan Malang, serta berada di kawasan Taman Nasional Bromo Tengger Semeru.</p><p>Kawah aktifnya bernama Jonggring Saloko yang secara berkala setiap 15-30 menit menyemburkan abu vulkanik dan asap tebal ke angkasa. Daya tarik utama di sepanjang jalur pendakiannya adalah keindahan danau air tawar alami Ranu Kumbolo dan hamparan padang ungu Oro-Oro Ombo.</p>`,
    deskripsi_page2: `<p>Dalam kosmologi Hindu kuno, Semeru dianggap sebagai paku bumi Pulau Jawa yang dipindahkan langsung dari Gunung Meru di India kuno. Gunung ini sangat disakralkan dan menyimpan situs Arcopodo serta kisah pendakian legendaris Soe Hok Gie.</p><p>Pendaki wajib menerapkan prinsip "Zero Waste", menghormati larangan mendirikan tenda dekat air Ranu Kumbolo, dan waspada terhadap lontaran batu serta gas beracun Blank 75 di lereng pasir Mahameru.</p>`
  },
  {
    id: 6,
    slug: "gunung-bromo",
    nama: "Gunung Bromo",
    nama_gunung: "Gunung Bromo",
    gambar: "bromo",
    titik_koordinat: '7°56\'30"S 112°57\'00"E',
    lokasi_maps: "https://maps.google.com/?q=Gunung+Bromo",
    maps_link: "https://maps.google.com/?q=Gunung+Bromo",
    ketinggian: "2.329 MDPL",
    provinsi: "Jawa Timur",
    deskripsi: "Gunung vulkanik ikonik di tengah kaldera lautan pasir Tengger Jawa Timur (2.329 mdpl).",
    deskripsi_page1: `<p>Gunung Bromo (2.329 mdpl) adalah gunung berapi aktif yang terletak di dalam kaldera raksasa Tengger dengan hamparan lautan pasir seluas sekitar 10 kilometer persegi di Jawa Timur. Bromo terkenal ke seluruh penjuru dunia karena kemudahan aksesnya dan keindahan matahari terbit berlatar belakang siluet Semeru dan Batok.</p>`,
    deskripsi_page2: `<p>Gunung Bromo disucikan oleh suku Tengger yang bermukim di sekitarnya. Setiap bulan Kasada, diadakan upacara ritual Yadnya Kasada di mana sesaji hasil bumi dilarung ke dalam kawah berasap sebagai ungkapan rasa syukur kepada Sang Hyang Widhi.</p>`
  }
];

export const ARTICLES: ArticleData[] = [
  {
    id: 1,
    judul: "Rencana Sebelum Melangkah: Persiapan Fisik & Manajemen Logistik Pendakian",
    gambar: "gambar1.jpeg",
    quote: "Setiap puncak menawarkan keindahan, namun keselamatan adalah tujuan utama dari setiap perjalanan.",
    isi: `<p>Mendaki gunung di Pulau Jawa bukan sekadar tentang mencapai puncak dan mengibarkan bendera. Lebih dari itu, setiap penjelajahan menuntut kesiapan fisik prima, perlengkapan standar keselamatan, serta manajemen logistik yang terencana dengan baik.</p><p>Persiapan fisik sebaiknya dimulai setidaknya dua hingga empat minggu sebelum pendakian. Latihan kardiovaskular seperti jogging, berenang, dan latihan beban untuk kaki akan sangat membantu tubuh beradaptasi dengan elevasi curam dan beban ransel.</p><p>Selain itu, etika <i>Leave No Trace</i> (LNT) harus senantiasa dijaga: bawa pulang seluruh sampah Anda, hormati ekosistem flora-fauna setempat, dan patuhi arahan dari pos pengamatan basecamp.</p>`
  },
  {
    id: 2,
    judul: "Mengenal Jalur Pendakian Gunung Sumbing via Garung & Bowongso",
    gambar: "gambar2.jpeg",
    quote: "Di antara dinginnya kabut dan terjalnya lereng, Sumbing menyuguhkan panorama fajar yang abadi.",
    isi: `<p>Gunung Sumbing (3.371 MDPL) berdiri megah berhadapan dengan Gunung Sindoro di Jawa Tengah. Terdapat beberapa jalur resmi pendakian, di antaranya jalur legendaris via Garung di Wonosobo dan jalur Bowongso.</p><p>Jalur Garung terkenal dengan variasi medannya yang menantang melewati perkebunan tembakau warga, hutan pinus, hingga bebatuan terjal menuju Puncak Rajawali. Sementara itu, jalur Bowongso menawarkan panorama punggungan yang mempesona dengan kemiringan yang relatif konstan.</p><p>Pastikan Anda membawa perbekalan air yang cukup karena sumber air di jalur pendakian Sumbing cukup terbatas saat musim kemarau.</p>`
  },
  {
    id: 3,
    judul: "Etika & Konservasi: Menjaga Kelestarian Hutan Gunung di Tanah Jawa",
    gambar: "gambar3.jpeg",
    quote: "Hutan dan gunung adalah nafas peradaban Jawa; merawatnya berarti merawat masa depan kita bersama.",
    isi: `<p>Pegunungan Jawa menyimpan kekayaan keanekaragaman hayati yang tak ternilai, mulai dari elang jawa, macan tutul jawa, hingga bunga edelweiss langka di zona subalpin.</p><p>Pertumbuhan minat pendakian rekreasi harus diimbangi dengan kesadaran konservasi. Jangan pernah memetik flora endemik, membuat api unggun di area semak kering, atau meninggalkan jejak plastik sekecil apapun di jalur pendakian.</p><p>Mari menjadi penjelajah yang beretika: mendaki dengan rendah hati, belajar dari kearifan lokal masyarakat lereng, dan mewariskan keasrian alam untuk generasi penerus.</p>`
  }
];
