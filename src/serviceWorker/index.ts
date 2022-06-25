export const startServiceWorker = function (): void {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/serviceWorker.js')
        .then((registration) => {
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope
          )
          return
        })
        .catch((error) => {
          console.log('ServiceWorker registration failed: ', error)
        })
    })
  }
}
