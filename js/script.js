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
	classroom: 'classroom-3.png',
	langit: 'School/langit-luar-kelas.png'
});


// Define the Characters
monogatari.characters ({
	'm': {
		name: 'Madison',
		color: '#5bcaff',
		directory: 'saki',
		sprites: {
			default: 'saki_normal.png',
            angry: 'saki_angry.png',
            curious: 'saki_curious.png',
            happy: 'saki_happy.png',
            suprised: 'saki_surprised.png',
            worried: 'saki_worried.png'
		}
	},
	'a': {
		name: 'Azri',
		color: '#5bcaff', // what text color will be displayed
		directory: 'yuki',
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

	}
});

const person = {
	'name' : 'Yusuf des',
	'Age' : '23'
};

monogatari.script ({
	// The game starts here.
	'Start': [ //untuk kau mula
	
		'show scene langit with fadeIn', //tunjukkan scene dekat classroom dari scene object
		'show character a default at center with fade-in duration 2s',
		'jump Scene1',
	],

	'Scene1': [
		'a Dahulu kala, terdapat seorang pelajar bernama Azri yang mendapati sukar untuk memahami bagaimana kurikulum di sekolah dapat membantu mereka mencapai kerjaya yang berjaya. ',
		'Dahulu kala, terdapat seorang pelajar bernama Azri yang mendapati sukar untuk memahami bagaimana kurikulum di sekolah dapat membantu mereka mencapai kerjaya yang berjaya. ',
		'Azri sering berasa frustrasi dan kurang motivasi dalam kelas-kelas mereka, dan sukar untuk melihat hubungan antara apa yang mereka pelajari dengan matlamat masa depan mereka.',
		'Azri merupakan seorang yang kreatif dengan minat dalam seni. Masa lapang mereka diisi dengan menulis cerita, melukis kanvas berwarna-warni, dan menghasilkan melodinya sendiri dengan gitar.',
		' Namun, apabila melibatkan subjek akademik seperti matematik dan sains, Azri tidak dapat menghilangkan rasa bahawa topik-topik ini tidak berkaitan dengan cita-cita seni mereka.',
		
		'jump QuestionScene1',// mula question1
	],

	'Scene2':[
		'Pada suatu hari, Azri memutuskan untuk berbincang dengan kaunselor bimbingan mereka tentang kebimbangan mereka.',
		'Kaunselor tersebut, Puan Thompson, terkenal dengan kebijaksanaan dan keupayaannya untuk membimbing pelajar ke arah potensi sebenar mereka. ',
		'Dia mendengarkan dengan penuh perhatian ketika Azri menceritakan kekecewaan dan keraguan mereka.',
		'Dengan senyuman lembut, Puan Thompson mula menjelaskan kepentingan pendidikan yang seimbang. ',
		'Dia berkongsi kisah-kisah seniman terkenal, penulis, dan pemuzik yang mencapai kejayaan bukan hanya melalui bakat kreatif mereka, tetapi juga melalui pengetahuan pelbagai subjek.',
		'Dia menjelaskan bahawa walaupun mungkin tidak kelihatan jelas, kemahiran dan pengetahuan yang diperoleh melalui pendidikan adalah penting untuk kejayaan dalam apa jua kerjaya.',
		'Untuk menggambarkan hujahnya, Puan Thompson menjemput Azri untuk menghadiri pameran kerjaya yang diadakan di sekolah mereka pada minggu berikutnya. ',
		' Azri bersetuju, walaupun dengan skeptis, berharap untuk mendapatkan kejelasan dan inspirasi.',
		
		'jump QuestionScene2',
	],

	'Scene3':[
		'Di pameran kerjaya, Azri terkagum dengan pelbagai profesion yang diwakili.',
		'Terdapat jurutera yang merancang teknologi terkini, doktor yang menyelamatkan nyawa, usahawan yang menjalankan perniagaan yang berjaya, dan juga ahli sains yang menyelidik penemuan baru. ',
		' Ketika Azri meneroka kedai-kedai berbagai-bagai, mereka mendapat peluang untuk berbual dengan profesional dari bidang yang berbeza dan mempelajari perjalanan pendidikan mereka.',
		'Di salah satu kedai, Azri bertemu dengan seorang penulis terkenal bernama Emily, yang menceritakan kisah bagaimana cintanya pada kesusasteraan membawa dia untuk mengkaji Bahasa Inggeris di universiti.',
		'Emily menekankan bahawa pengetahuannya tentang sejarah, psikologi, dan sosiologi memberinya pemahaman yang lebih mendalam tentang manusia, yang dia gunakan dalam naratifnya yang menarik.',
		' Azri sedar bahawa walaupun dalam dunia seni, pendidikan yang seimbang memainkan peranan yang penting.',
	
		'jump QuestionScene3',
	],
	'Scene4': [
		'Di kedai yang lain, Azri bertemu dengan seorang arkitek bernama Marcus. ',
		'Marcus menjelaskan bagaimana cintanya pada matematik dan fizik membimbingnya untuk mengejar ijazah dalam senibina. ',
		'Dia menceritakan tentang pengiraan yang rumit dan kemahiran penyelesaian masalah yang diperlukan untuk merancang bangunan yang selamat dan berfungsi.',
		'Azri melihat hubungan antara kepakaran teknikal Marcus dengan keindahan artistik ciptaan arsitekturnya.',
		'Saat Azri menjelajahi pameran kerjaya, mereka mendengar banyak kisah profesional yang telah menggunakan latar belakang pendidikan yang berbeza untuk berkembang dalam bidang yang mereka pilih. ',
		'Keraguan Azri mulai menghilang, digantikan dengan penghargaan baru terhadap kepentingan pendidikan.',
	
		'jump QuestionScene4',
	],
	
	'Scene5':[
		'Bersenjatakan perspektif baru ini, Azri kembali ke kelas-kelas mereka dengan semangat yang baru.',
		'Mereka mulai melihat nilai dalam setiap subjek dan bekerja keras untuk berjaya dalam kelas-kelas mereka. ',
		'Azri menyedari bahawa walaupun subjek seperti matematik dan sains, yang mungkin tidak berkaitan dengan impian seni mereka, mampu memupuk kemahiran seperti pemikiran kritis, penyelesaian masalah, dan komunikasi yang efektif yang bernilai dalam apa jua kerjaya.',
		
		'jump QuestionScene5',	
	],

	'Scene6':[
		'Tahun-tahun berlalu, dan Azri tamat belajar dari sekolah dengan kepujian.',
		' Dedikasi dan usaha keras mereka berbalas, dan mereka diterima di kolej seni yang terkenal.',
		'Di sana, Azri terus memupuk bakat kreatif mereka sambil mengambil manfaat dari pengetahuan yang mereka peroleh melalui pendidikan yang seimbang.',
		'Saat Azri menjalani tahun-tahun koleja, mereka mula menggabungkan cinta mereka pada seni dengan pengetahuan mereka tentang subjek-subjek lain. ',
		'Mereka mencipta instalasi yang membangkitkan pemikiran terinspirasi oleh sains, menggabungkan prinsip-prinsip matematik ke dalam lukisan abstrak mereka, dan bahkan menulis cerita yang menjelajahi isu-isu sosial dan peristiwa sejarah.',
		'Pendekatan Azri yang unik dan antardisiplin membawa perhatian peminat seni, pengkritik, dan profesional. Karya mereka melampaui batas tradisional, memukau penonton dan mendapatkan pengiktirafan di dunia seni. ',
		'Kejayaan Azri berkembang, dan mereka menjadi seorang seniman terkenal yang dikenali dengan kemampuan mereka untuk menggabungkan kreativiti dan pengetahuan dengan harmoni.',
		'Mengingat kembali, Azri sedar bahawa keraguan dan kekecewaan awal mereka tentang pendidikan telah berubah menjadi penghargaan mendalam terhadap kekuatan pembelajaran.',
		'Mereka memahami bahawa pendidikan bukan sekadar alat untuk mencapai tujuan tetapi perjalanan sepanjang hayat yang dapat membentuk perspektif, meluaskan horizons, dan menyuburkan usaha seni mereka.',
		'Sejak saat itu, Azri tidak pernah meremehkan kepentingan pendidikan dan kesan yang dapat dimilikinya dalam mencapai kerjaya yang berjaya dan memuaskan. ',
		'Mereka menjadi penyokong integrasi disiplin yang berbeza dan mendorong orang lain untuk menghayati kekuatan pendidikan yang seimbang.',
		'Dan begitulah, kisah Azri menjadi sumber inspirasi bagi banyak pelajar yang, seperti mereka, pernah mempertanyakan nilai pelajaran mereka.',
		' Ketika mereka terus mencipta, berinovasi, dan mendorong batas-batas seni, warisan Azri hidup, mengingatkan semua orang bahwa kejayaan sejati tidak hanya datang dari bakat tetapi juga dari pengetahuan dan kemahiran yang diperoleh melalui pendidikan.',
		
		'The end.',
		'end'
	],
	
	

	// 'altScene': [

	// 	// 'nvl This is an pov 3rd person side me.',
	// 	// 'nvl Here is an example of NVL text.',
	// 	// 'nvl Here is some more NVL text.',
	// 	// 'nvl One more line.'
		
	// ],
	
	
	
	'QuestionScene1': [
		'nvl ',
		'nvl 1. Suatu program pendidikan yang kandungarnya merangkumi semua pengetahuan,kemahiran, norma, nilai, unsur kebudayaan dan kepercayaan yang membantu perkembangan seseorang murid dengan sepenuhnya dari segi jasmani, rohani, mental dan emosi serta untuk menanam dan mempertingkatkan nilai moral yang dingini dan untuk menyampaikan pengetahuan.',
		'nvl Pernyataan tersebut merujuk kepada',
		
		{"Choice":{
			"FirstOption":{
				"Text": "A. Kurikulum kebangsaan",
				"Do": "jump labelBetul1",
				
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
				"Do": "jump labelSalah1",
				
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
				"Do": "jump labelBetul3",
				
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
				"Do": "jump labelSalah3",
				
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
				"Do": "jump labelBetul5",
				
		},
			"SecondOption":{
				"Text": "B. I, II dan IV sahaja.",
				"Do": "jump labelSalah5",
				
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