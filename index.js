const word = 'View-Transitions'.split('')
const h1 = document.querySelector('h1')

let index = 0

if (document?.startViewTransition) {
    setInterval(() => {
        document.startViewTransition(() => {
            h1.textContent = word[index++]

            if (index >= word.length)
                index = 0
        })
    }, 600)
} else {
    document.querySelector('.no-support').style.display = 'block'
}