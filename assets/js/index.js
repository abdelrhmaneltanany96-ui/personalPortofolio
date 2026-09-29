// select the element in first
var themeToggleBtn = document.querySelector("#theme-toggle-button");

// attach the element and add suitable event
themeToggleBtn.addEventListener("click", function () {
    // document.documentElement.classList.toggle("dark");
    // document ==> represent the object which in js represented index.html
    // documentElement ==> means <html>
    // .classList ==> to treat with classes for the selected documentElement
    // .toggle("dark") ==> means if class dark exist remove it and if not exist add it
    document.documentElement.classList.toggle("dark");
})
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// select all secions and all <a>
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".nav-links a");
// windo means my web page 
window.addEventListener("scroll", function () {
    // forEach means for all sections
    sections.forEach(function (section) {
        // offestTop to get the start of section from top
        var sectionTop = section.offsetTop;
        // offestHeight to get the height of section
        var sectionHeight = section.offsetHeight;
        // scrollY tell us how many pixels the user scrolled from top
        var scrollY = window.scrollY;

        if (
            scrollY >= sectionTop - 88 &&
            scrollY < sectionTop + sectionHeight - 88
        ) {
            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });

            var activeLink = document.querySelector(
                // using ` ` to avoid thix next complex expression
                // ".nav-links a[href=\"#" + section.id + "\"]"
                // a[href="#${section.id}" this like example in session "img[alt='test']"
                `.nav-links a[href="#${section.id}"]`
            );
            // if there is section has id equal to value saved in var activeLink add im his class attributes="active"
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// select btns of navs
var allBtn = document.querySelector("#all")
var websBtn = document.querySelector("#webs")
var appsBtn = document.querySelector("#apps")
var designBtn = document.querySelector("#design")
var commercialBtn = document.querySelector("#commercial")

// select btns of tabs
var webItems = document.querySelectorAll(".web")
var appItems = document.querySelectorAll(".app")
var designItems = document.querySelectorAll(".design")
var commercialItems = document.querySelectorAll(".commercial")

allBtn.addEventListener("click", function () {
    document.querySelectorAll(".portfolio-filter").forEach(function (item) {
        item.classList.remove("activee")
    })
    allBtn.classList.add("activee");
    webItems.forEach(function (item) {
        item.style.display = "block";
    });

    appItems.forEach(function (item) {
        item.style.display = "block";
    });

    designItems.forEach(function (item) {
        item.style.display = "block";
    });

    commercialItems.forEach(function (item) {
        item.style.display = "block";
    });
})

websBtn.addEventListener("click", function () {
    document.querySelectorAll(".portfolio-filter").forEach(function (item) {
        item.classList.remove("activee")
    })
    websBtn.classList.add("activee");
    webItems.forEach(function (item) {
        item.style.display = "block";
    });

    appItems.forEach(function (item) {
        item.style.display = "none";
    });

    designItems.forEach(function (item) {
        item.style.display = "none";
    });

    commercialItems.forEach(function (item) {
        item.style.display = "none";
    });
})

appsBtn.addEventListener("click", function () {
    document.querySelectorAll(".portfolio-filter").forEach(function (item) {
        item.classList.remove("activee")
    })
    appsBtn.classList.add("activee");
    webItems.forEach(function (item) {
        item.style.display = "none";
    });

    appItems.forEach(function (item) {
        item.style.display = "block";
    });

    designItems.forEach(function (item) {
        item.style.display = "none";
    });

    commercialItems.forEach(function (item) {
        item.style.display = "none";
    });
})

designBtn.addEventListener("click", function () {
    document.querySelectorAll(".portfolio-filter").forEach(function (item) {
        item.classList.remove("activee")
    })
    designBtn.classList.add("activee");
    webItems.forEach(function (item) {
        item.style.display = "none";
    });

    appItems.forEach(function (item) {
        item.style.display = "none";
    });

    designItems.forEach(function (item) {
        item.style.display = "block";
    });

    commercialItems.forEach(function (item) {
        item.style.display = "none";
    });
})

commercialBtn.addEventListener("click", function () {
    document.querySelectorAll(".portfolio-filter").forEach(function (item) {
        item.classList.remove("activee")
    })
    commercialBtn.classList.add("activee");
    webItems.forEach(function (item) {
        item.style.display = "none";
    });

    appItems.forEach(function (item) {
        item.style.display = "none";
    });

    designItems.forEach(function (item) {
        item.style.display = "none";
    });

    commercialItems.forEach(function (item) {
        item.style.display = "block";
    });
})
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// select all element which i need
var cards = document.querySelectorAll(".testimonial-card");
var indicators = document.querySelectorAll(".carousel-indicator");
var next = document.querySelector("#next-testimonial");
var prev = document.querySelector("#prev-testimonial");
var carousel = document.querySelector("#testimonials-carousel");
var currentIndex = 0;

indicators.forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
        currentIndex = index;
        movrCarousel();
    })
})

next.addEventListener("click", function () {
    currentIndex += 1;
    if (currentIndex > 3) {
        currentIndex = 0;
    }
    movrCarousel();
})

prev.addEventListener("click", function () {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 3;
    }
    movrCarousel();
})

function movrCarousel() {
    carousel.style.transform = `
        translateX(${currentIndex * (100 / 3)}%)
    `;
    indicators.forEach(function (indicator, index) {
        if (index == currentIndex) {
            indicator.classList.replace("dark:bg-slate-600", "bg-accent");
        } else {
            indicator.classList.add("dark:bg-slate-600")
        }
    });
}
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
// ........................................................................................................................
var settingToggle = document.querySelector("#settings-toggle");
var settingSection = document.querySelector("#settings-sidebar");
var closeSetion = document.querySelector("#close-settings");

