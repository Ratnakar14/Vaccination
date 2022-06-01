showData();


function showData() {
  document.getElementById("showUsers").innerHTML = "";
  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
  if (user_records) {
    for (let i = 0; i < user_records.length; i++) {
      let addDiv = document.createElement('div');
      addDiv.className = "row";
      addDiv.innerHTML = '  <div class="col-sm-2" style="padding: 10px; font-size: 16px; border: 1px solid black;">' + user_records[i].name + '</div><div class="col-sm-2" style="padding: 10px; font-size: 16px; border: 1px solid black;">' + user_records[i].email + '</div><div class="col-sm-1" style="padding: 10px; font-size: 16px; border: 1px solid black;">' + user_records[i].age + '</div><div class="col-sm-2" style="padding: 10px; font-size: 16px; border: 1px solid black;">' + user_records[i].phone + '</div><div class="col-sm-2" style="padding: 10px; font-size: 16px; border: 1px solid black;">' + user_records[i].adhaar + '</div><div class="col-sm-2" style="padding: 10px; font-size: 16px; border: 1px solid black;">' + user_records[i].address + '</div><div class="col-sm-1" style="padding: 10px; font-size: 16px; border: 1px solid black;">' + user_records[i].date + '</div>';
      document.getElementById("showUsers").appendChild(addDiv);

    }
  }
}