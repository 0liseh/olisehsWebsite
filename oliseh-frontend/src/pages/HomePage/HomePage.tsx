const HomePageContent = (): JSX.Element => {
    return(
        <div style={{borderStyle:"solid"}}>
            This is the Home Page
        </div>
    )
}

export const HomePage = (): JSX.Element => {
    return(
        <div style={{width:"100%", display: "inline-block"}}>
            <HomePageContent/>
        </div>
    )
}