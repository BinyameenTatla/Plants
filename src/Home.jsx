import { Hero } from './Hero.jsx'
import { Product } from './Product.jsx'
import { Services } from './Services.jsx'
import { About } from './About.jsx'
import { Contact } from './Contact.jsx'


export const Home = () => {
    return (
        <div>
            <Hero />
            <Product />
            <Services />
            <About />
            <Contact />
        </div>
    );
};