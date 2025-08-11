import App from "../App";
import { ThemeProvider } from 'flowbite-react'
import ourTheme from '../theme/index'
export default function Root(){
    return <ThemeProvider theme={ourTheme}> <App/> </ThemeProvider>
}