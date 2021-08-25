function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}

function keepTheme() {
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") === "dark-theme") {
            setTheme("dark-theme");
        } else if (localStorage.getItem("theme") === "light-theme") {
            setTheme("light-theme")
        }
    } else {
        setTheme("dark-theme")
    }
}

module.exports = {
    setTheme,
    keepTheme
}