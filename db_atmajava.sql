-- Database: db_atmajava
CREATE DATABASE IF NOT EXISTS `db_atmajava` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `db_atmajava`;

-- --------------------------------------------------------
-- Table structure for table `users`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(100) DEFAULT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `users`
INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'Admin Atma', 'admin@atmajava.com', '$2y$10$njLcqzaqJNRd02ZmVr0cqOGgmNfRUXYxltvM2UCFTDYv3l/SyHXyG');

-- --------------------------------------------------------
-- Table structure for table `mountains`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `mountains`;
CREATE TABLE `mountains` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `nama` VARCHAR(100) NOT NULL,
  `gambar` VARCHAR(100) NOT NULL,
  `titik_koordinat` VARCHAR(100) NOT NULL,
  `deskripsi_page1` LONGTEXT NOT NULL,
  `deskripsi_page2` LONGTEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `mountains`
INSERT INTO `mountains` (`id`, `slug`, `nama`, `gambar`, `titik_koordinat`, `deskripsi_page1`, `deskripsi_page2`) VALUES
(1, 'gunung-merapi', 'Gunung Merapi', 'merapi', '7°32\'30\"S 110°26\'46\"E', 
'<p>Gunung Merapi (ketinggian puncak 2.930 mdpl, per 2010) adalah gunung berapi di bagian tengah Pulau Jawa dan merupakan salah satu gunung api teraktif di Indonesia. Lereng sisi selatan berada dalam administrasi Kabupaten Sleman, Daerah Istimewa Yogyakarta, dan sisanya berada dalam wilayah Provinsi Jawa Tengah, yaitu Kabupaten Magelang di sisi barat, Kabupaten Boyolali di sisi utara dan timur, serta Kabupaten Klaten di sisi tenggara.</p><p>Kawasan hutan di sekitar puncaknya menjadi kawasan Taman Nasional Gunung Merapi sejak tahun 2004. Karakteristik letusan Merapi yang khas dengan pembentukan kubah lava dan awan panas (wedhus gembel) menjadikannya pusat perhatian vulkanologi internasional dan laboratorium alam bagi riset mitigasi bencana geologi.</p>',
'<p>Bagi masyarakat lereng dan Keraton Yogyakarta, Merapi bukan sekadar bentang alam vulkanik, melainkan memiliki posisi spiritual penting dalam sumbu filosofis Yogyakarta. Setiap tahun upacara Labuhan Merapi digelar sebagai wujud syukur dan penghormatan terhadap alam semesta.</p><p>Sebagai gunung api teraktif, pendaki dan pelancong wajib mematuhi rekomendasi status vulkanik dari BPPTKG. Jalur pendakian resmi via Selo menuntut kebugaran fisik, masker debu vulkanik, serta kedisiplinan tidak mendekati bibir kawah aktif saat status dinaikkan.</p>'),

(2, 'gunung-salak', 'Gunung Salak', 'salak', '6°43\'00\"S 106°44\'00\"E',
'<p>Gunung Salak merupakan kompleks gunung berapi yang terletak di selatan Jakarta, di antara Kabupaten Bogor dan Kabupaten Sukabumi, Jawa Barat. Nama Salak tidak berasal dari buah salak, melainkan diserap dari bahasa Sanskerta "Salaka" yang berarti perak.</p><p>Kawasan ini berada di dalam cakupan Taman Nasional Gunung Halimun Salak yang terkenal dengan curah hujan sangat tinggi, kabut tebal yang kerap turun mendadak, serta vegetasi hutan hujan tropis pegunungan yang sangat rimbun dan masih lestari menjadi habitat owa jawa, macan tutul, dan elang jawa.</p>',
'<p>Gunung Salak menyimpan banyak peninggalan sejarah dan mitos mistis Sunda kuno, salah satunya makam keramat serta kawah aktif bernama Kawah Ratu yang mengeluarkan belerang alami.</p><p>Medan pendakian Gunung Salak dikenal sebagai salah satu yang paling menantang dan teknis di Jawa Barat karena jalur tanah liat yang licin, akar pohon yang menjalar, serta kontur punggungan rapat. Pendaki dianjurkan membawa peralatan navigasi darat yang memadai dan tidak memaksakan perjalanan di malam hari.</p>'),

