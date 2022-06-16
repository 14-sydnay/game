export function createImage(imageSrc: string): HTMLImageElement {
  const image = new Image()
  image.src = imageSrc
  return image
}

export function createImageAsync(imageSrc: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const image = new Image()
    image.src = imageSrc
    image.onload = () => resolve(image)
  })
}
