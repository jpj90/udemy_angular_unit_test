import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    // arrange
    let totalVotes = null;
    component.voteChanged.subscribe(tV => {
      totalVotes = tV;
    });

    // act
    component.upVote();

    // assert
    expect(totalVotes).toBe(1);
    /*expect(totalVotes).not.toBeNull();*/
  });
});