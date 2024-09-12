// game.js
export let clickAmount = 0;
export let totalClicks = 0;
export let amountPerClick = 1;

export function updateClicks(amount) {
    clickAmount += amount;
    totalClicks += amount; // Update total clicks
}

export function updateAmountPerClick(amount) {
    amountPerClick += amount;
}

export function spendClicks(amount) {
    clickAmount -= amount; // Deduct from clickAmount
    // Optionally reduce totalClicks if needed
    // totalClicks -= amount; 
}

export function setGameState(newClickAmount, newTotalClicks, newAmountPerClick) {
    clickAmount = newClickAmount;
    totalClicks = newTotalClicks;
    amountPerClick = newAmountPerClick;
}