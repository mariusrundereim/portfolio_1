import { studyProjects } from "./portfolio.js";

console.log(studyProjects);

const projectItem = document.querySelector(".project-item");

studyProjects.forEach((project) => {
  console.log(project.url[0]);

  projectItem.innerHTML += `
  
  <article>
          <a href="${project.url[0]}" target="_blank">
            <img
              class="cover-img"
              src="${project.cover}"
              alt="${project.cover_alt}"
            />
          </a>

          <div class="project-content">
            <div class="project-desc">
              <h3 class="project-title">${project.title}</h3>
              <h4 class="project-subtitle">${project.assignment}</h4>
              <h4 class="project-subtitle">Year: ${project.year}</h4>
            </div>

            <div class="project-links">
              <div class="flex-center-gap-pad">
                <a href="${project.url[1]}" >
                  ><svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 3.08337C16.4755 3.08337 14.4708 3.48214 12.6003 4.2569C10.7299 5.03166 9.03038 6.16724 7.59881 7.59881C4.70763 10.49 3.08337 14.4113 3.08337 18.5C3.08337 25.3142 7.50796 31.0955 13.6284 33.1459C14.3992 33.2692 14.6459 32.7913 14.6459 32.375V29.7696C10.3755 30.6946 9.46587 27.7038 9.46587 27.7038C8.75671 25.9155 7.75462 25.4375 7.75462 25.4375C6.35171 24.4817 7.86254 24.5125 7.86254 24.5125C9.40421 24.6205 10.2213 26.1005 10.2213 26.1005C11.5625 28.4438 13.8288 27.75 14.7075 27.38C14.8463 26.378 15.2471 25.6996 15.6788 25.3142C12.2563 24.9288 8.66421 23.603 8.66421 17.7292C8.66421 16.018 9.25004 14.6459 10.2521 13.5513C10.098 13.1659 9.55837 11.5625 10.4063 9.48129C10.4063 9.48129 11.7013 9.06504 14.6459 11.0538C15.8638 10.7146 17.1896 10.545 18.5 10.545C19.8105 10.545 21.1363 10.7146 22.3542 11.0538C25.2988 9.06504 26.5938 9.48129 26.5938 9.48129C27.4417 11.5625 26.9021 13.1659 26.748 13.5513C27.75 14.6459 28.3359 16.018 28.3359 17.7292C28.3359 23.6184 24.7284 24.9134 21.2905 25.2988C21.8455 25.7767 22.3542 26.7171 22.3542 28.1509V32.375C22.3542 32.7913 22.6009 33.2846 23.3871 33.1459C29.5075 31.08 33.9167 25.3142 33.9167 18.5C33.9167 16.4755 33.5179 14.4708 32.7432 12.6003C31.9684 10.7299 30.8328 9.03038 29.4013 7.59881C27.9697 6.16724 26.2702 5.03166 24.3997 4.2569C22.5293 3.48214 20.5246 3.08337 18.5 3.08337Z"
                      fill="white"
                    /></svg
                ></a>
                <p class="ext-icon-text">Github</p>
              </div>
              <div class="flex-center-gap-pad">
                <a href="${project.url[0]}" >
                  ><svg
                    width="37"
                    height="33"
                    viewBox="0 0 37 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_118_122)">
                      <path
                        d="M9.99886 27.1845H9.64953L7.90576 25.4407V25.0914L10.5715 22.4256H12.4183L12.6646 22.6719V24.5187L9.99886 27.1845ZM7.90576 7.46188V7.11254L9.64953 5.36877H9.99886L12.6646 8.03451V9.88133L12.4183 10.1276H10.5715L7.90576 7.46188Z"
                        fill="white"
                      />
                      <path
                        d="M23.256 21.5638H20.7191L20.5073 21.3519V15.4132C20.5073 14.3567 20.092 13.5378 18.8178 13.5092C18.1621 13.492 17.412 13.5092 16.6103 13.5407L16.4899 13.6638V21.349L16.278 21.5609H13.7412L13.5293 21.349V11.2043L13.7412 10.9923H19.4506C21.6697 10.9923 23.4678 12.7904 23.4678 15.0096V21.3519L23.256 21.5638Z"
                        fill="white"
                      />
                      <path
                        d="M10.3596 17.7613H0.211883L0 17.5494V15.0067L0.211883 14.7948H10.3596L10.5714 15.0067V17.5494L10.3596 17.7613ZM36.7881 17.7613H26.6404L26.4286 17.5494V15.0067L26.6404 14.7948H36.7881L37 15.0067V17.5494L36.7881 17.7613ZM17.0368 7.82261V0.211883L17.2486 0H19.7914L20.0033 0.211883V7.82261L19.7914 8.03449H17.2486L17.0368 7.82261ZM17.0368 32.3442V24.7335L17.2486 24.5216H19.7914L20.0033 24.7335V32.3442L19.7914 32.556H17.2486L17.0368 32.3442Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_118_122">
                        <rect width="37" height="32.6641" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <p class="ext-icon-text">View demo</p>
              </div>
            </div>
          </div>
        </article>
  `;
});

// Scroll to top

function scrollTop() {
  // Create Element
  const scrollBtnContainer = document.createElement("div");
  const scrollButton = document.createElement("button");
  // Classlist
  scrollBtnContainer.classList.add("scroll-container");
  scrollButton.classList.add("scroll-top-icon");
  // Content
  scrollButton.innerHTML = `<i class="fa-solid fa-arrow-up-long"></i>`;
  // Append Child
  scrollBtnContainer.appendChild(scrollButton);
  document.body.appendChild(scrollBtnContainer);

  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });
}
scrollTop();
