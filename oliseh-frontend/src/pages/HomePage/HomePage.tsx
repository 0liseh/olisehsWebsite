import { Header } from "../../components/Header/Header"

const HomePageContent = (): JSX.Element => {
    return(
        <div>
            This is the Home Page
        </div>
    )
}
export const HomePage = (): JSX.Element => {
    return(
        <Header pageContent={<HomePageContent/>}/>
    )
}