export const ArrayHelper = {
    arraySpliceMap(array, itemsInRow) {
        const resArray = [];

        array.forEach((item, index) => {
            if (index % itemsInRow === 0) {
                resArray.push([item]);
                return;
            }

            resArray[resArray.length - 1].push(item);
        })

        return resArray;
    }
}
