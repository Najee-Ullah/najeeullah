//Project Page
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
//Contact Page
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
//Home Page
async function loadInterests() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const interests = data.interests;
    const container = document.getElementById("interestsList");

    interests.forEach(interest => {
      const card = document.createElement("div");
      card.classList.add("home-card");
      card.innerHTML = `
      <p class="interest-text">${interest}</p>`

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading interest text:", error);
  }
}
async function loadTools() {
 
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const tools = data.tools;
    const container = document.getElementById("toolsGrid");

    tools.forEach(tool => {
      const card = document.createElement("div");
      card.classList.add("home-card");
      card.innerHTML = `
      <p class="interest-text">${tool}</p>`

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading tools text:", error);
  }
}
async function loadDevelopments() {
  
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const devs = data.development;
    const container = document.getElementById("developmentGrid");

    devs.forEach(dev => {
      const card = document.createElement("div");
      card.classList.add("home-card");
      card.innerHTML = `
      <p class="interest-text">${dev}</p>`

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading interest text:", error);
  }
}

// Copy email to clipboard 
document.addEventListener("DOMContentLoaded", () => {
  const copyIcon = document.getElementById("copyEmailIcon");
  const emailText = document.getElementById("emailAddress");
  const tooltip = document.getElementById("copyTooltip");

  if (copyIcon && emailText && tooltip) {
    copyIcon.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(emailText.textContent.trim());
        // Show tooltip
        tooltip.classList.add("show");
        setTimeout(() => tooltip.classList.remove("show"), 1500);
      } catch (error) {
        console.error("Failed to copy email:", error);
      }
    });
  }
});
