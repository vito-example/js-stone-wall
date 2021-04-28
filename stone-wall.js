/**
 *  stone-wall.js
 *
 * Date-Time: 28.04.21
 * Time: 14:28
 * @author Vito Makhatadze <vitomakhatadze@gmail.com>
 */

console.log('STONE WALL');

function solution(H) {
    let counter = 0;
    let height = 0;
    let blocks = [];
    let i = 0;

    while (i < H.length) {
        console.log(i);
        console.log('value: ', H[i])
        if (H[i] > height) {
            var newBlock = H[i] - height;
            blocks.push(newBlock);
            height += newBlock;
            counter++;
            i++;
        } else if (H[i] < height) {
            var lastBlock = blocks.pop();
            height -= lastBlock;
        } else {
            i++;
        }


        console.log('blocks:', blocks)
        console.log('height:', height)
        console.log('counter:', counter)
        console.log('--------------------')
    }

    return counter;
}


function stoneWall(...params) {
    console.log('\n(', ...params, ')');
    console.log('\n=>', solution(...params), '\n\n');
}

stoneWall([1, 1, 1]);
// 1

stoneWall([1, 2, 3, 3, 2, 1])
// 3


stoneWall([8, 8, 5, 7, 9, 8, 7, 4, 8])
// 7


stoneWall([3, 2, 1])
// 3


