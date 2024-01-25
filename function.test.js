const functions = require('./function')

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log("Database Initialized...")
// const closeDatabase = () => console.log("Database Closed...")
const nameCheck = () => console.log('Checking Name...')

describe('Checking Names', () => {
    beforeEach(() => nameCheck())
    test('User is Jeff', () => {
        const user = 'Jeff'
        expect(user).toBe('Jeff')
    })

    test('User is Karen', () => {
        const user = 'Karen'
        expect(user).toBe('Karen')
    })
})

test('Adds 2+2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2+2 to Not equal 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

test('Adds 2+2 to Not equal 4', () => {
    expect(functions.isNull()).toBeNull();
})

test('should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
})

test('should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
})

test('user Should be Brad Travercy', () => {
    expect(functions.createUser({
        firstName: 'Brad', lastName: 'Traversy'
    })).toEqual();
})

test('Should be Under 1600', () => {
    const load1 = 800
    const load2 = 800
    expect(load1 + load2).toBeLessThanOrEqual(1600)
})

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i)
})

test('Admin should be in usernames', () => {
    usernames = ['johns', 'caren', 'admin']
    expect(usernames).toContain('admin');
})

//Promise

test('fetched user', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
})

//Async await
test('fetched user', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})