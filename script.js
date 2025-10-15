async function loadProjects() {
  try {
    const response = await fetch("projects.json");
    const projects = await response.json();

    const grid = document.getElementById("projectsGrid");

    projects.forEach(project => {
      const card = document.createElement("div");
      card.classList.add("project-card");

      const githubLink = project.gitlink
        ? `<a href="${project.gitlink}" target="_blank" class="github-link">GitHub Repository</a>`
        : "";

      card.innerHTML = `
      <a href="${project.link}" target="_blank" class="image-link">
        <img src="${project.image}" alt="${project.name}">
      </a>
        <div class="content">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          ${githubLink}
        </div>
      `;

      grid.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading projects:", error);
  }
}

loadProjects();
