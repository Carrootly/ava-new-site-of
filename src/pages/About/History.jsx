import "../About/History.css";
import BellFamily from './assets/bellfamily.jpg';
import Base from './assets/main-base.jpg';
import Home from './assets/first-home.jpg';
import School from './assets/first-school.jpg';
import School1 from './assets/school-shades.jpg';
import Class from './assets/class-in-session.jpg'
import Class2 from './assets/miss.jpg';

export default function History() {
    return (
        <div className="history-body">
            <h1 className="title-history">History of Amazon Valley Academy</h1>

            <div className="content">

            <p className="body">Founded in 1958 as a boarding school for the children of missionaries, it operated on land purchased by Wycliffe and the<br /> Un-
                Evangelized Field Missions of Great Britain and North America (UFM) until 2011.<br /> <br/>
                Amazon Valley Academy (AVA) is the only English language international school in Pará. It is located near the mouth of the<br />
                Amazon River outside the city of Belem.<br /><br />
                In 1999 the school became an open enrollment international school operated by the Network of International Christian Schools<br />
                (NICS). NICS is a world-wide school system of 19 international Christian schools in 14 countries. In 2014, NICS turned AVA<br/> 
                over to Believer’s Bridge and in July 2019, under the leadership of Gary Parker, Word of Life Brazil North became the overseer <br/>of AVA.
                The campus is just one block North of BR316 on a brand new road leading into campus. AVA is easily accessible by <br/>
                public transportation.</p>

            <p className="body">Around April 1958, Richard W. Bell, Sr., his wife Adalene, and their two children Richard Jr. and Bonnie
                arrived in Brasil. They<br/> were part of what was then the UFM group, now Cross World. There was a need for
                a “Children’s Home” and school for the <br/> missionary children in northern Brasil. A place where the children
                could live while going to school, then return to the various towns,<br/> to be with their parents, when the school
                tern was over.<br /><br /></p>

            <img className="history-pictures bell-family" src={BellFamily} alt='Bell family' title='Bell family' />

            <p className="body">The original location IN 1958 was at 109 Avenida Independencia, (today 231 Celpa Magalhaes Barata), in 
                Belem.  The main<br/> headquarters building faced the street, (part of it remains today).  The children’s home was 
                behind the headquarters house, and <br/> the school building was behind the children’s home.</p> <br />

            <img className="history-pictures" src={Base} alt='Main-Base' title="Main-Base-1" />

            <p className="body">
                THE MAIN HEADQUARTERS AT 109 AVENIDA INDENPENDENCIA
            </p>

            <img className="history-pictures" src={Home} alt='First-Home' title="First Home" />

            <p className="body">THE CHILDREN’S HOME<br /> <br />

                The home was where the children lived while attending classes during the school year.  Richard Sr. and
                Adalene Bell were the <br/> house parents and Richard Sr. was the headmaster of the school.
            </p>

            <img className="history-pictures" src={School} alt='First School' title="First School" />

            <p className="body">THE FIRST SCHOOL HOUSE<br /><br />

                The first school house was a open air building that was modified by putting a divider wall to split it into two 
                even areas.<br/>  Drop down, retractable shutters were installed to shade the children from the early morning and
                afternoon sun, and rain in <br/> the rainy season.  Many children from other missions began to come to the school,
                and it became evident rather quickly that this <br/> was to be a temporary location.  A new location and school had 
                to be built to accommodate the students.  The mission bought <br/> some property next to a pimento farm, (current
                location of AVA), and clearing of the overgrowth began.  In 1960 the property<br/> was out in the country
                surrounded by pepper farms, and served by a two lane road.

            </p>

            <img className="history-pictures" src={School1} alt='School Shades' title="School Shades" />
            <p className="body">SHUTTERS DROPPED FOR PROTECTION</p>

            <img className="history-pictures" src={Class} alt='Class in session' title="Class in session" />
            <p className="body">CLASSES IN SESSION</p>

            <img className="history-pictures" src={Class2} alt='Class in session' title="Class in session" />
            <p className="body"> A MISS WITH HER ELEMENTARY CLASS ON OCTOBER 12, 1960.</p>
            </div>


        </div>
    );
}

