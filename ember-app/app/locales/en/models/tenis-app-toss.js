export default {
  projections: {
    bpa_TossE: {
      match: {
        __caption__: 'match',
        name: {
          __caption__: 'name'
        }
      }
    },
    TossE: {
      match: {
        __caption__: 'match',
        name: {
          __caption__: 'name'
        },
        startDate: {
          __caption__: 'startDate'
        },
        scoreP1: {
          __caption__: 'scoreP1'
        },
        scoreP2: {
          __caption__: 'scoreP2'
        },
        player1: {
          __caption__: 'player1',
          lastName: {
            __caption__: 'lastName'
          }
        },
        player2: {
          __caption__: 'player2',
          lastName: {
            __caption__: 'lastName'
          }
        }
      }
    }
  }
};
