const reverseString = require('./reversestring')

test('reverseString function exist', () => {
    expect(reverseString).toBeDefined()
})

test('String Reverses', () => {
    expect(reverseString('hello')).toEqual('olleh')
})

test('reverse String with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh')
})


