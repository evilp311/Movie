import { createTheme } from 'flowbite-react'

export default createTheme({
  navbar: {
    root: {
      base: `bg-[url('/img/Background.svg')] bg-no-repeat bg-[#120F31] p-4   `
    }
  },
  card: {
    root: {
      base: `flex rounded-lg w-[282px] h-[480px] bg-[url('/img/Background.svg')] pb-4 pt-2 px-2 `
    }
  }
})
