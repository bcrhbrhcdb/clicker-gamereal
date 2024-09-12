// game.js
export let clickAmount = 0;
export let totalClicks = 0;
export let amountPerClick = 1;

export function updateClicks(amount) {
    clickAmount += amount;
    totalClicks += amount;
}

export function updateAmountPerClick(amount) {
    amountPerClick += amount;
}

export function spendClicks(amount) {
    clickAmount -= amount;
    // We don't reduce totalClicks here
}

export function setGameState(newClickAmount, newTotalClicks, newAmountPerClick) {
    clickAmount = newClickAmount;
    totalClicks = newTotalClicks;
    amountPerClick = newAmountPerClick;
}