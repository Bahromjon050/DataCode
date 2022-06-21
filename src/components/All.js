import React, { useState, useRef } from "react";
import Blog from "./pages/Blog";
import Case from "./pages/Case";
import Service from "./pages/Service";
import Team from "./pages/Team";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error"
import Swal from 'sweetalert2'
// Swiper Corusel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { EffectFlip, Pagination, FreeMode, Thumbs, Navigation } from "swiper";
import { Button, IconButton } from "@mui/material";
// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";





// Navbar
export const NavBar = () => {
    const [nav_item, setMenu] = useState(false);
    const [btn_nav, setbtn_nav] = useState(false)
    const navFun = () => {
        setMenu(!nav_item)
        setbtn_nav(!btn_nav)
    }
    const navSwal = () => {
        Swal.fire({
            title: '<strong>Web-site creator <u>link</u></strong>',
            icon: 'info',
            html: '<a href="https://t.me/SobitxanovBahromjon">links</a> ',
        })
    }
    return (
        <>
            <Router>
                <nav>
                    <div className="logo" data-aos="zoom-in-right" data-aos-duration="1000"><NavLink to='/'>DACODE</NavLink></div>
                    <ul className={nav_item ? "nav_item activ" : "nav_item"}>
                        <NavLink onClick={navFun} activclassname="selected" to='/' className="nav-link">Home</NavLink>
                        <NavLink onClick={navFun} activclassname="selected" to='/service' className="nav-link">Service</NavLink>
                        <NavLink onClick={navFun} activclassname="selected" to='/team' className="nav-link">Team</NavLink>
                        <NavLink onClick={navFun} activclassname="selected" to='/blog' className="nav-link">Blog</NavLink>
                        {/* <NavLink onClick={navFun} activclassname="selected" to='/case' className="nav-link">Case</NavLink> */}
                        <NavLink to=''><button onClick={navSwal} className="nav_btn">Request a quote</button></NavLink>
                    </ul>
                    <div className={btn_nav ? "btn_nav activ" : "btn_nav"} onClick={navFun}>
                        {/* <button className="btnNav" onClick={navFun}>Menu</button> */}
                        <div className="navdiv navTR"></div>
                        <div className="navdiv navDL"></div>
                        <div className="navdiv navTR"></div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/blog' element={<Blog />} />
                    {/* <Route path='/case' element={<Case />} /> */}
                    <Route path='*' element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}
// Header All
export const AllHeader = ({ data }) => {
    return (
        <div className="HeaderAll">
            <div className="HeaderBody" >
                <h1 className="all_h1" data-aos="fade-right" data-aos-duration="1000">{data.name}</h1>
                <p className="all_p">{data.text}</p>
            </div>
        </div>
    )
}
export const Work = () => {
    return (
        <div className="work">
            <h1 className="all_h1">Interested to work with us ?</h1>
            <p className="all_p">Send a line here get and update daily</p>
            <button className="work_btn">DaCode@example.com</button>
        </div>
    )
}
// Cards 2
export const ServiceCards = () => {
    let ourCards = [
        {
            id: 0,
            aos: "1",
            img: "./img/ser1.svg",
            h3: "WordPress Site",
            p: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut `
        },
        {
            id: 1,
            aos: "100",
            img: "./img/ser2.svg",
            h3: "WordPress Plugin",
            p: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut `
        },
        {
            id: 2,
            aos: "200",
            img: "./img/ser3.svg",
            h3: "Website Redesign",
            p: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut `
        },
        {
            id: 3,
            aos: "0",
            img: "./img/ser4.svg",
            h3: "WordPress Site Optimization",
            p: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut `
        },
        {
            id: 4,
            aos: "100",
            img: "./img/ser5.svg",
            h3: "Search Engine Optimization",
            p: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut `
        },
        {
            id: 5,
            aos: "200",
            img: "./img/ser6.svg",
            h3: "Cross Platform Mobile App",
            p: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut `
        }
    ]
    return (
        <div className="serviceCards">
            <div className="serviceCardBody">
                <h1 className="all_h1">Our Services</h1>
                <p className="all_p sev_p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br /> tempor invidunt utlaboreet.</p>
                <div className="cards sevCards">
                    {
                        ourCards.map((val) => (
                            <div className="card" key={val.id} data-aos="zoom-in" data-aos-delay={val.aos} data-aos-duration="800">
                                <img src={val.img} alt="" />
                                <h3 className="card_h1">{val.h3}</h3>
                                <p className="card_p">{val.p}</p>
                                <button className="card_btn">Read More <img src="./img/read.svg" alt="" /></button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
// Duo 4 Cards
export const TeamCards = () => {
    const [TeamData, setTeamData] = useState([
        {
            id: 0,
            aos: "zoom-in",
            img: "./img/guruh5.png",
            h1: "Kevin Jeppesen1",
            p: "Web Project Manager1",
            in: "./img/likke.svg",
            link: "kun.uz",
            like: true,
            delay: 0
        },
        {
            id: 1,
            aos: "zoom-in",
            img: "./img/shop8.png",
            h1: "Kevin Jeppesen2",
            p: "Web Project Manager2",
            in: "./img/likke.svg",
            link: "kun.uz",
            like: true,
            delay: 100
        },
        {
            id: 2,
            aos: "zoom-in",
            img: "./img/guruh1.png",
            h1: "Kevin Jeppesen3",
            p: "Web Project Manager3",
            in: "./img/likke.svg",
            link: "kun.uz",
            like: true,
            delay: 150
        },
        {
            id: 3,
            aos: "zoom-in",
            img: "./img/guruh2.png",
            h1: "Kevin Jeppesen4",
            p: "Web Project Manager4",
            in: "./img/likke.svg",
            link: "kun.uz",
            like: true,
            delay: 200
        },
        {
            id: 4,
            aos: "zoom-in",
            img: "./img/guruh3.png",
            h1: "Kevin Jeppesen5",
            p: "Web Project Manage5",
            in: "./img/likke.svg",
            link: "kun.uz",
            like: true,
            delay: 0
        },
        {
            id: 5,
            img: "./img/guruh6.png",
            h1: "Kevin Jeppesen6",
            p: "Web Project Manager6",
            in: "./img/likke.svg",
            link: "kun.uz",
            like: true,
            delay: 0
        },
        {
            id: 6,
            aos: "zoom-in",
            img: "./img/shop12.png",
            h1: "Kevin Jeppesen7",
            p: "Web Project Manager7",
            in: "./img/likke.svg",
            link: "kun.uz",
            like: true,
            delay: 150
        },
        {
            id: 7,
            aos: "zoom-in",
            img: "./img/guruh4.png",
            h1: "Kevin Jeppesen8",
            p: "Web Project Manager8",
            in: "./img/likke.svg",
            link: "kun.uz",
            like: true,
            delay: 200
        },
        {
            id: 8,
            aos: "zoom-in",
            img: "./img/shop10.png",
            h1: "Kevin Jeppesen9",
            p: "Web Project Manager9",
            in: "./img/likke.svg",
            link: "kun.uz",
            like: true,
            delay: 0
        },
        {
            id: 9,
            aos: "zoom-in",
            img: "./img/shop3.png",
            h1: "Kevin Jeppesen10",
            p: "Web Project Manager10",
            in: "./img/likke.svg",
            link: "kun.uz",
            like: true,
            delay: 100
        },
        {
            id: 10,
            aos: "zoom-in",
            img: "./img/shop2.png",
            h1: "Kevin Jeppesen11",
            p: "Web Project Manager11",
            in: "./img/likke.svg",
            link: "kun.uz",
            like: true,
            delay: 150
        },
        {
            id: 11,
            aos: "zoom-in",
            img: "./img/shop7.png",
            h1: "Kevin Jeppesen12",
            p: "Web Project Manager12",
            in: "./img/likke.svg",
            link: "kun.uz",
            like: true,
            delay: 200
        }
    ])
    const likeCouns = (id) => {
        setTeamData(TeamData => TeamData.map((vals) => {
            return vals.id === id ? { ...vals, like: !vals.like } : vals
        }))
    }
    const SwalModal = (val) => {
        Swal.fire({
            title: val.h1,
            text: val.p,
            imageUrl: val.img,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }
    return (
        <>
            <div className="cards_duo_1">
                <div className="all_cards_duo">
                    {TeamData.map((val,i) => (
                        <div className="all_card_duo" key={val.id} data-aos={val.aos} data-aos-duration="500" data-aos-delay={val.delay}>
                            <img src={val.img} alt="" />
                            <h1 className="card_h1_duo">{val.h1}</h1>
                            <p className="card_p_duo">{val.p}</p>
                            <div style={val.like ? {} : { background: "#60E1CB" }} onClick={() => likeCouns(val.id)}>
                                <img src={val.in} className="all_card_img" alt="" />
                            </div>
                            <button onClick={() => SwalModal(val)}>kevin@dacode.se</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
// Duo Element
export const Presence = () => {
    return (
        <div className="presence">
            <div className="presence_text">
                <h1 className="all_h1">Establishing online presence</h1>
                <p className="all_p">Every SaaS website, regardless of niche, must do one thing brilliantly, which is converting visitors into users. At first glance, the site should encourage and guide visitors in a smooth way towards call-to-actions.</p><br />
                <p className="all_p">This goes hand in hand with a responsive design, meaning it needs to be apt for different devices.</p>
                <p className="all_p">We use a data-driven approach to measure user response when developing the site. This method usually makes the site quicker to launch, is more cost-effective and more successful in the long run.</p><br />
                <p className="all_p">The pages need to be search engine optimized (SEO) because it lays the foundation for the technical quality, which in turn determines how high it will rank among search results. We also make sure that your website is indexed properly.</p><br />
                <p className="all_p">We audit your audience and get to know your target market to be able to speak to them through the website in the best possible way. By finding out their consumer behavior we can refine the website approach.</p>
            </div>
            <div className="presence_img">
                <h1 className="all_h1 pre_h1">Schedule a free session</h1>
                <img src="./img/duoimg.png" alt="" />
            </div>
        </div>
    )
}
export const ArticlesCards = () => {
    let [Articles, setArrData] = useState([
        {
            id: 0,
            aos: "zoom-in",
            img: "./img/cr1.png",
            h1: "Millennials care about saving1?",
            p: "Curabitur tincidunt sed neque id1 pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            in: "./img/likke.svg",
            like: true,
            delay: 100
        },
        {
            id: 1,
            aos: "zoom-in",
            img: "./img/cr2.png",
            h1: "Do millennials care about saving2?",
            p: "Curabitur tincidunt sed neque id2 pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            in: "./img/likke.svg",
            like: true,
            delay: 100
        },
        {
            id: 2,
            aos: "zoom-in",
            img: "./img/cr3.png",
            h1: "Co millennials care about saving3?",
            p: "Curabitur tincidunt sed neque id3 pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            in: "./img/likke.svg",
            like: true,
            delay: 150
        },
        {
            id: 3,
            aos: "zoom-in",
            img: "./img/cr4.png",
            h1: "Ro millennials care about saving4?",
            p: "Curabitur tincidunt sed neque id4 pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            in: "./img/likke.svg",
            like: true,
            delay: 200
        },
        {
            id: 4,
            aos: "zoom-in",
            img: "./img/cr5.png",
            h1: "So millennials care about saving5?",
            p: "Curabitur tincidunt sed neque id5 pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            in: "./img/likke.svg",
            like: true,
            delay: 100
        },
        {
            id: 5,
            aos: "zoom-in",
            img: "./img/cr6.png",
            h1: "To millennials care about saving6?",
            p: "Curabitur tincidunt sed neque id6 pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            in: "./img/likke.svg",
            like: true,
            delay: 100
        },
        {
            id: 6,
            aos: "zoom-in",
            img: "./img/cr7.png",
            h1: "Io millennials care about saving7?",
            p: "Curabitur tincidunt sed neque id7 pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            in: "./img/likke.svg",
            like: true,
            delay: 150
        },
        {
            id: 7,
            aos: "zoom-in",
            img: "./img/cr8.png",
            h1: "Mo millennials care about saving8?",
            p: "Curabitur tincidunt sed neque id8 pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            in: "./img/likke.svg",
            like: true,
            delay: 200
        },
        {
            id: 8,
            aos: "zoom-in",
            img: "./img/cr9.png",
            h1: "Zo millennials care about saving9?",
            p: "Curabitur tincidunt sed neque id9 pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            in: "./img/likke.svg",
            like: true,
            delay: 100
        },
        {
            id: 9,
            aos: "zoom-in",
            img: "./img/cr10.png",
            h1: "Po millennials care about saving10?",
            p: "Curabitur tincidunt sed neque id10 pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            in: "./img/likke.svg",
            like: true,
            delay: 100
        },
        {
            id: 10,
            aos: "zoom-in",
            img: "./img/cr11.png",
            h1: "Yo millennials care about saving11?",
            p: "Curabitur tincidunt sed neque id11 pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            in: "./img/likke.svg",
            like: true,
            delay: 150
        },
        {
            id: 11,
            aos: "zoom-in",
            img: "./img/cr12.png",
            h1: "Jo millennials care about saving12?",
            p: "Curabitur tincidunt sed neque id12 pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            in: "./img/likke.svg",
            like: true,
            delay: 200
        }
    ])
    const [malumot, setMalumot] = useState({})
    const [modal, setModal] = useState(false)
    const [modal_body, setModal_body] = useState(false)
    const OpenModal = (val) => {
        setModal(!modal)
        setModal_body(!modal_body)
        setMalumot(val)
    }
    /// Filter
    const [search, setSearch] = useState({
        search: ''
    })
    const SearchFun = (e) => {
        // e.prevenDefoult()
        console.log(e.target.value);
        setSearch({ ...search, [e.target.name]: e.target.value.trim() })
    }
    const reset = () => {
        setSearch({ search: '' })
    }
    return (
        <>
            <div className="cards_duo_2">
                <div className="BlogBodyHeader">
                    <h1 className="all_h1" data-aos="fade-right" data-aos-duration="1000">News & Articles</h1>
                    <p className="all_p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et.  </p>
                    <div className="formSearch">
                        <input type="text" className="search_input" name="search" value={search.search} onChange={SearchFun} placeholder="Search blog…" />
                        <button><img src="./img/lupa.svg" alt="" /></button>
                    </div>
                </div>
                <div className="all_cards_duo tf_cerds">
                    {
                        search === "" ?
                            Articles.map((user) => (
                                <div className="all_card_duo_2" key={user.id} data-aos={user.aos} data-aos-duration="500" data-aos-delay={user.delay}>
                                    <div className="card_hover">
                                        <img src={user.img} alt="" />
                                    </div>
                                    <p className="all_hour">July 15</p>
                                    <div className="all_card_body">
                                        <h1 className="card_h1_duo_2">{user.h1}</h1>
                                        <p className="card_p_duo_2">{user.p}</p>
                                        <button onClick={() => OpenModal(user)}>Read More</button>
                                    </div>
                                </div>
                            ))

                            : <>
                                {
                                    Articles.filter((user) => {
                                        return user.h1.toLowerCase().indexOf(search.search.toLowerCase()) !== -1
                                    }).length > 0 ?
                                        Articles.filter((user) => {
                                            return user.h1.toLowerCase().indexOf(search.search.toLowerCase()) !== -1
                                        }).map((val) => (
                                            <div className="all_card_duo_2" key={val.id} data-aos={val.aos} data-aos-duration="500" data-aos-delay={val.delay}>
                                                <div className="card_hover">
                                                    <img src={val.img} alt="" />
                                                </div>
                                                <p className="all_hour">July 15</p>
                                                <div className="all_card_body">
                                                    <h1 className="card_h1_duo_2">{val.h1}</h1>
                                                    <p className="card_p_duo_2">{val.p}</p>
                                                    <button onClick={() => OpenModal(val)}>Read More</button>
                                                </div>
                                            </div>
                                        ))
                                        : <span className="error" onClick={reset}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                                                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                                            </svg>
                                        </span>
                                }
                            </>

                    }
                </div>
            </div>
            <div className={modal ? "modal activ" : "modal"} >
                <div className={modal_body ? "modal_body activ" : "modal_body"}>
                    <div className="data">
                        {/* <button className="data_close">X</button> */}
                        <img src={malumot.img} alt="" />
                        <div className="">
                            <h1 className="modal_h1">{malumot.h1}</h1>
                            <p className="modal_p all_p">{malumot.p}</p>
                            {/* <button className="data_like">like</button> */}
                        </div>
                    </div>
                    <button className="modal_close" onClick={OpenModal}>X</button>
                </div>
            </div>
        </>
    )
}
// Footer
export const Footer = () => {
    return (
        <>
            <div className="footer_bg">
                <footer>
                    <ul className="foot_item">
                        <li className="foot_item_header">Logo</li>
                        <li className="foot_link">Far far away, behind the word mountains, far from <br /> the countries Vokalia and Consonantia</li>
                    </ul>
                    <ul className="foot_item">
                        <li className="foot_item_header">Work</li>
                        <li className="foot_link"><a href="#">Blog</a></li>
                        <li className="foot_link"><a href="#">How We Work</a></li>
                        <li className="foot_link"><a href="#">Testimonials</a></li>
                    </ul>
                    <ul className="foot_item">
                        <li className="foot_item_header">Services</li>
                        <li className="foot_link"><a href="#">Marketing Strategy</a></li>
                        <li className="foot_link"><a href="#">Website Optimization</a></li>
                        <li className="foot_link"><a href="#">Email Maerketing</a></li>
                    </ul>
                    <ul className="foot_item">
                        <li className="foot_item_header">Business Solution</li>
                        <li className="foot_link"><a href="#">Partnership</a></li>
                        <li className="foot_link"><a href="#">About Project</a></li>
                        <li className="foot_link"><a href="#">Corporate</a></li>
                    </ul>
                    <ul className="foot_item">
                        <li className="foot_item_header">Language</li>
                    </ul>
                </footer>
                <div className="foot_chiziq"></div>
                <div className="link">
                    <a href="#" className="foot_a">© DaCode. 2020</a>
                    <div className="foot_img">
                        <a href="#">FB</a>
                        <a href="#">TW</a>
                        <a href="#">IG</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export const Lunar = () => {
    return (
        <>
            <div className="luner">
                <img src="./img/image.png" alt="" />
                <div className="luner_body">
                    <h1 className="all_h1 luner_h1">Lunar Strategy SaaS Marketing Agency - Rebranding of website</h1>
                    <p className="all_p">We got a mission from Lunar Strategy to rebrand their website for their SaaS <br /> marketing agency. Their vision was to make a clean website and playing with their <br /> Lunar and Space theme, this mean using icon and symbols on the website that went <br /> with their branding and where they wanted to position themselves.</p>
                </div>
            </div>
        </>
    )
}
// Corusel 1
export const CoruselBlog = () => {
    return (
        <>
            <div className="corusel">
                <div className="coruselText">
                    <a href="#" className="blogCarusel_a">News & Articles</a>
                    <h1 className="all_h1">DaCode Blog</h1>
                    <p className="all_p blog_p">On daCode blog we will review the latest in web <br /> development for the SaaS-, tech- and crypto <br /> industry.</p>
                    <Button variant="outlined" className="createBtn">See All</Button>
                </div>
                <div className="coruselblogMedia">
                    <Swiper
                        effect={"flip"}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[EffectFlip, Pagination, Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <h1 className="blogCarusel_h1">Why Your SaaS Business should use WordPress</h1>
                            <p className="blogCarusel_p">A conten <span className="coruselSpan">Carousel</span> system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
                            <a className="blogCarusel_a">Read More</a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 className="blogCarusel_h1">Why Your SaaS Business should use WordPress</h1>
                            <p className="blogCarusel_p">A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
                            <a className="blogCarusel_a">Read More</a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 className="blogCarusel_h1">Why Your SaaS Business should use WordPress</h1>
                            <p className="blogCarusel_p">A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
                            <a className="blogCarusel_a">Read More</a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
// Corusel 2
export const CoruselHappy = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div className="caruselHappy">
                <a href="#" className="blogCarusel_a">Testiomonials</a>
                <h1 className="all_h1">Our Happy Clients</h1>
            </div>
        </>
    )
}
// Home Realty
export const Realty = () => {
    const [realtyData, setRealtyData] = useState([
        {
            id: 0,
            h1: "Your Idea",
            p: "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.",
            img: "1",
            delay: 0
        },
        {
            id: 1,
            h1: "Strategy meeting",
            p: "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.",
            img: "2",
            aos: "",
            delay: 70
        },
        {
            id: 2,
            h1: "Agile and Scrum framework",
            p: "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.",
            img: "3",
            aos: "",
            delay: 140
        },
        {
            id: 3,
            h1: "Your website goes live",
            p: "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.",
            img: "4",
            aos: "",
            delay: 210
        }
    ]);
    return (
        <div className="agile">
            <div className="realtyHeader">
                <h1 className="all_h1 idea_h1">Your idea into <span>reality</span></h1>
                <p className="all_p idea_p">We start every web development project with a project manager from daCode interviewing you <br /> about the goal with the project. This is for us to be able to come up with a solution for your SaaS <br /> business, estimate a timeline, and come up with a budget.</p>
            </div>
            <div className="realty">
                <div className="realty_text">
                    {
                        realtyData.map((val) => (
                            <div className="suitable" key={val.id} data-aos='fade-right' data-aos-delay={val.delay} data-aos-duration='700'>
                                <span>
                                    {/* <button className="suitable_btn">{val.img}</button> */}
                                    <IconButton aria-label="fingerprint" color="success" className="suitable_btn">
                                        {val.img}
                                    </IconButton>
                                </span>
                                <span className="suitableText">
                                    <h4 className="suitable_h1">{val.h1}</h4>
                                    <p className="suitable_p">{val.p}</p>
                                </span>
                            </div>
                        ))
                    }
                </div>
                <div className="realtyImage">
                    <img className="realty_img" src="./img/remove.png" alt="" />
                </div>
            </div>
        </div>
    )
}
// Great 
// export const Great = () => {
//     return (
//         <div className="greatTf">
//             <div className="great">
//                 <div className="greatHeader">
//                     <h5 className="blogCarusel_a">Portfolio</h5>
//                     <h1 className="all_h1">Our Great Work</h1>
//                     <ul>
//                         <li><Button className="geatTab" size="large">Website Optimization</Button></li>
//                         <li><Button className="geatTab" size="large">Website Redesign</Button></li>
//                         <li><Button className="geatTab" size="large">Search Engine Optimization</Button></li>
//                     </ul>
//                     <Swiper slidesPerView={3} spaceBetween={30}
//                         pagination={{
//                             clickable: true,
//                         }}
//                         modules={[Pagination]} className="mySwiper">
//                         <SwiperSlide><img className="ourImages" src="./img/our1.png" alt="" /></SwiperSlide>
//                         <SwiperSlide><img className="ourImages" src="./img/our2.png" alt="" /></SwiperSlide>
//                         <SwiperSlide><img className="ourImages" src="./img/our3.png" alt="" /></SwiperSlide>
//                         <SwiperSlide><img className="ourImages" src="./img/our1.png" alt="" /></SwiperSlide>
//                         <SwiperSlide><img className="ourImages" src="./img/our1.png" alt="" /></SwiperSlide>
//                     </Swiper>
//                 </div>
//             </div>
//         </div>
//     )
// }