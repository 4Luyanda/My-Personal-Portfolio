document.addEventListener("DOMContentLoaded", () => {
const text = "My Personal Portfolio";
const speed = 30;
let i = 0;

function typeWriter() {
  const typedElement = document.getElementById("typed-text");
  if (!typedElement) return; // make sure the element exists

  typedElement.innerHTML = ""; // reset content in case of reload

  function type() {
    if (i < text.length) {
      typedElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

window.addEventListener("DOMContentLoaded", typeWriter);

    // Dark Mode Toggle
const toggleBtn = document.getElementById("dark-mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optional: change button text based on mode
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "🌙 Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

    // EmailJS Form Submission
    emailjs.init("bHOgX0Bk-w-SdfVfk"); // Replace with your EmailJS User ID
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        const submitButton = form.querySelector("button[type='submit']");

        if (name.length < 2) {
            alert("Please enter a valid name (at least 2 characters).");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }
        if (message.length < 10) {
            alert("Please enter a message of at least 10 characters.");
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        try {
            await emailjs.send("service_yjre8a5", "template_p5jfdxo", {
                name,
                email,
                message
            }); // Replace with your Service ID and Template ID
            alert("Message sent successfully!");
            form.reset();
        } catch (error) {
            alert("Error sending message. Please try again.");
            console.error("EmailJS error:", error);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Send";
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Skills Chart
    const ctx = document.getElementById("skillsChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Firebase"],
            datasets: [{
                label: "Proficiency",
                data: [90, 85, 80, 75, 70, 65, 70],
                backgroundColor: [
                    "#0077b5",
                    "#00a1d6",
                    "#33b5e5",
                    "#66ccff",
                    "#99d6ff",
                    "#cceeff",
                    "#e6f5ff"
                ],
                borderColor: "#333",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: "Proficiency (%)"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Technologies"
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Technical Skills Proficiency"
                }
            }
        }
    });

    // Carousel Navigation
    const carouselContainer = document.querySelector(".carousel-container");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    let currentIndex = 0;

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === slides.length - 1;
    }

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    updateCarousel();
});