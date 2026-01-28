
const Footer = () => {
    return (
        <div className="footer-container font-thin w-full ">
            <footer className="max-w-7xl  h-16 flex items-center justify-around">
                <p> Made with ❤️by <span className="text-[#f08b2c] font-medium">@lezyCoder</span></p>

                <ul className="icons items-center justify-between gap-4 hidden lg:flex">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer