            // Data for each service
            const services = {
                1: {
                    img: "images/graphic-design.png",
                    description: "Our graphic design services will make your brand stand out with visually striking designs."
                },
                2: {
                    img: "images/social-media.png",
                    description: "Let us manage your social media presence and engage with your audience effectively."
                },
                3: {
                    img: "images/copywriting.png",
                    description: "We provide copywriting services that convey your message clearly and compellingly."
                },
                4: {
                    img: "images/web-design.png",
                    description: "We design websites and landing pages that shine brighter than the lights of Tibidabo. Because in Barcelona, we know how to blend art with technology!"
                },
                5: {
                    img: "images/ad-campaigns.png",
                    description: "Our ad campaigns are designed to capture attention and drive results."
                },
                6: {
                    img: "images/creative-campaign.png",
                    description: "We create innovative campaigns that resonate with your audience and drive engagement."
                },
                7: {
                    img: "images/strategy.png",
                    description: "We offer strategic planning for both digital and offline marketing to achieve your goals."
                },
                8: {
                    img: "images/more-services.png",
                    description: "And much more... contact us to learn how we can help your business grow."
                }
            };
    
            // Function to handle menu item click
            function handleMenuItemClick(event) {
        // Remove active class from all menu items
        document.querySelectorAll(".service-menu-item").forEach(item => {
            item.classList.remove("active");
        });

        // Add active class to the clicked menu item
        event.target.classList.add("active");

        // Update the content
        const serviceId = event.target.id;
        const service = services[serviceId];
        if (service) {
            document.getElementById("service-illustration").innerHTML = `<img src="${service.img}" alt="Service Illustration">`;
            document.getElementById("service-description").textContent = service.description;
        }
    }

    // Attach click event listeners to all menu items
    document.querySelectorAll(".service-menu-item").forEach(item => {
        item.addEventListener("click", handleMenuItemClick);
    });