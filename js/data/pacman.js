var pacman = {
    states: {
        '':  [
            [ 42, 2 ],
            [ 2,  2 ],
            [ 22, 2 ],
            [ 2,  2 ]
        ],
        'W': [ 
            [ 42, 2 ],
            [ 2,  2 ],
            [ 22, 2 ],
            [ 2,  2 ]
        ],
        'E': [
            [ 42, 2 ],
            [ 2,  22 ],
            [ 22, 22 ],
            [ 2,  22 ]
        ],
        'N': [
            [ 42, 2 ],
            [ 2,  42 ],
            [ 22, 42 ],
            [ 2,  42 ]
        ],
        'S': [
            [ 42, 2 ],
            [ 2,  62 ],
            [ 22, 61 ],
            [ 2,  62 ]
        ]
    },
    dying: [
        [ 2, 242 ],
        [ 22, 242 ],
        [ 42, 242 ],
        [ 62, 242 ],
        [ 82, 242 ],
        [ 102, 242 ],
        [ 122, 242 ],
        [ 142, 242 ],
        [ 162, 242 ],
        [ 182, 242 ],
        [ 202, 242 ],
        [ 222, 242 ]
    ]
};