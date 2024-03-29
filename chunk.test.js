const chunkArray = require('./chunk')

test(' chunkArray function exist', () => {
    expect(chunkArray).toBeDefined()
})

test('Chunk an array of 10 values with length of 2', () => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chunkedArr = chunkArray(number, len)

    expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
})

test('Chunk an array of 10 values with length of 2', () => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 1;
    const chunkedArr = chunkArray(number, len)

    expect(chunkedArr).toEqual([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])
})




