import '../assets/css/Providers.css'

function Providers() {
    return (
            <div id="Providers">
                <section className="destinations">
                    <h3 className="title1">Our Providers</h3>
                    <p>Discover a dedicated team of qualified caregivers, including registered nurses, certified nursing assistants, therapists, and companions, ready to provide personalized and compassionate home care services for seniors</p>
                    <hr />
                    <br></br>
                    <ul className="grid">
                        <li className="small image-1">
                            <div className="text-block">
                                <h4>Registered Nurses</h4>
                            </div>
                        </li>
                        <li className="small image-2"><div className="text-block">
                            <h4>Home Health Aides</h4>
                        </div></li>
                        <li className="small image-3"><div className="text-block">
                            <h4>Physical Therapists</h4>
                        </div></li>
                        <li className="small image-4"><div className="text-block">
                            <h4>Companionship Services</h4>
                        </div></li>
                        <li className="small image-5"><div className="text-block">
                            <h4>Medical Social Workers</h4>
                        </div></li>
                        <li className="small image-6"><div className="text-block">
                            <h4>Specialized Care Providers</h4>
                        </div></li>
                    </ul>
                </section>
            </div>
    );
}

export default Providers;