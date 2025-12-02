import react, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import {JobCard,Job} from './App.jsx'
import {header} from './components/header/header.jsx'

const head = ReactDOM.createRoot(document.getElementById("header"))
head.render(header()
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <JobCard />
        <JobCard />
        <JobCard />
        <Job img="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png" 
         companyName="Google"
         postAge="3 days ago"
         jobTitle="Junior frontend engineer"
         schedule="Full-Time"
         experience="Junior"
         wage="$90/hr"
         location="Hydrabad,India"
        />

          <Job img="https://w7.pngwing.com/pngs/718/7/png-transparent-user-interface-design-figma-computer-software-user-experience-design-web-design-user-interface-design-logo-thumbnail.png" 
         companyName="Figma"
         postAge="6 days ago"
         jobTitle="Junior backend engineer"
         schedule="Part-Time"
         experience="Junior"
         wage="$70/hr"
         location="Telangana,India"
        />

          <Job img="https://w7.pngwing.com/pngs/100/817/png-transparent-airbnb-logo-travel-social-network-trademark-accommodation-brand-thumbnail.png" 
         companyName="Airbnb"
         postAge="1 day ago"
         jobTitle="Senior network engineer"
         schedule="Full-Time"
         experience="Senior"
         wage="$110/hr"
         location="Pune,India"
        />

        <Job img="https://w7.pngwing.com/pngs/775/812/png-transparent-apple-logo-apple-logo-cupertino-company-apple-iphone-electronics-leaf-computer-thumbnail.png" 
         companyName="Apple"
         postAge="2 days ago"
         jobTitle="Senior full-Stack engineer"
         schedule="Full-Time"
         experience="Senior"
         wage="$150/hr"
         location="Jammu,India"
        />

          <Job img="https://w7.pngwing.com/pngs/195/496/png-transparent-dribble-logo-thumbnail-tech-companies-thumbnail.png" 
         companyName="Dribble"
         postAge="4 days ago"
         jobTitle="Junior AI/ML engineer"
         schedule="Full-Time"
         experience="Junior"
         wage="$85/hr"
         location="Srinagar,India"
        />
    </StrictMode>
)

