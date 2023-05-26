// Sử dụng hàm sort()
function sortDescending(anhvip) {
    anhvip.sort(function (a, b) {
        return b - a;
    });
    return anhvip;
}
console.log(sortDescending([55, 20, 80, 1, 9, 34]));

// Không sử dụng hàm sort()
function sortDescendingNoSort(anhvip) {
    for (let i = 0; i < anhvip.length - 1; i++) {
        for (let j = i + 1; j < anhvip.length; j++) {
            if (anhvip[j] > anhvip[i]) {
                let temp = anhvip[i];
                anhvip[i] = anhvip[j];
                anhvip[j] = temp;
            }
        }
    }
    return anhvip;
}
console.log(sortDescendingNoSort([40, 90, 88, 15, 9, 70, 66]));
