const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

function updateThemeToggle(theme) {
  const nextTheme = theme === "dark" ? "claro" : "escuro";
  themeToggle.setAttribute("aria-label", `Ativar tema ${nextTheme}`);
  themeToggle.setAttribute("aria-pressed", String(theme === "light"));
}

const initialTheme = root.dataset.theme === "light" ? "light" : "dark";
root.dataset.theme = initialTheme;
updateThemeToggle(initialTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  updateThemeToggle(nextTheme);

  try {
    localStorage.setItem("theme", nextTheme);
  } catch (error) {
    console.error("Não foi possível salvar a preferência de tema.", error);
  }
});

const projectsList = document.querySelector("#projects-list");
const projectsStatus = document.querySelector("#projects-status");

async function loadProjects() {
  try {
    const response = await fetch(
      "https://api.github.com/users/devlavanere/repos?sort=updated&per_page=100",
      { headers: { Accept: "application/vnd.github+json" } },
    );

    if (!response.ok) {
      throw new Error(`A API do GitHub respondeu com status ${response.status}.`);
    }

    const repositories = await response.json();
    if (!Array.isArray(repositories)) {
      throw new Error("A resposta da API do GitHub não contém uma lista de repositórios.");
    }

    if (repositories.length === 0) {
      projectsStatus.textContent = "Nenhum repositório público encontrado.";
      return;
    }

    const fragment = document.createDocumentFragment();
    for (const repository of repositories) {
      if (typeof repository.name !== "string" || typeof repository.html_url !== "string") {
        throw new Error("A resposta da API do GitHub contém dados de repositório inválidos.");
      }

      const repositoryUrl = new URL(repository.html_url);
      if (repositoryUrl.hostname !== "github.com") {
        throw new Error("A API do GitHub retornou um link de repositório inválido.");
      }

      const item = document.createElement("li");
      item.className = "project-card";

      const title = document.createElement("h3");
      const link = document.createElement("a");
      link.href = repositoryUrl.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = repository.name;

      const description = document.createElement("p");
      description.textContent = repository.description || "Sem descrição disponível.";

      title.append(link);
      item.append(title, description);
      fragment.append(item);
    }

    projectsList.append(fragment);
    projectsStatus.textContent = `${repositories.length} repositório(s) público(s).`;
  } catch (error) {
    projectsStatus.textContent = "Não foi possível carregar os projetos. Tente novamente mais tarde.";
    console.error("Falha ao carregar os repositórios públicos do GitHub.", error);
  }
}

loadProjects();
