function kirim(){
    let inp_nama = document.getElementById("username").value;
    let inp_pass = document.getElementById("password").value;
    let form = document.getElementById("form");
    if(inp_nama == "Muhamad Riisky" && inp_pass == "0110222125"){
        form.setAttribute("action", "dashboard.html" );
        window.alert("Login berhasil")
    }
    else{
       window.alert("Login gagal !! \nUsername atau password salah!")
    }

    console.log(inp_pass + inp_nama);
}