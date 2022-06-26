import { Workbox } from 'workbox-window'

export const swInstance = () => {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js')

    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        if (confirm('Доступна новая версия приложения. Обновить?')) {
          window.location.reload()
        }
      }
    })

    wb.register()
  }
}