(3, 'gunung-slamet', 'Gunung Slamet', 'slamet', '7°14\'30\"S 109°12\'40\"E',
'<p>Gunung Slamet dengan ketinggian 3.428 mdpl merupakan gunung tertinggi di Jawa Tengah serta gunung kedua tertinggi di Pulau Jawa setelah Semeru. Gunung ini terletak di antara 5 kabupaten, yaitu Brebes, Banyumas, Purbalingga, Tegal, dan Pemalang.</p><p>Puncak Slamet memiliki kawah aktif luas berdiameter lebih dari 1 kilometer yang dinamai Segara Wedi. Suhu udara di puncaknya sangat dingin dan hembusan angin kencang menerpa padang pasir bebatuan vulkanik yang membentang luas tanpa pepohonan pelindung.</p>',
'<p>Nama "Slamet" berasal dari bahasa Jawa/Arab yang bermakna selamat atau aman. Terdapat mitos lokal bahwa apabila Gunung Slamet meletus dahsyat, Pulau Jawa bisa terbelah dua, sehingga masyarakat selalu berdoa agar gunung ini senantiasa memberi kedamaian.</p><p>Jalur pendakian yang populer antara lain via Bambangan (Purbalingga) dan Guci (Tegal). Persiapan fisik yang matang dan jaket tebal windproof sangat krusial untuk menghadapi trek panjang bertanah terjal serta hawa dingin menusuk tulang di pos-pos ketinggian.</p>'),

(4, 'gunung-sumbing', 'Gunung Sumbing', 'sumbing', '7°23\'04\"S 110°04\'13\"E',
'<p>Gunung Sumbing adalah gunung api yang terletak di Jawa Tengah dengan ketinggian 3.371 mdpl. Gunung ini merupakan gunung tertinggi ketiga di Pulau Jawa setelah Semeru dan Slamet. Berdiri berdampingan dengan Gunung Sindoro, keduanya dikenal masyarakat sebagai gunung kembar yang memesona pemandangan lanskap Temanggung dan Wonosobo.</p><p>Karakteristik Sumbing memiliki kaldera besar dengan kawah aktif dan bibir tebing curam. Lereng bawahnya dipenuhi persawahan bertingkat dan perkebunan tembakau khas lereng gunung.</p>',
'<p>Pendakian via Garung di Wonosobo atau via Bowongso menawarkan pemandangan savana luas serta padang bunga edelweiss di ketinggian. Di puncaknya terdapat Puncak Rajawali, Puncak Sejati, dan Puncak Buntu.</p><p>Pendaki disarankan memperhatikan manajemen waktu dan cadangan air, karena sebagian besar pos atas tidak memiliki sumber mata air alami saat musim kemarau berlangsung.</p>'),

(5, 'gunung-semeru', 'Gunung Semeru', 'semeru', '8°06\'29\"S 112°55\'12\"E',
'<p>Gunung Semeru adalah gunung berapi kerucut tertinggi di Pulau Jawa dengan puncak tertingginya Mahameru mencapai 3.676 meter dari permukaan laut (mdpl). Semeru secara administratif berada di dua kabupaten di Jawa Timur, yaitu Lumajang dan Malang, serta berada di kawasan Taman Nasional Bromo Tengger Semeru.</p><p>Kawah aktifnya bernama Jonggring Saloko yang secara berkala setiap 15-30 menit menyemburkan abu vulkanik dan asap tebal ke angkasa. Daya tarik utama di sepanjang jalur pendakiannya adalah keindahan danau air tawar alami Ranu Kumbolo dan hamparan padang ungu Oro-Oro Ombo.</p>',
'<p>Dalam kosmologi Hindu kuno, Semeru dianggap sebagai paku bumi Pulau Jawa yang dipindahkan langsung dari Gunung Meru di India kuno. Gunung ini sangat disakralkan dan menyimpan situs Arcopodo serta kisah pendakian legendaris Soe Hok Gie.</p><p>Pendaki wajib menerapkan prinsip "Zero Waste", menghormati larangan mendirikan tenda dekat air Ranu Kumbolo, dan waspada terhadap lontaran batu serta gas beracun Blank 75 di lereng pasir Mahameru.</p>'),

