module.exports = function towelSort(arr) {

    console.log()
    const newArr = [];

    if (arr == undefined) {
        return newArr;
    }
    arr.forEach((el, id) => {

        if (id % 2 == 0) {
            for (let i = 0; i < el.length; i++) {
                newArr.push(el[i]);
            }
        } else {
            for (let i = el.length - 1; i >= 0; i--) {
                newArr.push(el[i]);
            }
        }
    });

    return newArr;

}
