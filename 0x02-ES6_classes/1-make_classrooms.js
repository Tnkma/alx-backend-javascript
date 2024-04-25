// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom';

// Define the method
export default function initializeRooms() {
  const roomSize = [19, 20, 34];
  // initialize an array to store the classRoom
  const rooms = [];

  for (const size of roomSize) {
    // for every size in roomSize, create a new classRoom and push it to the rooms array
    rooms.push(new ClassRoom(size));
  }
  return rooms;
}