settingToggle.addEventListener("click", function () {
    if (settingSection.classList.contains("translate-x-full")) {
        settingSection.classList.replace("translate-x-full", "translate-x-0");
    }
    // else condition become without any meaning because i make toggle has z-index smaller than sideBarSection z-index
    // because i cannot make toggle move with sideBarsection
    // and make closeBtn two hide sidebarSection again
    // else {
    //     settingSection.classList.replace("translate-x-0", "translate-x-full");
    // }
})

closeSetion.addEventListener("click", function () {
    settingSection.classList.replace("translate-x-0", "translate-x-full");
})








// select theme-colors-grid
var themeColorsGrid = document.querySelector("#theme-colors-grid");
// array
var themeColors = [
    "#7661F4",
    "#F25D57",
    "#0BA876",
    "#1CA1E2",
    "#F14151",
    "#EF7B0B",
];
themeColors.forEach(function (color, index) {
    // create buttons
    var colorButton = document.createElement("button");
    // add classes for this buttons
    colorButton.classList.add(
        "w-12",
        "h-12",
        "rounded-full",
        "shadow",
        "hover:scale-110",
        "transition-transform",
        "duration-300"
    );
    colorButton.style.backgroundColor = color;
    // add event
    colorButton.addEventListener("click", function () {
        // select all buttons
        var allColorButtons = document.querySelectorAll("#theme-colors-grid button");
        // remove class activeee from all buttons
        allColorButtons.forEach(function (button) {
            button.classList.remove("activeee");
        });
        // add class active only for button clicked 
        colorButton.classList.add("activeee");
        // change all of ( "--color-primary", "--color-secondary" ,"--color-accent" ) to clolr which clicked
        document.documentElement.style.setProperty("--color-primary", color);
        document.documentElement.style.setProperty("--color-secondary", color);
        document.documentElement.style.setProperty("--color-accent", color);
        // Save selected theme
        localStorage.setItem("themeColor", color);
    });
    themeColorsGrid.append(colorButton);
});



// Get saved theme
var savedTheme = localStorage.getItem("themeColor");
if (savedTheme) {
    // if there is a saved color 
    document.documentElement.style.setProperty("--color-primary", savedTheme);
    document.documentElement.style.setProperty("--color-secondary", savedTheme);
    document.documentElement.style.setProperty("--color-accent", savedTheme);
    var allColorButtons = document.querySelectorAll("#theme-colors-grid button");
    allColorButtons.forEach(function (button) {
        if (button.style.backgroundColor === savedTheme) {
            button.classList.add("activeee");
        }
    });
}



// select elements
var fontOptions = document.querySelectorAll(".font-option");
fontOptions.forEach(function (fontOption) {
    fontOption.addEventListener("click", function () {
        fontOptions.forEach(function (option) {
            option.classList.remove("active");
        });
        fontOption.classList.add("active");
        var selectedFont = fontOption.getAttribute("data-font");
        document.body.classList.remove(
            "font-alexandria",
            "font-tajawal",
            "font-cairo"
        );
        document.body.classList.add("font-" + selectedFont);
        // Save selected font
        localStorage.setItem("selectedFont", selectedFont);
    });
});


// Get saved font
var savedFont = localStorage.getItem("selectedFont");
if (savedFont) {
    document.body.classList.remove(
        "font-alexandria",
        "font-tajawal",
        "font-cairo"
    );
    document.body.classList.add("font-" + savedFont);
    fontOptions.forEach(function (fontOption) {
        if (fontOption.getAttribute("data-font") === savedFont) {
            fontOption.classList.add("active");
        }
    });
}



var resetSettings = document.querySelector("#reset-settings");
resetSettings.addEventListener("click", function () {
    // Reset Font
    document.body.classList.remove(
        "font-alexandria",
        "font-tajawal",
        "font-cairo"
    );
    document.body.classList.add("font-tajawal");
    // remove active from all and add active only for default one
    fontOptions.forEach(function (option) {
        option.classList.remove("active");
    });
    var tajawalOption = document.querySelector('[data-font="tajawal"]');
    tajawalOption.classList.add("active");
    // reset theme color
    var resetColor = themeColors[0];
    document.documentElement.style.setProperty("--color-primary", resetColor);
    document.documentElement.style.setProperty("--color-secondary", resetColor);
    document.documentElement.style.setProperty("--color-accent", resetColor);
    var allColorButtons = document.querySelectorAll("#theme-colors-grid button");
    allColorButtons.forEach(function (button) {
        button.classList.remove("activeee");
    });
    allColorButtons[0].classList.add("activeee");
});







































var heroSection = document.querySelector("#hero-section");
var scrollToUp = document.querySelector("#scroll-to-top");

// console.log(sections[0].offsetHeight);
window.addEventListener("scroll", function () {
    if (window.scrollY > heroSection.offsetHeight) {
        scrollToUp.classList.remove("opacity-0");
        scrollToUp.classList.remove("invisible");
    } else {
        scrollToUp.classList.add("opacity-0");
        scrollToUp.classList.add("invisible");
    }
});

scrollToUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})











// var scrollToUp = document.querySelector("#scroll-to-top");
// sections.forEach(function(item){
//     if(item.id != "hero-section"){
//         scrollToUp.classList.remove("opacity-0");
//         scrollToUp.classList.remove("invisible");
//     }
// })