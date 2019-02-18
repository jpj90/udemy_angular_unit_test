import { VoteComponent } from './vote.component'; 

// in this excercise, the 'triple A' structure will be 
// introduced: arrange, act, assert
describe('VoteComponent', () => {
  // when repeating initialization through your suite (describe)
  // , it makes sense to move it outside of your specs and into
  // the body of the suite. make sure however to set a clean
  // state each time, like so:

  let component: VoteComponent;


  beforeEach(() => {
    // this will run before each test in the suite ==> SET UP
    component = new VoteComponent();
  });
  afterEach(() => {
    // this is where you run cleanup code, runs after each test ==> TEAR DOWN
  });
  beforeAll(() => {
    // run before all tests
  });
  afterAll(() => {
    // run after all tests
  });


  it('should increment totalVotes when upvoted', () => {
    // Arrange - initialize the system under test

    // Act - often calling a method or a function
    component.upVote();

    // Assert - check that something confirms to your
    // expectations.
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    // Arrange - initialize the system under test

    // Act - often calling a method or a function
    component.downVote();

    // Assert - check that something confirms to your
    // expectations.
    expect(component.totalVotes).toBe(-1);
  });

});