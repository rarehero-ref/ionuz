document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');

    if (window.Telegram && window.Telegram.WebApp) {
        const webApp = window.Telegram.WebApp;
        webApp.ready(); // TWA tayyorligini Telegramga bildirish
        webApp.expand(); // TWA ni to'liq ekranga yoyish

        // Tugmani bosish hodisasi
        myButton.addEventListener('click', () => {
            // Tugmaga animatsiya klassini qo'shish
            myButton.classList.add('animated');
            messageParagraph.innerText = "Tugma bosildi va rang o'zgardi!";

            // Bir necha soniyadan keyin animatsiya klassini olib tashlash
            setTimeout(() => {
                myButton.classList.remove('animated');
            }, 1000); // 1 soniyadan keyin asl holiga qaytadi
        });

        // Misol: Foydalanuvchi IDsini ko'rsatish
        if (webApp.initDataUnsafe && webApp.initDataUnsafe.user) {
            const user = webApp.initDataUnsafe.user;
            console.log("Telegram User ID:", user.id);
            // messageParagraph.innerText += ` Sizning IDingiz: ${user.id}`; // Agar sahifada ko'rsatmoqchi bo'lsangiz
        }

    } else {
        // Agar Web App Telegram ichida ochilmasa (brauzerda test qilish uchun)
        messageParagraph.innerText = "Bu ilova to'liq Telegram ichida ishlaydi. Brauzerda faqat vizual qismi ko'rinadi.";
        myButton.addEventListener('click', () => {
            myButton.classList.add('animated');
            messageParagraph.innerText = "Tugma bosildi (brauzerda)!";
            setTimeout(() => {
                myButton.classList.remove('animated');
            }, 1000);
        });
        console.warn("Telegram Web App skripti yuklanmagan yoki Telegram muhitida emas.");
    }
});
