const qrText = document.getElementById("qrText");
const imageBox = document.getElementById("imageBox");

function generateQRCode() {
    if (qrText.value.length > 0) {
        imageBox.innerHTML = '';

        const qrCode = new QRious({
            element: document.createElement('canvas'), // Create a canvas element
            value: qrText.value,
            size: 200, // Size of the QR code in pixels
            level: 'H' // Error correction level (L, M, Q, H)
        });
        imageBox.appendChild(qrCode.element);
        imageBox.classList.add("show-image");
    }else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
        }
}