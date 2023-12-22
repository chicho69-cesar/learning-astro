const checkIsNavigationSupported = () => {
  return Boolean(document.startViewTransition)
}

const fetchPage = async (url) => {
  // Vamos a cargar la página de destino
  // Utilizando un fetch para obtener el HTML
  const response = await fetch(url) // /clean-code
  const text = await response.text()
  // Quedarnos sólo con el contenido del html dentro de la etiqueta body
  // Usamos un regex para extraerlo
  const [, data] = text.match(/<body>([\s\S]*)<\/body>/i)
  return data
}

export const startViewTransition = () => {
  if (!checkIsNavigationSupported()) return

  window.navigation.addEventListener('navigate', (event) => {
    const toUrl = new URL(event.destination.url)

    // Es una página externa? si es así, lo ignoramos
    if (location.origin !== toUrl.origin) return

    // Si es una navegación en el mismo dominio (origen)
    event.intercept({
      async handler () {
        const data = await fetchPage(toUrl.pathname)

        // Utilizar la api de View Transition API
        document.startViewTransition(() => {
          // El scroll hacia arriba del todo
          document.body.innerHTML = data
          document.documentElement.scrollTop = 0
        })
      }
    })
  })
}
