
// this is a simple state change pattern
export class VoteComponent { 
  totalVotes = 0; 

  upVote() { 
    this.totalVotes++;
  }

  downVote() { 
    this.totalVotes--;
  }
}
