import { expect } from 'chai'

import { seatmap2ascii } from '../util/seatmap2ascii'

describe('seatmap2ascii', () => {
  it('can do 3-seats-aisle-3-seats layout', () => {
    let seatmap = {
      "seatmap": [
        { "seat": "10A" },
        { "seat": "10B" },
        { "seat": "10C" },
        { "aisle": "aisle" },
        { "seat": "10D"},
        { "seat": "10E"},
        { "seat": "10F"},
        { "aisle": "aisle" },
        { "seat": "10G"},
        { "seat": "10H"},
        { "seat": "10J"},
        { "seat": "11A" },
        { "seat": "11B" },
        { "seat": "11C" },
        { "aisle": "aisle" },
        { "seat": "11D"},
        { "seat": "11E"},
        { "seat": "11F"},
        { "aisle": "aisle" },
        { "seat": "11G"},
        { "seat": "11H"},
        { "seat": "11J"}
      ]
    }

    let layout = seatmap2ascii(seatmap);

    let expectation =
      "    A B C   D E F\n" +
      "1 | . . .   . . . |\n" +
      "2 | . . .   . . . |\n" +
      "3 | . . .   . . . |\n" +
      "4 | . . .   . . . |\n" +
      "5 | . . .   . . . |\n";
    expect(layout).to.equal(expectation)
  })

  it('can do 3-seats-aisle-3-seats-aisle-3-seats layout', () => {
    let seatmap = {
      "seatmap": [
        { "seat": "9A" },
        { "seat": "9B" },
        { "seat": "9C" },
        { "aisle": "aisle" },
        { "seat": "9D"},
        { "seat": "9E"},
        { "seat": "9F"},
        { "aisle": "aisle" },
        { "seat": "9G"},
        { "seat": "9H"},
        { "seat": "9J"},
        { "seat": "10A" },
        { "seat": "10B" },
        { "seat": "10C" },
        { "aisle": "aisle" },
        { "seat": "10D"},
        { "seat": "10E"},
        { "seat": "10F"},
        { "aisle": "aisle" },
        { "seat": "10G"},
        { "seat": "10H"},
        { "seat": "10J"}
      ]
    }

    let layout = seatmap2ascii(seatmap);

    let expectation =
      "    A B C   D E F   G H J\n"
      " 9 | . . .   . . .   . . . |\n"
      "10 | . . .   . . .   . . . |\n";
    expect(layout).to.equal(expectation)
  })
})
