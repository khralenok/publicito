            // Data for each service
            const services = {
                1: {
                    img: "images/graphic-design.png",
                    description: "Nuestro equipo de diseñadores gráficos crea piezas que no sólo hablan, sino que gritan '¡wow!' en el idioma universal del diseño. "
                },
                2: {
                    img: "images/social-media.png",
                    description: "Manejamos tus redes sociales con la maestría de un DJ en una fiesta épica. Likes, shares y comentarios, ¡todo en perfecta armonía!"
                },
                3: {
                    img: "images/copywriting.png",
                    description: "Escribimos copys que hacen reír a los algoritmos y emocionan a los usuarios. No es magia, ¡es talento puro!"
                },
                4: {
                    img: "images/web-design.png",
                    description: "Diseñamos páginas web y landing pages que brillan más que las luces del Tibidabo. Porque en Barcelona, ¡sabemos cómo mezclar arte con tecnología!"
                },
                5: {
                    img: "images/ad-campaigns.png",
                    description: "Convertimos clics en clientes con campañas de ads que son más adictivas que los memes de gatos."
                },
                6: {
                    img: "images/creative-campaign.png",
                    description: "Desde ideas disruptivas hasta ejecuciones impecables. Creamos campañas que no se olvidan."
                },
                7: {
                    img: "images/strategy.png",
                    description: "Tejemos estrategias que son como planes secretos: combinamos lo digital con lo real para obtener resultados que son como encontrar dinero en los bolsillos de un pantalón viejo"
                },
                8: {
                    img: "images/more-services.png",
                    description: "somos más que creativos, somos la salsa brava de la publicidad."
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