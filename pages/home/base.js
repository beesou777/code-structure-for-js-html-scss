export async function Header() {
    const response = await fetch('/components/Navbar.html');
    const data = await response.text();
    return data;
}


export async function HeroSection() {
    const response = await fetch('/components/Home/HeroSection.html');
    const data = await response.text();
    return data;
}

export async function PreviousWork() {
    const response = await fetch('/components/Home/PreviousWork.html');
    const data = await response.text();
    return data;
}

export async function Product() {
    const response = await fetch('/components/Home/Product.html');
    const data = await response.text();
    return data;
}

export async function Service() {
    const response = await fetch('/components/Home/Service.html');
    const data = await response.text();
    return data;
}


export async function Testimonial() {
    const response = await fetch('/components/Home/Testimonial.html');
    const data = await response.text();
    return data;
}