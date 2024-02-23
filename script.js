let menuVisibility = false;

function showMenu() {
    if (menuVisibility) {
        document.getElementById("nav").classList = "";
        menuVisibility = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisibility = true;
    }
}

function select(){
    document.getElementById("nav").classList = "";
    menuVisibility = false;
}