(6, 'gunung-bromo', 'Gunung Bromo', 'bromo', '7°56\'30\"S 112°57\'00\"E',
'<p>Gunung Bromo (2.329 mdpl) adalah gunung berapi aktif yang terletak di dalam kaldera raksasa Tengger dengan hamparan lautan pasir seluas sekitar 10 kilometer persegi di Jawa Timur. Bromo terkenal ke seluruh penjuru dunia karena kemudahan aksesnya dan keindahan matahari terbit berlatar belakang siluet Semeru dan Batok.</p>',
'<p>Gunung Bromo disucikan oleh suku Tengger yang bermukim di sekitarnya. Setiap bulan Kasada, diadakan upacara ritual Yadnya Kasada di mana sesaji hasil bumi dilarung ke dalam kawah berasap sebagai ungkapan rasa syukur kepada Sang Hyang Widhi.</p>');

-- --------------------------------------------------------
-- Table structure for table `gunung`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `gunung`;
CREATE TABLE `gunung` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nama_gunung` VARCHAR(100) NOT NULL,
  `nama` VARCHAR(100) DEFAULT NULL,
  `deskripsi` TEXT DEFAULT NULL,
  `lokasi_maps` TEXT DEFAULT NULL,
  `maps_link` TEXT DEFAULT NULL,
  `link_maps` TEXT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `gunung`
INSERT INTO `gunung` (`id`, `nama_gunung`, `nama`, `deskripsi`, `lokasi_maps`, `maps_link`, `link_maps`) VALUES
(1, 'Gunung Merapi', 'Gunung Merapi', 'Gunung api aktif di perbatasan DIY dan Jawa Tengah dengan ketinggian 2.930 mdpl.', 'https://maps.google.com/?q=Gunung+Merapi', 'https://maps.google.com/?q=Gunung+Merapi', 'https://maps.google.com/?q=Gunung+Merapi'),
(2, 'Gunung Sumbing', 'Gunung Sumbing', 'Gunung api di Jawa Tengah berketinggian 3.371 mdpl, kembaran Gunung Sindoro.', 'https://maps.google.com/?q=Gunung+Sumbing', 'https://maps.google.com/?q=Gunung+Sumbing', 'https://maps.google.com/?q=Gunung+Sumbing'),
(3, 'Gunung Slamet', 'Gunung Slamet', 'Gunung tertinggi di Jawa Tengah (3.428 mdpl) dengan bentang kawah Segara Wedi yang luas.', 'https://maps.google.com/?q=Gunung+Slamet', 'https://maps.google.com/?q=Gunung+Slamet', 'https://maps.google.com/?q=Gunung+Slamet'),
(4, 'Gunung Salak', 'Gunung Salak', 'Pegunungan berhutan hujan tropis lebat di Jawa Barat dengan ketinggian 2.211 mdpl.', 'https://maps.google.com/?q=Gunung+Salak', 'https://maps.google.com/?q=Gunung+Salak', 'https://maps.google.com/?q=Gunung+Salak'),
(5, 'Gunung Semeru', 'Gunung Semeru', 'Puncak tertinggi Pulau Jawa (Mahameru 3.676 mdpl) dan Danau Ranu Kumbolo.', 'https://maps.google.com/?q=Gunung+Semeru', 'https://maps.google.com/?q=Gunung+Semeru', 'https://maps.google.com/?q=Gunung+Semeru'),
(6, 'Gunung Bromo', 'Gunung Bromo', 'Gunung vulkanik ikonik di tengah kaldera lautan pasir Tengger Jawa Timur (2.329 mdpl).', 'https://maps.google.com/?q=Gunung+Bromo', 'https://maps.google.com/?q=Gunung+Bromo', 'https://maps.google.com/?q=Gunung+Bromo'),
(7, 'Gunung Prau', 'Gunung Prau', 'Puncak favorit di dataran tinggi Dieng Jawa Tengah dengan pemandangan golden sunrise terbaik (2.565 mdpl).', 'https://maps.google.com/?q=Gunung+Prau', 'https://maps.google.com/?q=Gunung+Prau', 'https://maps.google.com/?q=Gunung+Prau'),
(8, 'Gunung Merbabu', 'Gunung Merbabu', 'Gunung tidur berketinggian 3.145 mdpl di Jawa Tengah yang terkenal dengan padang savana berbukit-bukit hijau.', 'https://maps.google.com/?q=Gunung+Merbabu', 'https://maps.google.com/?q=Gunung+Merbabu', 'https://maps.google.com/?q=Gunung+Merbabu');

-- --------------------------------------------------------
-- Table structure for table `artikel`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `artikel`;
CREATE TABLE `artikel` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `judul` VARCHAR(255) NOT NULL,
  `gambar` VARCHAR(255) NOT NULL,
  `quote` TEXT DEFAULT NULL,
  `isi` LONGTEXT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `artikel`
INSERT INTO `artikel` (`id`, `judul`, `gambar`, `quote`, `isi`) VALUES
(1, 'Rencana Sebelum Melangkah: Persiapan Fisik & Manajemen Logistik Pendakian', 'gambar1.jpeg', 
'Setiap puncak menawarkan keindahan, namun keselamatan adalah tujuan utama dari setiap perjalanan.',
'<p>Mendaki gunung di Pulau Jawa bukan sekadar tentang mencapai puncak dan mengibarkan bendera. Lebih dari itu, setiap penjelajahan menuntut kesiapan fisik prima, perlengkapan standar keselamatan, serta manajemen logistik yang terencana dengan baik.</p><p>Persiapan fisik sebaiknya dimulai setidaknya dua hingga empat minggu sebelum pendakian. Latihan kardiovaskular seperti jogging, berenang, dan latihan beban untuk kaki akan sangat membantu tubuh beradaptasi dengan elevasi curam dan beban ransel.</p><p>Selain itu, etika <i>Leave No Trace</i> (LNT) harus senantiasa dijaga: bawa pulang seluruh sampah Anda, hormati ekosistem flora-fauna setempat, dan patuhi arahan dari pos pengamatan basecamp.</p>'),

(2, 'Mengenal Jalur Pendakian Gunung Sumbing via Garung & Bowongso', 'gambar2.jpeg',
'Di antara dinginnya kabut dan terjalnya lereng, Sumbing menyuguhkan panorama fajar yang abadi.',
'<p>Gunung Sumbing (3.371 MDPL) berdiri megah berhadapan dengan Gunung Sindoro di Jawa Tengah. Terdapat beberapa jalur resmi pendakian, di antaranya jalur legendaris via Garung di Wonosobo dan jalur Bowongso.</p><p>Jalur Garung terkenal dengan variasi medannya yang menantang melewati perkebunan tembakau warga, hutan pinus, hingga bebatuan terjal menuju Puncak Rajawali. Sementara itu, jalur Bowongso menawarkan panorama punggungan yang mempesona dengan kemiringan yang relatif konstan.</p><p>Pastikan Anda membawa perbekalan air yang cukup karena sumber air di jalur pendakian Sumbing cukup terbatas saat musim kemarau.</p>'),

(3, 'Etika & Konservasi: Menjaga Kelestarian Hutan Gunung di Tanah Jawa', 'gambar3.jpeg',
'Hutan dan gunung adalah nafas peradaban Jawa; merawatnya berarti merawat masa depan kita bersama.',
'<p>Pegunungan Jawa menyimpan kekayaan keanekaragaman hayati yang tak ternilai, mulai dari elang jawa, macan tutul jawa, hingga bunga edelweiss langka di zona subalpin.</p><p>Pertumbuhan minat pendakian rekreasi harus diimbangi dengan kesadaran konservasi. Jangan pernah memetik flora endemik, membuat api unggun di area semak kering, atau meninggalkan jejak plastik sekecil apapun di jalur pendakian.</p><p>Mari menjadi penjelajah yang beretika: mendaki dengan rendah hati, belajar dari kearifan lokal masyarakat lereng, dan mewariskan keasrian alam untuk generasi penerus.</p>');
