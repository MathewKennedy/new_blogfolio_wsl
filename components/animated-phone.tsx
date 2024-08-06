interface AnimatedPhoneProps {
    scrollDir?:String,
    navBackgroundImage?: String,
    screenBackgroundImage: String
}

export function AnimatedPhone({
    scrollDir = "",
    navBackgroundImage = "",
    screenBackgroundImage = "/images/projects/novel/animated_mobile.png"
} : AnimatedPhoneProps){
    return (
        <div id="phone-outer-container">
            <div id="image-container" className="scale-[1.4] md:scale-[1]">
                <div id="phone-depth"></div>
                <div id="phone">
                    <div id="phone-camera-area">
                        <div id="phone-camera"></div>
                    </div>
                    <div id="phone-screen" className={scrollDir == "x" ? "x-scroll" : (scrollDir == "y" ? "y-scroll" : "no-phone-scroll")} style={{backgroundImage: "url(" + screenBackgroundImage + ")"}}>
                        <div id="animated-phone-nav" style={{backgroundImage: "url(" + navBackgroundImage + ")"}}></div>
                        <div className="shine"></div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}