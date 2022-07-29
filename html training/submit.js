function jump() {
  window.localStorage.setItem('name', document.getElementById('name').value);
  window.localStorage.setItem('birthday', document.getElementById('birthday').value);
  window.localStorage.setItem('add', document.getElementById('add').value);
  window.localStorage.setItem('email', document.getElementById('email').value);
  window.localStorage.setItem('phone', document.getElementById('phone').value);
  window.localStorage.setItem('account', document.getElementById('account').value);
  window.localStorage.setItem('password', document.getElementById('password').value);
  if (document.getElementById('boy').checked == false) {
    window.localStorage.setItem('sex', document.getElementById('girl').value);
  } else {
    window.localStorage.setItem('sex', document.getElementById('boy').value);
  }
  window.location = 'table.html';
}

function check() {
  let name = document.getElementById('name').value;
  let birthday = document.getElementById('birthday').value;
  let add = document.getElementById('add').value;
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
  } else if (add === '') {
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