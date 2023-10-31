import React from 'react';
import Slider from '../Slider/Slider';
import About from '../About/About';
import Feature from '../Feature/Feature';
import ExtendedFeature from '../ExtendedFeature/ExtendedFeature';
import Pricing from '../Pricing/Pricing';
import Integrations from '../Integrations/Integrations';
import Impact from '../Impact/Impact';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <>
            {/* slider section  */}
            <section>
                <Slider></Slider>
            </section>
            {/* about section  */}
            <section>
                <About></About>
            </section>
            {/* feature section  */}
            <section>
                <Feature></Feature>
            </section>
            {/* extended feature */}
            <section>
                <ExtendedFeature></ExtendedFeature>
            </section>
            {/* pricing section  */}
            <section>
                <Pricing></Pricing>
            </section>
            {/* integrations section  */}
            <Integrations></Integrations>
            {/* impact section  */}
            <Impact></Impact>
            {/* blog section  */}
            <Blog></Blog>


        </>
    );
};

export default Home;