
      document.getElementById("submit").onclick = function () { 
      document.getElementById("table").style.display = "block";
    
      let row = table.insertRow(-1);
      let fname = row.insertCell(0);
      let lname = row.insertCell(1);
      let address = row.insertCell(2);
      let pincode = row.insertCell(3);
      let gender = row.insertCell(4);
      let food = row.insertCell(5);
      let state = row.insertCell(6);
      let country = row.insertCell(7);
      fname.innerHTML = document.getElementById("first_name").value;
      lname.innerHTML = document.getElementById("last_name").value;
      address.innerHTML = document.getElementById("address").value;
      pincode.innerHTML = document.getElementById("pin").value;
      gender.innerHTML = document.querySelector('input[name="gender"]:checked').value;
      food.innerHTML =  document.getElementById("food").value;
      state.innerHTML = document.getElementById("state").value;
      country.innerHTML = document.getElementById("country").value;
      document.getElementById("regform").reset();
    }     




