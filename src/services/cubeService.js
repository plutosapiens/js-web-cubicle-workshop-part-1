const uniqid = require('uniqid');

const cubes = [
    {
        id: '1kows4je8gln4ofpko',
        name: 'cubcho',
        descriotion: 'bebe kub',
        imgUrl: 'https://m.media-amazon.com/images/I/61fB-s4DPVS.jpg',
        difficultyLevel: 1
      },
      {
        id: '1kows4je8gln4og3nn',
        name: 'Ивет',
        descriotion: 'shes a cube also',
        imgUrl: 'https://mathworld.wolfram.com/images/eps-svg/Cube_700.svg',
        difficultyLevel: 5
      },
      {
        id: '1kows4je8gln4ogn2i',
        name: 'zzz',
        descriotion: 'mmmboy',
        imgUrl: 'https://cdn1.byjus.com/wp-content/uploads/2021/03/Cube-net.png',
        difficultyLevel: 5
      }
];

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData
    };

    cubes.push(newCube)
    return newCube
}

exports.getAll = () => {
    return [...cubes];
};
