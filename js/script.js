/* global monogatari */


// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'bgMusic': 'birdfish.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	classroom: 'School/classroom-3.png',
	langit: 'School/langit-luar-kelas.png',
	classroom2: 'School/Classroom-2.png',
	office: 'School/Office-1.png',
	pameranKerjaya: 'School/Building-3.png',
	bilikPameran: 'School/Building-4.png',
	classroom3: 'School/Classroom-1.png',
	classroom4: 'School/Classroom-11.png',
});


// Define the Characters
monogatari.characters ({
	'e': {
		name: 'Emily',
		color: '#5bcaff',
		directory: 'emily',
		sprites: {
			default: '1_default.png',
            talking: '1_talking.png',
            
		}
	},
	'a': {
		name: 'Azri',
		color: '#5bcaff', // what text color will be displayed
		directory: 'azri',
		sprites: {
			default: '1.png',
			smile: '2.png',
			blush: '3.png',
			suprised: '8.png',
		},
		expressions: {
			blushMore: 'expressions/4.png',
			suprised: '8.png'
		},
		// nvl: true, //jadi mod nvl or 3rd person pov

	},
	'aa': {
		name: 'Aaron',
		color: '#5bcaff', // what text color will be displayed
		directory: 'aaron',
		sprites: {
			default: '5_smile.png',
			smile: '5_smile2.png',
			
		},

	},
	'li': {
		name: 'Lisa',
		color: '#5bcaff', // what text color will be displayed
		directory: 'lisa',
		sprites: {
			default: '3_normal.png',
			smile: '3_slight mad.png',
			
		},

	},
});

const person = {
	'name' : 'Yusuf des',
	'Age' : '23'
};

