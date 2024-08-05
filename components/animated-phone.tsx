interface AnimatedPhoneProps {
    screenBackgroundImage: String
}

export function AnimatedPhone({
    screenBackgroundImage = "/images/projects/novel/animated_mobile.png",
} : AnimatedPhoneProps){
    return (
        <div id="phone-outer-container" className="scale-[1.4] md:scale-[1]">
            <div id="image-container">
                <div id="phone-depth"></div>
                <div id="phone">
                    <div id="phone-camera-area">
                        <div id="phone-camera"></div>
                    </div>
                    <div id="phone-screen" style={{backgroundImage: "url(" + screenBackgroundImage + ")"}}>
                        <div className="shine"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}