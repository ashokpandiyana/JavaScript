const clockes = document.querySelector('.clock');

const tick = () => {

    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `<span>${h} : ${m} : ${s}</span>`;
    clockes.innerHTML = html;
    console.log(`${h} ${m} ${s}`);

}

setInterval(tick,1000)