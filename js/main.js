const jobList = [
  {
    img: "./images/photosnap.svg",
    title: "photosnap",
    name: "senior frontend developer",
    new: true,
    featured: true,
    optData: {
      time: "1d ago",
      workTime: "full time",
      type: "USA only",
    },
    skills: ["frontend", "senior", "HTML", "CSS", "javaScript"],
  },
  {
    img: "./images/manage.svg",
    title: "manage",
    name: "fullstack developer",
    new: true,
    featured: true,
    optData: {
      time: "1d ago",
      workTime: "part time",
      type: "remote",
    },
    skills: ["fullstack", "midweight", "python", "react"],
  },
  {
    img: "./images/account.svg",
    title: "account",
    name: "junior frontend developer",
    new: true,
    featured: false,
    optData: {
      time: "2d ago",
      workTime: "part time",
      type: "USA only",
    },
    skills: ["frontend", "junior", "react", "sass", "javaScript"],
  },
  {
    img: "./images/myhome.svg",
    title: "MyHome",
    name: "junior frontend developer",
    new: false,
    featured: false,
    optData: {
      time: "5d ago",
      workTime: "contract",
      type: "USA only",
    },
    skills: ["frontend", "junior", "CSS", "javaScript"],
  },
  {
    img: "./images/loop-studios.svg",
    title: "loop studios",
    name: "software engineer",
    new: false,
    featured: false,
    optData: {
      time: "1w ago",
      workTime: "full time",
      type: "worldwide",
    },
    skills: ["fullstack", "midweight", "javaScript", "sass", "ruby"],
  },
  {
    img: "./images/faceit.svg",
    title: "FaceIt",
    name: "junior backend developer",
    new: false,
    featured: false,
    optData: {
      time: "2w ago",
      workTime: "full time",
      type: "UK only",
    },
    skills: ["backend", "junior", "rub", "RoR"],
  },
  {
    img: "./images/shortly.svg",
    title: "shortly",
    name: "junior developer",
    new: false,
    featured: false,
    optData: {
      time: "2w ago",
      workTime: "full time",
      type: "worldwide",
    },
    skills: ["frontend", "junior", "HTML", "sass", "javaScript"],
  },
  {
    img: "./images/insure.svg",
    title: "insure",
    name: "junior frontend developer",
    new: false,
    featured: false,
    optData: {
      time: "2w ago",
      workTime: "full time",
      type: "USA only",
    },
    skills: ["frontend", "junior", "vue", "javaScript", "sass"],
  },
  {
    img: "./images/eyecam.svg",
    title: "eyecam co.",
    name: "fullstack engineer",
    new: false,
    featured: false,
    optData: {
      time: "3w ago",
      workTime: "full time",
      type: "worldwide",
    },
    skills: ["fullstack", "midweight", "javaScript", "django", "python"],
  },
  {
    img: "./images/air-filter.svg",
    title: "the air filter company",
    name: "front-end Dev",
    new: false,
    featured: false,
    optData: {
      time: "1m ago",
      workTime: "part time",
      type: "worldwide",
    },
    skills: ["frontend", "junior", "react", "sass", "javaScript"],
  },
];

function addJobs() {
  const elJobList = document.querySelector(".job-list");

  const jobsHtml = jobList
    .map((job) => {
      return `
      <li class="job-item">
            <div class="item-job">
              <div class="job-info">
                <img class="job-image" src=${
                  job.img
                } alt="image-with-word-photosnap">
                <div class="job-info-content">
                  <div class="job-info-header">
                    <span class="job-info-header-inner">${job.title}</span>
                    ${
                      job.new ? "<button class='btn btn-new'>new!</button>" : ""
                    }
                    ${
                      job.featured
                        ? "<button class='btn btn-featured'>featured</button>"
                        : ""
                    }
                    
                  </div>
                  <h4 class="job-info-title">
                    <a class="job-info-title-link" href="#">${job.name}</a>
                  </h4>
                  <div class="job-info-footer">
                    <div class="job-info-footer-item">${job.optData.time}</div>
                    <div class="job-info-footer-item">${
                      job.optData.workTime
                    }</div>
                    <div class="job-info-footer-item">${job.optData.type}</div>
                  </div>
                </div>
              </div>
              <div class="job-skills">
                <ul class="job-skills-list">
                  ${job.skills
                    .map((item) => {
                      return `
                    <li class="job-skills-item">
                      ${item}
                    </li>
                  `;
                    })
                    .join("")}
                </ul>
              </div>
            </div>
          </li>
    `;
    })
    .join("");

  elJobList.insertAdjacentHTML("afterbegin", jobsHtml);
}

addJobs();

const example = `
  <li class="job-item">
            <div class="item-job">
              <div class="job-info">
                <img class="job-image" src="./images/photosnap.svg" alt="image-with-word-photosnap">
                <div class="job-info-content">
                  <div class="job-info-header">
                    <span class="job-info-header-inner">photosnap</span>
                    <button class="btn btn-new">new!</button>
                    <button class="btn btn-featured">featured</button>
                  </div>
                  <h4 class="job-info-title">senior frontend developer</h4>
                  <div class="job-info-footer">
                    <div class="job-info-footer-item">1d ago</div>
                    <div class="job-info-footer-item">full time</div>
                    <div class="job-info-footer-item">USA only</div>
                  </div>
                </div>
              </div>
              <div class="job-skills">
                <ul class="job-skills-list">
                  <li class="job-skills-item">
                    frontend
                  </li>
                  <li class="job-skills-item">
                    senior
                  </li>
                  <li class="job-skills-item">
                    HTML
                  </li>
                  <li class="job-skills-item">
                    CSS
                  </li>
                  <li class="job-skills-item">
                    Javascript
                  </li>
                </ul>
              </div>
            </div>
          </li>
`;
