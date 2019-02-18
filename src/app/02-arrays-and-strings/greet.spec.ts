import { greet } from './greet'

// again: describe(), it(), expect()
describe('greet',() => {
    it('it should include the passed in name in the message',() => {
        expect(greet('james')).toContain('james');
    })
});