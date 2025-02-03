function getCookie(key) {
    const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${key}=`));
    return cookie ? cookie.split("=")[1] : null;
}


const loadTheme=()=>{
    const theme=getCookie("theme")??"light";
    document.getElementById("site").setAttribute('data-bs-theme',theme);
}

document.addEventListener('DOMContentLoaded', loadTheme);