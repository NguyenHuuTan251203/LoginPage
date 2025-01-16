export function covertImage(data) {
  const binaryString = String.fromCharCode.apply(null, data);
  const base64String = btoa(binaryString);
  return `data:image/png;base64,${base64String}`;
}