monogatari.script ({
	// The game starts here.
	'Start': [ //untuk kau mula
	
	
		
		'play music bgMusic with loop',
		'jump Scene1',
	],

	'Scene1': [
		'show scene classroom2 with fadeIn',
		'show character a default at center with fade-in ',
		'Pada suatu ketika, terdapat seorang pelajar bernama Azri yang mendapati sukar untuk memahami bagaimana kurikulum di sekolah dapat membantu mereka mencapai kerjaya yang berjaya. ',
		'Azri sering berasa stres dan kurang motivasi dalam kelasnya, dan sukar untuk melihat hubungan antara apa yang mereka pelajari dengan matlamat masa depan mereka.',
		'Azri merupakan seorang yang kreatif dengan minat dalam seni. Masa lapangnya diisi dengan menulis cerita, melukis kanvas berwarna-warni, dan menghasilkan melodinya sendiri dengan gitar.',
		' Namun, apabila melibatkan subjek akademik seperti matematik dan sains, Azri tidak dapat menghilangkan rasa bahawa topik-topik ini tidak berkaitan dengan cita-cita seni yang dimilikinya.',
		'Pada malam itu, Azri melakukan soalan kerja sekolah di rumahnya.',
		'jump QuestionScene1',// mula question1
	],

	'Scene2':[
		
		'show scene office with fadeIn',
		'Pada suatu hari, Azri memutuskan untuk berbincang dengan kaunselor sekolah tentang kebimbangannya.',
		'show character a default at left with fadeIn',
		'show character li default at right with fadeIn',
		'Kaunselor tersebut, Puan Lisa, terkenal dengan kebijaksanaan dan keupayaannya untuk membimbing pelajar ke arah potensi sebenar mereka. ',
		'Dia mendengarkan dengan penuh perhatian ketika Azri menceritakan kegelisahan dan keraguan mereka.',
		'Dengan senyuman lembut, Puan Lisa mula menjelaskan kepentingan pendidikan yang seimbang. ',
		'Dia berkongsi kisah-kisah seniman terkenal, penulis, dan pemuzik yang mencapai kejayaan bukan hanya melalui bakat kreatif mereka, tetapi juga melalui pengetahuan pelbagai subjek.',
		'Dia menjelaskan bahawa walaupun tidak memahami secara keseluruhan, kemahiran dan pengetahuan yang diperoleh melalui pendidikan adalah penting untuk kejayaan dalam apa jua kerjaya.',
		'Untuk menggambarkan hujahnya, Puan Lisa menjemput Azri untuk menghadiri pameran kerjaya yang diadakan di sekolah mereka pada minggu berikutnya. ',
		' Azri bersetuju, walaupun dengan skeptis, berharap untuk mendapatkan kejelasan dan inspirasi.',

		'hide character li with fadeOut',
		'show character a default at center with fadeIn',

		'Azri keluar daripada bilik kaunseling dan terlanggar seorang murid yang membawa buku dalam keadaan terburu-buru',
		'Azri menolongnya dan terlihat sebuah keratan kertas dan membacanya tanpa sengaja',
		
		'jump QuestionScene2',
	],

	'Scene3':[
		'show scene pameranKerjaya with fadeIn',
		'Di pameran kerjaya, Azri berasa kagum dengan pelbagai profesion yang dipamerkan.',
		'Terdapat jurutera yang merancang teknologi terkini, doktor yang menyelamatkan nyawa, usahawan yang menjalankan perniagaan yang berjaya, dan juga ahli sains yang menyelidik penemuan baharu. ',
		' Ketika Azri meneroka gerai-gerai yang dipamerkan, dia mendapat peluang untuk berbual dengan pakar dari bidang yang berbeza dan mempelajari perjalanan pendidikan mereka.',
		'show character a default at left with fadeIn',
		'show character e default at right with fadeIn',
		
		'Di salah satu kedai, Azri bertemu dengan seorang penulis terkenal bernama Emily, yang menceritakan kisah bagaimana cintanya pada kesusasteraan membawa dia untuk mengkaji Bahasa Inggeris di universiti.',
		'Emily menekankan bahawa pengetahuannya tentang sejarah, psikologi, dan sosiologi memberinya pemahaman yang lebih mendalam tentang manusia, yang dia gunakan dalam naratifnya yang menarik.',
		' Azri sedar bahawa walaupun dalam dunia seni, pendidikan yang seimbang memainkan peranan yang penting.',

		'hide character e with fadeOut',
		'show character a default at center with fadeIn',

		'Azri membelek daripada brosur yang terdapat di pameran kerjaya dan melihat ...',
	
		'jump QuestionScene3',
	],
	'Scene4': [
		'show scene bilikPameran with fadeIn',
		'show character a default at left with fadeIn',
		'show character aa default at right with fadeIn',
		
		'Di kedai yang lain, Azri bertemu dengan seorang arkitek bernama Aaron. ',
		'Aaron menjelaskan bagaimana cintanya pada matematik dan fizik membimbingnya untuk mengejar ijazah dalam senibina. ',
		'Dia menceritakan tentang pengiraan yang rumit dan kemahiran penyelesaian masalah yang diperlukan untuk merancang bangunan yang selamat dan berfungsi.',
		'Azri melihat hubungan antara kepakaran teknikal Aaron dengan keindahan artistik ciptaan arsitekturnya.',

		'hide character aa with fadeOut',
		'show character a default at center with fadeIn',

		'Saat Azri menjelajahi pameran kerjaya, mereka mendengar banyak kisah profesional yang telah menggunakan latar belakang pendidikan yang berbeza untuk berkembang dalam bidang yang mereka pilih. ',
		'Keraguan Azri mulai menghilang, digantikan dengan penghargaan baru terhadap kepentingan pendidikan.',

		'Sewaktu Azri berjalan pulang daripada pameran kerjaya, dia masih terngiang-ngiang terhadap satu pelajaran yang dia pelajari',
		'jump QuestionScene4',
	],
	
	'Scene5':[
		'show scene classroom3 with fadeIn',
		'Bersenjatakan perspektif baru ini, Azri kembali ke kelas-kelas mereka dengan semangat yang baru.',
		'Mereka mulai melihat nilai dalam setiap subjek dan bekerja keras untuk berjaya dalam kelas-kelas mereka. ',
		'Azri menyedari bahawa walaupun subjek seperti matematik dan sains, yang mungkin tidak berkaitan dengan impian seni mereka, setidaknya ia mampu kemahiran seperti pemikiran kritis, penyelesaian masalah, dan komunikasi yang efektif yang bernilai dalam apa jua kerjaya.',
		
		'Semasa didalam kelas, Cikgu ada bertanya kepada kelasnya,',
		'Azri mencuba nasibnya untuk menjawab setelah dia mendapat semangat yang baharu',
		'jump QuestionScene5',	
	],

	'Scene6':[
		'show scene classroom4 with fadeIn',
		'Setelah 2 tahun berlalu, dan Azri tamat belajar dari sekolah dengan kepujian.',
		' Dedikasi dan usaha keras mereka berbalas, dan mereka diterima di sebuah kolej seni yang terkenal.',
		'Di sana, Azri terus memupuk bakat kreatif mereka sambil mengambil manfaat dari pengetahuan yang mereka peroleh melalui pendidikan yang seimbang.',
		'Saat Azri menjalani tahun-tahun pengajian di kolej, mereka mula menggabungkan cintanya pada seni dengan pengetahuan dia tentang subjek-subjek lain. ',
		'Beliau mencipta hasil seni yang membangkitkan pemikiran terinspirasi oleh sains, menggabungkan prinsip-prinsip matematik ke dalam lukisan abstrak mereka, dan bahkan menulis cerita yang menjelajahi isu-isu sosial dan peristiwa sejarah.',
		'Pendekatan Azri yang unik dan antardisiplin membawa perhatian peminat seni, pengkritik, dan profesional. Karya mereka melampaui batas tradisional, memukau penonton dan mendapatkan pengiktirafan di dunia seni. ',
		'Kejayaan Azri berkembang, dan mereka menjadi seorang seniman terkenal yang dikenali dengan kemampuan mereka untuk menggabungkan kreativiti dan pengetahuan dengan harmoni.',
		'Mengingat kembali, Azri sedar bahawa keraguan dan kekecewaan awal mereka tentang pendidikan telah berubah menjadi penghargaan mendalam terhadap penghasilan kerjayanya.',
		'Mereka memahami bahawa pendidikan bukan sekadar alat untuk mencapai tujuan tetapi perjalanan sepanjang hayat yang dapat membentuk perspektif, meluaskan batas pemikiran, dan menyuburkan usaha seni mereka.',
		'Sejak saat itu, Azri tidak pernah meremehkan kepentingan pendidikan dan kesan yang dapat dimilikinya dalam mencapai kerjaya yang berjaya dan memuaskan. ',
		'Mereka menjadi penyokong integrasi disiplin yang berbeza dan mendorong orang lain untuk menghayati kekuatan pendidikan yang seimbang.',
		'Dan begitulah, kisah Azri menjadi sumber inspirasi bagi banyak pelajar yang, seperti mereka, pernah mempertanyakan nilai pelajaran mereka.',
		' Ketika mereka terus mencipta, berinovasi, dan mendorong batas-batas seni, warisan Azri terus hidup, mengingatkan semua orang bahwa kejayaan sejati tidak hanya datang dari bakat tetapi juga dari pengetahuan dan kemahiran yang diperoleh melalui pendidikan.',
		
		'The end.',
		'end'
	],
	
	
	'QuestionScene1': [
		'nvl ',
		'nvl 1. Suatu program pendidikan yang kandungarnya merangkumi semua pengetahuan,kemahiran, norma, nilai, unsur kebudayaan dan kepercayaan yang membantu perkembangan seseorang murid dengan sepenuhnya dari segi jasmani, rohani, mental dan emosi serta untuk menanam dan mempertingkatkan nilai moral yang dingini dan untuk menyampaikan pengetahuan.',
		'nvl Pernyataan tersebut merujuk kepada',
		
		{"Choice":{
			"FirstOption":{
				"Text": "A. Kurikulum kebangsaan",
				"Do": "jump labelSalah1",
				
		},
			"SecondOption":{
				"Text": "B. Dasar Pendidikan Kebangsaan.",
				"Do": "jump labelSalah1",
				
			},
			"ThirdOption":{
				"Text": "C. Standard Guru Malaysia.",
				"Do": "jump labelSalah1",
				
			},
			"FourthOption":{
				"Text": "D. Falsafah Pendidikan Kebangsaan",
				"Do": "jump labelBetul1",
				
			}
		}},

		
	],
	'labelBetul1': [
		'a ya anda betul',
		'jump Scene2',
	],
	'labelSalah1': [
		'a maaf anda salah',
		'jump Scene2',
	],

	'QuestionScene2':[
		'nvl ',
		'nvl 2. Manakah di antara susunan unsur-unsur program pendidikan yang terdapat dalam kurikulum kebangsaan Malaysia yang betul berdasarkan Akta pendidikan 1996?',
		'nvl I. Nilai',
		'nvl II. Norma',
		'nvl III. Kemahiran',
		'nvl IV. Pengetahuan',
		'nvl V. Kebudayaan',
		'nvl VI. Kepercayaan',

		{"Choice":{
			"FirstOption":{
				"Text": "A. I, II, III, IV, V dan VI.",
				"Do": "jump labelBetul2",
				
		},
			"SecondOption":{
				"Text": "B. IV, III, II, I, V dan VI.",
				"Do": "jump labelSalah2",
				
			},
			"ThirdOption":{
				"Text": "C. VI, IV, I, V, III dan II.",
				"Do": "jump labelSalah2",
				
			},
			"FourthOption":{
				"Text": "D. VI, V, IV, III, Il dan I.",
				"Do": "jump labelSalah2",
				
			}
		}},
		
		
	],
	'labelBetul2': [
		'a ya anda betul',
		'jump Scene3',
	],
	'labelSalah2': [
		'a maaf anda salah',
		'jump Scene3',
	],
	'QuestionScene3':[
		'nvl ',
		'nvl 3.Kurikulum yang dipelajari atau diperolehi dalam bentuk upacara/majlis, peraturan, aktiviti, budaya, perlakuan, teladan dan sebagainya. Mempunyai peranan penting dalam mencapai matlamat pendidikan. ',
		'nvl Manakah di antara jenis kurikulum berikut bertepatan dengan pernyataan di atas?',

		{"Choice":{
			"FirstOption":{
				"Text": "A. Kurikulum ideal.",
				"Do": "jump labelSalah3",
				
		},
			"SecondOption":{
				"Text": "B. Kurikulum formal.",
				"Do": "jump labelSalah3",
				
			},
			"ThirdOption":{
				"Text": "C. Kurikulum rasmi.",
				"Do": "jump labelSalah3",
				
			},
			"FourthOption":{
				"Text": "D. Kurikulum tersembunyi.",
				"Do": "jump labelBetul3",
				
			}
		}},

		
	],
	'labelBetul3': [
		'a ya anda betul',
		'jump Scene4'
	],
	'labelSalah3': [
		'a maaf anda salah',
		'jump Scene4'
	],
	'QuestionScene4':[
		'nvl ',
		'nvl 4. Kurikulum kebangsaan mencakupi dua kategori iaitu kurikulum formal dan kurikulum tidak formal. Manakah berikut merupakan ciri-ciri kurikulum formal?',
		'nvl I. Dikenali sebagai kurikulum akademik.',
		'nvl II. Murid mempunyai kebebasan memili mata pelajaran.',
		'nvl III. Melibatkan proses pengajaran dan pembelajaran terancang.',
		'nvl IV. Bermalamatkan membangunkan potensi murid secara holistik.',

		{"Choice":{
			"FirstOption":{
				"Text": "A. I, Il dan Ill sahaja.'",
				"Do": "jump labelBetul4",
				
		},
			"SecondOption":{
				"Text": "B. I, II dan IV sahaja.",
				"Do": "jump labelSalah4",
				
			},
			"ThirdOption":{
				"Text": "C. I, Ill dan IV sahaja.",
				"Do": "jump labelSalah4",
				
			},
			"FourthOption":{
				"Text": "D. II, Ill dan IV sahaja.",
				"Do": "jump labelSalah4",
				
			}
		}},
		
	],
	'labelBetul4': [
		'a ya anda betul',
		'jump Scene5',
	],
	'labelSalah4': [
		'a maaf anda salah',
		'jump Scene5',
	],
	'QuestionScene5':[
		'nvl ',
		'nvl Kurikulum merupakan aktiviti terancang di bilik darjah yang meliputi segala aktiviti pembelajaran yang telah dirancang oleh guru-guru untuk dipelajari oleh murid-murid di dalam bilik darjah (Razali Arof, 1996).',
		'nvl Berdasarkan definisi tersebut, manakah antara perkara berikut merujuk kepada aktiviti pembelajaran yang perlu dirancang oleh guru?',
		'nvl I. Memilih kaedah pengajaran yang berkesan.',
		'nvl II. Menetapkan objektif pengajaran & pembelajaran.',
		'nvl III. Menetapkan kumpulan murid mengikut pencapaian.',
		'nvl IV. Menentukan kandungan kurikulum yang perlu diajar.',

		{"Choice":{
			"FirstOption":{
				"Text": "A. I, Il dan III sahaja.",
				"Do": "jump labelSalah5",
				
		},
			"SecondOption":{
				"Text": "B. I, II dan IV sahaja.",
				"Do": "jump labelBetul5",
				
			},
			"ThirdOption":{
				"Text": "C. I, Ill dan IV sahaja.",
				"Do": "jump labelSalah5",
				
			},
			"FourthOption":{
				"Text": "D. II. Ill dan IV sahaja.",
				"Do": "jump labelSalah5",
				
			}
		}},
		
	],
	//buat placeholder untuk after betul or salah
	'labelBetul5': [
		'a ya anda betul',
		'jump Scene6',
	],
	'labelSalah5': [
		'a maaf anda salah',
		'jump Scene6',
	],

	
});