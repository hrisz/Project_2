var admin = [
    {
        id: "1",
        name: "Haris",
        email: "hrisz@ventura.com",
        password: "bukped1"
    },

    {
        id: "2",
        name: "Dzulkifli",
        email: "dzul@bukped.com",
        password: "bukped2"
    }
]

function getLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    for (i = 0; i < admin.length; i++) {
      if (email == admin[i].email && password == admin[i].password) {
        console.log("Admin logged successfully.");
        alert("Selamat datang di Dashboard Admin Bukupedia!");
        window.location.href = "dashboard.html";
  
        return;
      } else if (!email || !password) {
        console.log("There's still blank form.");
        alert("Harap isi semua bidang!");
      } else {
        console.log("Incorrect email or password");
        alert("Email atau password salah");
      }
    }
  }