// ================================
// MENU MOBILE
// ================================

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle("active");

    }
);


// ================================
// MENU DITUTUP SETELAH DIKLIK
// ================================

const navLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navMenu.classList.remove(
                "active"
            );

        }
    );

});


// ================================
// FORM KONTAK
// ================================

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value;


        alert(
            "Terima kasih, " +
            name +
            "! Pesan berhasil dikirim."
        );


        contactForm.reset();

    }
);