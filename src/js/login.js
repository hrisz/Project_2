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

function getLogin(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!email || !password){
        console.log("There's still blank form.");
        alert("Harap isi semua bidang!");
        return;
    }

    var Login = false;
    for (i = 0; i < admin.length; i++) {
        if (email === admin[i].email && password === admin[i].password) {
            console.log("Admin login berhasil.");
            Login = true;
            break;
        }
    }
    if (Login) {
        alert("Selamat datang di Dashboard Admin Bukupedia!");
        window.location.href = "dashboard.html";
    }
    else {
        console.log("Incorrect email or password");
        alert("Email atau password salah");
    }
}