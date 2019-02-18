import { compute } from './compute'
//describe() defines a suite - a group of related tests
//it() defines a spec - a single unit test

// the first input to describe() is the name of the system
// under test
describe('compute', () => {
    // the it() is the body of your test
    it('should return 0 if input is negative',() => {
        const result = compute(-1);
        //assert
        expect(result).toBe(0);
    })

    it('should incremement the input if it is positive',() => {
        const result = compute(1);
        //assert
        expect(result).toBe(2);
    })
})
// so, the pattern here is describe(), it(), expect()