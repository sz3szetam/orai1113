const fizetes = {
    Anna: 2100,
    Cecil: 1890,
    Emil: 2050,
    Gerald: 2920,
};

const osszeg = Object.keys(fizetes).reduce((total, szemely) => {
    console.log(`${szemely} fizetése: ${fizetes[szemely]} Ft.`);
    return total + fizetes[szemely];
}, 0);

console.log(`Az összes fizetés: ${osszeg} Ft.`);



//chatgpt megoldás // 