

import './juice.css'
import juice from '../assets/juice-glass.png'
import Buy from '../components/buy'

export default function Juice() {
    return (
        <section className='juice-section'>
            <div className="container">



                <div className="left">

                    {/* image of juice box */}

                    <img src={juice} alt="Juice glass image" />
                </div>
                <div className="right">
                    {/* description of juice will come here */}
                    <div className="about-item">
                        <div className="about-item__title">
                            <h2>Fresh Orange Juice</h2>
                        </div>

                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt dolores placeat temporibus soluta ratione sequi nesciunt amet doloribus velit. Eaque aliquam sequi est saepe dolor neque earum enim placeat.
                            Dolorem nesciunt id adipisci magnam? Reprehenderit earum est ipsa, sit quae velit id fuga laborum. Sequi delectus ut excepturi doloremque similique, ducimus consequuntur eligendi, blanditiis quam, accusantium soluta! Porro, provident.
                        </div>
                        <Buy></Buy>

                    </div>

 {/* tag */}
            <div className=" juice-tag">
              ACIA BOWLS

            </div>

                </div>


            </div>



        </section>
    )
}
