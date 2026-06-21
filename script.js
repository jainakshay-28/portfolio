const text = [
    "Oracle Cloud Engineer",
    "OCI Administrator",
    "Oracle Database Specialist",
    "Linux Administrator"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

    current = text[i];

    if (!isDeleting) {
        document.getElementById("typing").innerHTML =
            current.substring(0, j++);
    }
    else {
        document.getElementById("typing").innerHTML =
            current.substring(0, j--);
    }

    if (j == current.length + 1)
        isDeleting = true;

    if (j == 0 && isDeleting) {
        isDeleting = false;
        i++;

        if (i == text.length)
            i = 0;
    }

    setTimeout(type, 100);
}

type();
