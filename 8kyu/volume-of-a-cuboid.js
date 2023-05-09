// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

//Solution 
//P: length, width and height, only number, assumed to be positive
//R: the sum volume of a cuboid, an interger

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    //plug the equation to find the volume of a cuboid
    const volOfCuboid = length * width * height
    //return the sum
    return volOfCuboid
  }
}