import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
import Spinner from '../Utility/Spinner';

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    if (!products.length) return <p>Loading Products...</p>

    return (
//         <section className="bg-secondary py-4 pt-md-5">
//   <div className="container py-xl-2">
//     <div className="row">
//       {/* Slider     */}
//       <div className="col-xl-9 pt-xl-4 order-xl-2">
//         <div className="tns-carousel">
//           <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 1, &quot;controls&quot;: false, &quot;loop&quot;: false}">
//             <div>
//               <div className="row align-items-center">
//                 <div className="col-md-6 order-md-2"><img className="d-block mx-auto" src="img/home/hero-slider/05.jpg" alt="VR Collection" /></div>
//                 <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-start">
//                   <h2 className="fw-light pb-1 from-bottom">World of music with</h2>
//                   <h1 className="display-4 from-bottom delay-1">Headphones</h1>
//                   <h5 className="fw-light pb-3 from-bottom delay-2">Choose between top brands</h5>
//                   <div className="d-table scale-up delay-4 mx-auto mx-md-0"><a className="btn btn-primary btn-shadow" href="shop-grid-ls.html">Shop Now<i className="ci-arrow-right ms-2 me-n1" /></a></div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="row align-items-center">
//                 <div className="col-md-6 order-md-2"><img className="d-block mx-auto" src="img/home/hero-slider/04.jpg" alt="VR Collection" /></div>
//                 <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-start">
//                   <h2 className="fw-light pb-1 from-start">Explore the best</h2>
//                   <h1 className="display-4 from-start delay-1">VR Collection</h1>
//                   <h5 className="fw-light pb-3 from-start delay-2">on the market</h5>
//                   <div className="d-table scale-up delay-4 mx-auto mx-md-0"><a className="btn btn-primary btn-shadow" href="shop-grid-ls.html">Shop Now<i className="ci-arrow-right ms-2 me-n1" /></a></div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="row align-items-center">
//                 <div className="col-md-6 order-md-2"><img className="d-block mx-auto" src="img/home/hero-slider/06.jpg" alt="VR Collection" /></div>
//                 <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-start">
//                   <h2 className="fw-light pb-1 scale-up">Check our huge</h2>
//                   <h1 className="display-4 scale-up delay-1">Smartphones</h1>
//                   <h5 className="fw-light pb-3 scale-up delay-2">&amp; Accessories collection</h5>
//                   <div className="d-table scale-up delay-4 mx-auto mx-md-0"><a className="btn btn-primary btn-shadow" href="shop-grid-ls.html">Shop Now<i className="ci-arrow-right ms-2 me-n1" /></a></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Banner group*/}
//       <div className="col-xl-3 order-xl-1 pt-4 mt-3 mt-xl-0 pt-xl-0">
//         <div className="table-responsive" data-simplebar>
//           <div className="d-flex d-xl-block"><a className="d-flex align-items-center bg-faded-info rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0" href="#" style={{minWidth: '16rem'}}><img src="img/home/banners/banner-sm01.png" width={125} alt="Banner" />
//               <div className="py-4 px-2">
//                 <h5 className="mb-2"><span className="fw-light">Next Gen</span><br />Video <span className="fw-light">with</span><br />360 Cam</h5>
//                 <div className="text-info fs-sm">Shop now<i className="ci-arrow-right fs-xs ms-1" /></div>
//               </div></a><a className="d-flex align-items-center bg-faded-warning rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0" href="#" style={{minWidth: '16rem'}}><img src="img/home/banners/banner-sm02.png" width={125} alt="Banner" />
//               <div className="py-4 px-2">
//                 <h5 className="mb-2"><span className="fw-light">Top Rated</span><br />Gadgets<br /><span className="fw-light">are on </span>Sale</h5>
//                 <div className="text-warning fs-sm">Shop now<i className="ci-arrow-right fs-xs ms-1" /></div>
//               </div></a><a className="d-flex align-items-center bg-faded-success rounded-3 pt-2 ps-2 mb-4" href="#" style={{minWidth: '16rem'}}><img src="img/home/banners/banner-sm03.png" width={125} alt="Banner" />
//               <div className="py-4 px-2">
//                 <h5 className="mb-2"><span className="fw-light">Catch Big</span><br />Deals <span className="fw-light">on</span><br />Earbuds</h5>
//                 <div className="text-success fs-sm">Shop now<i className="ci-arrow-right fs-xs ms-1" /></div>
//               </div></a></div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>







        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                         <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
