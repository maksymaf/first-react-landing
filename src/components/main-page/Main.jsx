import './Main.css'

export default function Main() {
  return (
    <div className="wrap">
        <div className="navigation-container">
            <nav>
                <div className="row">
                    <p className='company-name'>GoRent</p>
                </div>
                <div className="row">
                    <a href="#">Home</a>
                    <a href="#">Featured</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contack</a>
                </div>
                <div className="row">
                    <a href="#">Sign Up</a>
                    <button className='gradient-button'>Login</button>
                </div>
            </nav>
        </div>
        <div className="body-container row">
            <div className="text-container">
                <select name="select" id="select" className='select'>
                    <option value="indonesia">Indonesia</option>
                </select>
                <h1>Enjoy A Famous Hotel With A Rustic Feel</h1>
                <p>explore the beauty of a beautiful modern hotel and have a good sleep</p>
                <button className='gradient-button'>Learn More</button>
            </div>
            <div className="circle-container">
                <div className="img-container">
                        
                </div>
            </div>

        </div>
    </div>
  )
}
