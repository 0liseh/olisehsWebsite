const HomePageContent = (): JSX.Element => {
    return(
        <div>
          <img src="./images/LaptopScreens.jpg" alt="Background screen" height="450px" width="100%"/>
        </div>
    )
}

export const HomePage = (): JSX.Element => {
    return(
        <div style={{
                width:"100%",
                height:"100%", 
                display: "inline-block", 
            }}
        >
            <HomePageContent/>
        </div>
    )
}