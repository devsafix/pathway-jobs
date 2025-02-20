export const recruiterOnboardFromControls = [
  {
    name: "name",
    label: "Name",
    componentType: "input",
    placeholder: "Enter your name",
  },
  {
    name: "companyName",
    label: "Company Name",
    componentType: "input",
    placeholder: "Enter your company name",
  },
  {
    name: "companyRole",
    label: "Company Role",
    componentType: "input",
    placeholder: "Enter your company role",
  },
];

export const initialRecruiterFormData = {
  name: "",
  companyName: "",
  companyRole: "",
};

export const candidateOnboardFromControls = [
  {
    name: "resume",
    label: "Resume",
    componentType: "file",
  },
  {
    name: "name",
    label: "Name",
    componentType: "input",
    placeholder: "Enter your name",
  },
  {
    name: "currentCompany",
    label: "Current Company",
    componentType: "input",
    placeholder: "Enter your current company name",
  },
  {
    name: "preferedjobLocation",
    label: "prefered Job Location",
    componentType: "input",
    placeholder: "Enter your prefered job location",
  },
  {
    name: "currentJobLocation",
    label: "Current Job Location",
    componentType: "input",
    placeholder: "Enter your current job location",
  },
  {
    name: "currentSalary",
    label: "Current Salary",
    componentType: "input",
    placeholder: "Enter your current salary",
  },
  {
    name: "noticePeriod",
    label: "Notice Period",
    componentType: "input",
    placeholder: "Enter your notice period",
  },
  {
    name: "skils",
    label: "Skills",
    componentType: "input",
    placeholder: "Enter your skills",
  },
  {
    name: "totalExperience",
    label: "Total Experience",
    componentType: "input",
    placeholder: "Enter your total experience",
  },
  {
    name: "college",
    label: "College",
    componentType: "input",
    placeholder: "Enter your college name",
  },
  {
    name: "collegeLocation",
    label: "College Location",
    componentType: "input",
    placeholder: "Enter your college location",
  },
  {
    name: "linkedinProfile",
    label: "Linkedin Profile",
    componentType: "input",
    placeholder: "Enter your linkedin profile",
  },
  {
    name: "githubProfile",
    label: "Github Profile",
    componentType: "input",
    placeholder: "Enter your github profile",
  },
];

export const initialCandidateFormData = {
  resume: "",
  name: "",
  currentCompany: "",
  preferedjobLocation: "",
  currentJobLocation: "",
  currentSalary: "",
  noticePeriod: "",
  skils: "",
  totalExperience: "",
  college: "",
  collegeLocation: "",
  linkedinProfile: "",
  githubProfile: "",
};

export const postNewJobControls = [
  {
    name: "companyName",
    label: "Company Name",
    componentType: "input",
    placeholder: "Enter company name",
    disabled: true,
  },
  {
    name: "title",
    label: "Title",
    componentType: "input",
    placeholder: "Enter title",
  },
  {
    name: "type",
    label: "Type",
    componentType: "input",
    placeholder: "Enter type",
  },
  {
    name: "description",
    label: "Description",
    componentType: "input",
    placeholder: "Enter description",
  },
  {
    name: "location",
    label: "Location",
    componentType: "input",
    placeholder: "Enter location",
  },
  {
    name: "skills",
    label: "Skills",
    componentType: "input",
    placeholder: "Enter skills",
  },
  {
    name: "experience",
    label: "Experience",
    componentType: "input",
    placeholder: "Enter experience",
  },
];

export const initialPostNewJobFormData = {
  companyName: "",
  title: "",
  type: "",
  description: "",
  location: "",
  skills: "",
  experience: "",
};

export const filterMenuDataArray = [
  {
    id: "companyName",
    label: "Company Name",
  },
  {
    id: "title",
    label: "Title",
  },
  {
    id: "type",
    label: "Type",
  },
  {
    id: "location",
    label: "Location",
  },
];

export function formUrlQuery({ params, dataToAdd }) {
  let currentURL = qs.parse(params);

  if (Object.keys(dataToAdd).length > 0) {
    Object.keys(dataToAdd).map((key) => {
      if (dataToAdd[key].length === 0) delete currentURL[key];
      else currentURL[key] = dataToAdd[key].join(",");
    });
  }

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentURL,
    },
    {
      skipNull: true,
    }
  );
}

export const membershipPlans = [
  {
    heading: "Tier 1",
    price: 100,
    type: "basic",
  },
  {
    heading: "Tier 2",
    price: 1000,
    type: "teams",
  },
  {
    heading: "Tier 3",
    price: 5000,
    type: "enterprise",
  },
];
