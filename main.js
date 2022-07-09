const realButton = document.getElementById("picture");
const fakeButton = document.getElementById("open");
const image = document.getElementById("image");
const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext("2d");

/**
 * Maps the button for selecting an image.
 */
fakeButton.addEventListener("click", function() {
    realButton.click()
});


/**
 * Handler for selecting an image.
 */
realButton.addEventListener("change", function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function() {
            image.setAttribute('src', this.result);
        });
        reader.readAsDataURL(file);
    }
});

ctx.drawImage(image, 0, 0);
