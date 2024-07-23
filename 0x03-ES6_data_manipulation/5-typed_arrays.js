export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with specified length
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view of the buffer
  const int8Array = new Int8Array(buffer);

  // Check if position is within range
  if (position < 0 || position >= int8Array.length) {
    throw new Error('Position outside range');
  }

  // Set the value at the specified position
  int8Array[position] = value;

  // Return the ArrayBuffer
  const dataview = {
    DataView: {
      bytelength: buffer.byteLength,
      byteOffset: position,
      buffer,
    },
  };
  return dataview;
}
