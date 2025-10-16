async function loadProjects() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    const projects = data.projects;

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

async function loadSocials() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const socialLinks = data.socials;
    const container = document.getElementById("socialGrid");

    socialLinks.forEach(social => {
      const link = document.createElement("a");
      link.href = social.link;
      link.target = "_blank";
      link.classList.add("social-item");
      link.innerHTML = `
        <img src="${social.icon}" alt="${social.name}" class="social-icon">
      `;
      container.appendChild(link);
    });
  } catch (error) {
    console.error("Error loading social links:", error);
  }
}