// Define subcategories for each category
const subcategories = {
    car_wrapping: [
        "Car Branding",
        "Change Color",
        "Fleet Branding",
        "Peelable Paints",
        "RTA Approvals & Passing"
    ],
    car_tint: [
        "Window Tinting",
        "Paint Protection Film (PPF)",
        "Ceramic Coating"
    ],
    fitouts: [
        "Interior Designing",
        "Commercial Fit-outs",
        "Custom Carpentry",
        "False Ceiling & Light Partitions",
        "Wood Flooring Works",
        "Wallpapers and Paints",
        "Wall Art",
    ],
    printing: [
        "Indoor / Outdoor Digital Printing",
        "Vehicle Graphics",
        "UV Printing",
        "Digital Fabric Printing",
    ],
    signage: [
        "Outdoor Signs",
        "Indoor Signs",
        "Safety Signs",
        "Billboards",
        "Acrylic Scooter Boards",
        "Acrylic Signs"
    ],
    digital_solutions: [
        "Web Development",
        "Digital Marketing",
        "Social Media Handling",
        "Mobile App Development",
    ]
};

// Handle dropdown change
const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");

categorySelect.addEventListener("change", function () {
    const selectedCategory = this.value;
    const options = subcategories[selectedCategory] || [];

    // Clear old options
    subcategorySelect.innerHTML = '<option value="">Select Subcategory</option>';

    // Add new subcategories
    options.forEach(sub => {
        const option = document.createElement("option");
        option.value = sub.toLowerCase().replace(/\s+/g, "_");
        option.textContent = sub;
        subcategorySelect.appendChild(option);
    });
});
