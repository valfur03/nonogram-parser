# Nonogram parser

Nonogram grid parser for https://www.puzzle-nonograms.com/.

This node script is made to be used with [this repo](https://github.com/valfur03/nonogram-solver). I created it to test my solver, so you should not use it for cheating.

## Installation

Clone this repository on your computer.

```shell
git clone https://github.com/valfur03/nonogram-parser.git
```

`cd` in the new directory.

```shell
cd nonogram-parser
```

## Usage

First, go to [this website](https://www.puzzle-nonograms.com/) and copy the grid id.

![grid-id](/.github/grid-id.png)

Then, checkout the size.

| Size  | Number |
| ----- | ------ |
| 5x5   | 0      |
| 10x10 | 1      |
| 15x15 | 2      |
| 20x20 | 3      |
| 25x25 | 4      |

Finally, execute the script (make sure you remove the `,`).

```shell
# node index.js [size] [grid_id]
node index.js 0 741647
```

The output should be `"5 5 3 2 2 2,1 1,2 2 4 3 1,1 2"`.

Now you can use that in my [nonogram solver](https://github.com/valfur03/nonogram-solver).

### Docker

I made a `Dockerfile` for this script.

```shell
docker build -t nonogram-parser .
docker run --rm nonogram-parser 0 741647
```

