import { Header, HeroSection, Product, Service, Testimonial,PreviousWork } from './Base.js';

(async function () {
    const app = document.getElementById('app');
    if (!app) {
        console.error('No element with id "app" found.');
        return;
    }

    try {
        const headerHTML = await Header();
        const heroSection = await HeroSection();
        const productHTML = await Product();
        const serviceHTML = await Service();
        const testimonialHTML = await Testimonial();
        const previousWorkHTML = await PreviousWork();

        app.innerHTML += headerHTML;
        app.innerHTML += heroSection;
        app.innerHTML += productHTML;
        app.innerHTML += serviceHTML;
        app.innerHTML += testimonialHTML;
        app.innerHTML += previousWorkHTML;

        const event = new CustomEvent('contentLoaded');
        document.dispatchEvent(event);
    } catch (error) {
        console.error('Error loading components:', error);
    }
})();
