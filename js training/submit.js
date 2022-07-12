function jump() {
  window.localStorage.setItem('name', document.getElementById('name').value);
  window.localStorage.setItem('birthday', document.getElementById('birthday').value);
  window.localStorage.setItem(
    'address', 
    document.getElementById('city').value + 
    document.getElementById('township').value + 
    document.getElementById('address').value);
  window.localStorage.setItem('email', document.getElementById('email').value);
  window.localStorage.setItem('phone', document.getElementById('phone').value);
  window.localStorage.setItem('account', document.getElementById('account').value);
  window.localStorage.setItem('password', document.getElementById('password').value);
  if (document.getElementById('boy').checked === false) {
    window.localStorage.setItem('sex', document.getElementById('girl').value);
  } else {
    window.localStorage.setItem('sex', document.getElementById('boy').value);
  }
  window.location = 'table.html';
}

function check() {
  let name = document.getElementById('name').value;
  let birthday = document.getElementById('birthday').value;
  let address = document.getElementById('address').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let account = document.getElementById('account').value;
  let password = document.getElementById('password').value;
  let passwordc = document.getElementById('passwordc').value;
  let checkothertype = new RegExp(/[''<>%;)(&+]/);
  let checkchinese = /[\u4E00-\u9FA5]{1,2}$/;
  let mouse = new RegExp(/@/);

  if (name === '') {
    alert('請輸入名字');
  } else if (account === '') {
    alert('帳號不能為空');
  } else if (phone === '') {
    alert('手機不能為空');
  } else if (password === '') {
    alert('密碼不能為空');
  } else if (passwordc === '') {
    alert('密碼確認不能為空');
  } else if (email === '') {
    alert('email不能為空');
  } else if (document.getElementById('girl').checked === false && document.getElementById('boy').checked === false) {
    alert('請選擇性別');
  } else if (birthday === '') {
    alert('請輸入生日');
  } else if (address === '') {
    alert('地址不能為空');
  } else if (!checkchinese.test(name)) {
    alert('名字請輸入中文');
  } else if (checkchinese.test(account) || checkothertype.test(account)) {
    alert('帳號包含不許可值');
  } else if (!mouse.test(email)) {
    alert('電子郵件不符規定');
  } else if (password != passwordc) {
    alert('請在確認一次您輸入之密碼是否一致');
  } else {
    jump();
  }
}

