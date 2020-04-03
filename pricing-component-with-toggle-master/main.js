function toggle() {
  let t = document.getElementById('switch');
  let basic = document.getElementById('basic');
  let pro = document.getElementById('pro');
  let master = document.getElementById('master');

  let monthly = ['19.99', '24.99', '39.99'];
  let annually = ['199.99', '249.99', '399.99'];

  console.log(t.checked);
  if(t.checked) {
    // Monthly
    basic.innerHTML = monthly[0];
    pro.innerHTML = monthly[1];
    master.innerHTML = monthly[2];
  } else {
    // Annually
    basic.innerHTML = annually[0];
    pro.innerHTML = annually[1];
    master.innerHTML = annually[2];
  }
}
