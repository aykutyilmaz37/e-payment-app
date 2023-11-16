export function replaceImage(imagePath: string, imageName: string, size:string = '1000x1000') {
  return imagePath
    .replace('http://placeimg.com', 'https://placehold.co')
    .replace('/business', `?text=${imageName}`)
    .replace(/(\d+)\/(\d+)/, size);
}