let cities = [
  ['臺北市', '松山區', '信義區', '大安區', '中山區', '中正區', '大同區', '萬華區', '文山區', '南港區', '內湖區', '士林區', '北投區'],
  ['新北市', '板橋區', '三重區', '中和區', '永和區', '新莊區', '新店區', '土城區', '蘆洲區', '汐止區', '樹林區', '淡水區', '鶯歌區',
  '三峽區', '瑞芳區', '五股區', '泰山區', '林口區', '深坑區', '石碇區', '坪林區', '三芝區', '石門區', '八里區', '平溪區', '雙溪區',
  '貢寮區', '金山區', '萬里區', '烏來區'],
  ['基隆市', '中正區', '七堵區', '暖暖區', '仁愛區', '中山區', '安樂區', '信義區'],
  ['桃園市', '中壢區', '大溪區', '楊梅區', '蘆竹區', '大園區', '龜山區', '八德區', '龍潭區', '平鎮區', '新屋區', '觀音區', '復興區'],
  ['新竹縣', '竹北市', '竹東鎮', '新埔鎮', '湖口鄉', '新豐鄉', '芎林鄉', '橫山鄉', '北埔鄉', '寶山鄉', '關西鎮', '峨眉鄉', '尖石鄉',
  '五峰鄉'],
  ['新竹市', '東區', '北區', '香山區'],
  ['臺中市', '中區', '東區', '南區', '西區', '北區', '西屯區', '南屯區', '北屯區', '豐原區', '東勢區', '大甲區', '清水區', '沙鹿區',
  '梧棲區', '后里區', '神岡區', '潭子區', '大雅區', '新社區', '石岡區', '外埔區', '大安區', '烏日區', '大肚區', '龍井區', '霧峰區', 
  '太平區', '大里區', '和平區'],
  ['苗栗縣', '苑裡鎮', '通霄鎮', '竹南鎮', '頭份鎮', '後龍鎮', '卓蘭鎮', '大湖鄉', '公館鄉', '銅鑼鄉', '南庄鄉', '頭屋鄉', '三義鄉',
  '西湖鄉', '造橋鄉', '三灣鄉', '獅潭鄉', '泰安鄉'],
  ['彰化縣', '鹿港鎮', '和美鎮', '線西鄉', '伸港鄉', '福興鄉', '秀水鄉', '花壇鄉', '芬園鄉', '員林鎮', '溪湖鎮', '田中鎮', '大村鄉',
  '埔鹽鄉', '埔心鄉', '永靖鄉', '社頭鄉', '二水鄉', '北斗鎮', '二林鎮', '田尾鄉', '埤頭鄉', '芳苑鄉', '大城鄉', '竹塘鄉'],
  ['南投縣', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'],
  ['雲林縣', '斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '古坑鄉', '大埤鄉', '莿桐鄉', '林內鄉', '二崙鄉', '崙背鄉',
  '麥寮鄉', '東勢鄉', '褒忠鄉', '臺西鄉', '元長鄉', '四湖鄉', '口湖鄉', '水林鄉'],
  ['嘉義縣', '太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '水上鄉',
  '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山鄉'],
  ['嘉義市', '東區', '西區'],
  ['臺南市', '新營區', '鹽水區', '白河區', '柳營區', '後壁區', '東山區', '麻豆區', '下營區', '六甲區', '官田區', '大內區', '佳里區',
  '學甲區', '西港區', '七股區', '將軍區', '北門區', '新化區', '善化區', '新市區', '安定區', '山上區', '玉井區', '楠西區', '南化區', 
  '左鎮區', '仁德區', '歸仁區', '關廟區', '龍崎區', '永康區', '東區', '南區', '北區', '安南區', '安平區', '中西區'],
  ['高雄市', '鹽埕區', '鼓山區', '左營區', '楠梓區', '三民區', '新興區', '前金區', '苓雅區', '前鎮區', '旗津區', '小港區', '鳳山區',
  '林園區', '大寮區', '大樹區', '大社區', '仁武區', '鳥松區', '岡山區', '橋頭區'],
  ['屏東縣', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉',
  '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '三地門鄉', 
  '霧臺鄉', '瑪家鄉', '泰武鄉', '來義鄉', '春日鄉', '獅子鄉', '牡丹鄉'],
  ['宜蘭縣', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],
  ['臺東縣', '成功鎮', '關山鎮', '卑南鄉', '鹿野鄉', '池上鄉', '東河鄉', '長濱鄉', '太麻里鄉', '大武鄉', '綠島鄉', '海端鄉', '延平鄉',
  '金峰鄉', '達仁鄉', '蘭嶼鄉'],
  ['花蓮縣', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '富里鄉', '秀林鄉'],
  ['澎湖縣', '馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'],
  ['金門縣', '金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'],
  ['連江縣', '南竿鄉', '北竿鄉', '莒光鄉', '東引鄉']
]

$(document).ready(function() {
  let city = document.getElementById("city");

  for (let i = 0; i < cities.length; i++) {
    let textNode = document.createTextNode(cities[i][0]);
        let cityoption = document.createElement('option');
        cityoption.appendChild(textNode);
        city.appendChild(cityoption);
  }
  $('#city').on('change', function() {
    let township = document.getElementById("township");

    township.options.length = 0;

    for (let i = 0; i < cities.length; i++) {
      if (this.value === cities[i][0]) {
        for (let j = 1; j < cities[i].length; j++) {
          let textNode = document.createTextNode(cities[i][j]);
          let townshipoption = document.createElement('option');
          townshipoption.appendChild(textNode);
          township.appendChild(townshipoption);
        }
      }
    }
  });
})