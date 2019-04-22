/* PIXELS TO EMS CONVERTER */
/* Using Closures to create it. */
// Base em value = 16px;
function giveEms(pixels) {
    const baseValue = 16;

    function convert() {
        return pixels / baseValue;
    }

    return convert;
}
console.log(`Small: 12px == ${giveEms(12)()}em`);
console.log(`Default: 16px == ${giveEms(16)()}em`);
console.log(`Medium: 20px == ${giveEms(20)()}em`);
console.log(`Med-High: 24px == ${giveEms(24)()}em`);
console.log(`Large: 32px == ${giveEms(32)()}em`);
console.log(`Huge: 48px == ${giveEms(48)()}em`);