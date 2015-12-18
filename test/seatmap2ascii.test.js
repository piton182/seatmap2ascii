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
        { "seat": "1A"},
        { "seat": "1B"},
        { "seat": "1C"},
        { "aisle": "aisle"},
        { "seat": "1D"},
        { "seat": "1E"},
        { "seat": "1F"},
        { "seat": "2A"},
        { "seat": "2B"},
        { "seat": "2C"},
        { "aisle": "aisle"},
        { "seat": "2D"},
        { "seat": "2E"},
        { "seat": "2F"},
        { "seat": "3A"},
        { "seat": "3B"},
        { "seat": "3C"},
        { "aisle": "aisle"},
        { "seat": "3D"},
        { "seat": "3E"},
        { "seat": "3F"},
        { "seat": "4A"},
        { "seat": "4B"},
        { "seat": "4C"},
        { "aisle": "aisle"},
        { "seat": "4D"},
        { "seat": "4E"},
        { "seat": "4F"},
        { "seat": "5A"},
        { "seat": "5B"},
        { "seat": "5C"},
        { "aisle": "aisle"},
        { "seat": "5D"},
        { "seat": "5E"},
        { "seat": "5F"}
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
