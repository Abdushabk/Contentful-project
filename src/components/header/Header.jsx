import './header.css'

export default function Header() {
    return (
        <div>
            <div className="header">
                <div className="headerTitles">
                    <span className="headerTitlesSm">Food Recipes</span>
                    <span className="headerTitlesLg">We bring the u the best food from the best places</span>
                </div>
                <img className="headerImg" src="https://ychef.files.bbci.co.uk/1600x900/p04tx3m6.webp" alt="img" />
            </div>
        </div>
    )
}
