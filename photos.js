/* ==========================================
   Last Trace
   Photo Database
========================================== */

const photos = [

    {
        id: 1,

        title: "灯りの残る場所",

        image: "images/photo1.JPG",

        location: "福岡県福岡市博多区吉塚1丁目14-15",

        date: "2026.08.15",

        camera: "Canon EOS Kiss X10",

        lens: "EF-S 18-55mm",

        film: "Kodak Gold 200",

        settings: "F8 / 1-250 / ISO200",

        description:
        "再開発によって姿を消す可能性がある商店を記録した作品。普段見慣れた景色も、時間の経過とともに失われていくというテーマを表現している。"
    },

    {
        id: 2,

        title: "まだ続いている街",

        image: "images/photo2.JPG",

        location: "福岡県福岡市博多区吉塚1丁目14-15",

        date: "2026.08.20",

        camera: "Canon EOS Kiss X10",

        lens: "EF-S 18-55mm",

        film: "Kodak Gold 200",

        settings: "F5.6 / 1-500 / ISO100",

        description:
        "日常の風景として存在する駅前を記録した作品。"
    },

    {
        id: 3,

        title: "誰かの居場所",

        image: "images/photo3.jpg",

        location: "大分県由布市狭間町内成199-1",

        date: "2025.02.28",

        camera: "Canon EOS Kiss X10",

        lens: "EF-S 18-55mm",

        film: "Kodak Gold 200",

        settings: "F8 / 1-320 / ISO200",

        description:
        "古くから地域を支えてきた市場を記録した作品。"
    },

   {
      id: 4,

      title: "日常の遺産",

      image: "images/photo4.JPG",

      location:　"福岡県福岡市博多区吉塚1丁目14-15",

      date: "2026.08.18",

      camera: "Canon EOS Kiss X10",

      lens: "EF-S 18-55mm",

      film: "Kodak gold 200",

      settings: "F8 / 1-320 / ISO200",

      description:
      ""
   },

   {
      id: 5,

      title: "時が止まった場所",

      image: "images/photo5.JPG",

      location: "福岡県福岡市博多区千代1丁目23-47",

      date: "2026.08.18",

      camera: "Canon EOS Kiss X10",

      lens: "EF-S 18-55mm",

      film: "Kodak Gold 200",

      settings: "F8 / 1-320 / ISO200",

      description:
      "古い自動販売機と公衆電話が並ぶ、日本の日常的な街角。"
   },

   {
      id: 6,

      title: "路地裏の焼き鳥屋",

      image: "images/photo6.JPG",

      location: "福岡県福岡市博多区千代1丁目23-49",

      date: "2026.08.18",

      camera: "Canon EOS Kiss X10",

      lens: "EF-S 18-55mm",

      film: "Kodak Gold 200",

      settings: "F8 / 1-320 / ISO200",

      description:
      "赤提灯と暖簾が、懐かしい記憶を呼び起こす。"
   },

   {
      id: 7,

      title: "看板娘は、まだ夢の中",

      image: "images/photo7.JPG",

      location: "福岡県福岡市博多区吉塚1丁目14-15",

      date: "2026.08.18",

      camera: "Canon EOS Kiss X10",

      lens: "EF-S 18-55mm",

      film: "Kodak Gold 200",

      settings: "F8 / 1-320 / ISO200",

      description:
      "古いカラオケ喫茶が、静かに開店を待つ街角。"
   },

   {
      id: 8,

      title: "藤原衣料と山本鮮魚",

      image: "images/photo8.JPG",

      location: "福岡県福岡市博多区吉塚1丁目14-15",

      date: "2026.08.18",

      camera: "Canon EOS Kiss X10",

      lens: "EF-S 18-55mm",

      film: "Kodak Gold 200",

      settings: "F8 / 1-320 / ISO200",

      description:
      "暗い青色の天井を照らす、暖かな裸電球。"
   },

   {
      id: 9,

      title: "アーケードの面影",

      image: "images/photo9.JPG",

      location: "福岡県福岡市博多区吉塚1丁目14-15",

      date: "2026.08.18",

      camera: "Canon EOS Kiss X10",

      lens: "EF-S 18-55mm",

      film: "Kodak Gold 200",

      settings: "F8 / 1-320 / ISO200",

      description:
      "昭和の面影を留める商店街の一角。使い込まれた看板とシャッターが魅せる、日常のノスタルジー。"
   },

   {
      id: 10,

      title: "山裾の停留所",

      image: "images/photo10.JPG",

      location: "熊本県阿蘇郡南小国町",

      date: "2026.09.19",

      camera: "Canon EOS Kiss X10",

      lens: "EF-S 18-55mm",

      film: "Kodak Gold 200",

      settings: "F8 / 1-320 / ISO200",

      description:
      "夕暮れの柔らかな光が差し込む山間の集会所前。"
   },

   {
      id: 11,

      title: "季節を重ねる場所",

      image: "images/photo11.JPG",

      location: "鹿児島県垂水市新御堂",

      date: "2026.10.27",

      camera: "iPhone16e",

      lens: "",

      film: "Camera app",

      settings: "",

      description:
      "木々が重なり合い、自然のトンネルのようになった小道。頭上から差し込む光が地面を照らし、静かな時間が流れている。何気なく通り過ぎてしまうような場所にも、季節とともに変わりゆく風景がある。"
   },

   {
      id: 12,

      title: "街角に残る小さなお店",

      image: "images/photo12.JPG",

      location: "鹿児島県鹿児島市吉野町",

      date: "2026.11.06",

      camera: "iPhone12pro",

      lens: "",

      film: "Camera app",

      settings: "",

      description:
      "住宅街の一角に佇む、小さな駄菓子屋。鮮やかなピンク色の軒先が目を惹き、周囲の建物とは異なる独特の存在感を放っている。何気ない街の日常に溶け込みながら、昔ながらのお店の風景を今も残している。こうした何気ない場所も、いつかみられなくなるかもしれない。"
   },

   {
      id: 13,

      title: "街角に残された電話ボックス",

      image: "images/photo13.JPG",

      location: "鹿児島県鹿児島市吉野町",

      date: "2026.11.06",

      camera: "iPhone12pro",

      lens: "",

      film: "Camera app",

      settings: "",

      description:
      "道路沿いにひっそりと佇む、昔ながらの公衆電話ボックス。ガラス越しに見える緑色の電話機と、長年使われてきたような外観が印象的である。携帯電話が普及した現代では、公衆電話を利用する機会も少なくなり、その姿を見かけることも減ってきた。何気ない街の風景の中に残る、時代の移り変わりを感じさせる場所である。"
   },

   {
      id: 14,

      title: "青空の下の小さな無人販売所",

      image: "images/photo14.JPG",

      location: "鹿児島県鹿児島市吉野町",

      date: "2026.11.11",

      camera: "iPhone12pro",

      lens: "",

      film: "Camera app",

      settings: "",

      description:
      "散歩途中で見つけた小さな無人販売所。とれたての野菜や季節の花が並んでいると、ふと足を止めたくなる。"
   },

   {
      id: 15,

      title: "どこか懐かしい、活気ある街角の立ち食い酒場",

      image: "images/photo15.JPG",

      location: "鹿児島県鹿児島市騎射場",

      date: "2026.11.14",

      camera: "iPhone12pro",

      lens: "",

      film: "Camera app",

      settings: "",

      description:
      "ふらりと立ち寄りたくなる、活気あふれる大衆立ち飲み屋さん。暖簾の向こうから楽しそうな声が聞こえてきそうです。"
   },

   {
      id: 16,

      title: "地域の胃袋を支える二毛作のお店、キッチン花ちゃん",

      image: "images/photo16.JPG",

      location: "鹿児島県鹿児島市",

      date: "2026.11.14",

      camera: "iPhone12pro",

      lens: "",

      film: "Camera app",

      settings: "",

      description:
      "昼はお弁当・お惣菜、夜は立ち飲み処になる「キッチン花ちゃん」。こういう地域に根ざした温かいお店、つい覗いてみたくなりますね。"
   },

   {
      id: 17,

      title: "曇り空の下、静かに伸びる昭和レトロな商店街",

      image: "images/photo17.JPG",

      location: "鹿児島県鹿児島市",

      date: "2026.11.14",

      camera: "iPhone12pro",

      lens: "",

      film: "Camera app",

      settings: "",

      description:
      "派手さはないけれど、なぜか心が落ち着く地方の商店街。曇り空の静けさも相まって、ゆっくり散歩したくなる風景です。"
   },

   {
      id: 18,

      title: "季節を重ねる場所",

      image: "images/photo18.JPG",

      location: "鹿児島県姶良市",

      date: "2026.11.01",

      camera: "iPhone12pro",

      lens: "",

      film: "Camera app",

      settings: "",

      description:
      "苔むした石の質感が味わい深い、庭の小さな噴水。滴り落ちる水の音まで聞こえてきそうな、静かで癒される風景です。"
   },

   {
      id: 19,

      title: "緑の山並みを背に佇む、木造三角屋根の直売所",

      image: "images/photo19.JPG",

      location: "鹿児島県鹿児島市",

      date: "2026.11.12",

      camera: "iPhone12pro",

      lens: "",

      film: "Camera app",

      settings: "",

      description:
      "山間の道沿いに佇む、三角屋根の直売所。軒先に並んだたくさんの切花と採れたての果物に、地域の豊かさと温かさを感じます。"
   },

   {
      id: 20,

      title: "草木に埋もれながら静かに残る、路傍の防空壕跡",

      image: "images/photo20.JPG",

      location: "鹿児島県鹿児島市",

      date: "2026.11.20",

      camera: "iPhone12pro",

      lens: "",

      film: "Camera app",

      settings: "",

      description:
      "道端の斜面に静かに口を開ける、戦時中の防空壕跡。草木に覆われながらも、すぐそばにある日常の風景の中で当時の記憶を静かに伝え続けています。"
   },
];
