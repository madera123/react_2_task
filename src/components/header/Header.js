import "./style.css";

const Header = () => {
    return (<header className="header">
    <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Hi, my name is <em>Pavlo Shpak</em></strong><br />
            I frontend developer
        </h1>
        <div className="header__text">
            <p>I am studying at Cherkasy National University named by B. Khmelnytskyi.</p>
        </div>
    </div>
</header>
);
}
 
export default Header;