export default {
  projections: {
    bpa_TossE: {
      match: {
        __caption__: 'Match',
        name: {
          __caption__: 'Name'
        }
      }
    },
    TossE: {
      match: {
        __caption__: '',
        name: {
          __caption__: ''
        },
        startDate: {
          __caption__: ''
        },
        scoreP1: {
          __caption__: ''
        },
        scoreP2: {
          __caption__: ''
        },
        player1: {
          __caption__: '',
          lastName: {
            __caption__: ''
          }
        },
        player2: {
          __caption__: '',
          lastName: {
            __caption__: ''
          }
        }
      }
    }
  }
};
