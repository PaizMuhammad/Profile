let alertShow = false;

setInterval(()=> {
    document.title =
    alertShow ? "Selamat Datang Di Profile Saya" 
              : "Welcome To My Profile";
alertShow = !alertShow;
}, 1000);