# NEXTJS-PORTFOLIO
# Personal Portfolio Website


[PREVIEW](https://nextjs-portfolio-nu-gules-61.vercel.app/)

A modern, responsive personal portfolio website built with Next.js and React. This portfolio showcases skills, projects, and professional experience with a clean, interactive user interface.


## Features
- 🚀 Fast, SEO-optimized with Next.js 14
- 💻 Responsive design that works on all devices
- 🎨 Modern UI with smooth animations using Framer Motion
- 🌓 Dark/light theme support with next-themes
- 📱 Interactive sections: Hero, About, Projects, Testimonials, and Contact
- 📊 Vercel Analytics integration
- 📧 Contact form powered by EmailJS
- 📝 Privacy policy and terms of service pages

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/webpurposeslimited/NEXTJS-PORTFOLIO.git
cd NEXTJS-PORTFOLIO
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Configure your EmailJS credentials
   - Edit the `data/index.ts` file to replace the EmailJS credentials with your own
   - See the [Content Configuration](#content-configuration) section below

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

## Content Configuration (data/index.ts)

The `index.ts` file in the `data` directory is the central location for all website content. This file allows you to easily customize your portfolio without touching the component code.

### How to customize your content:

1. **General Information**
   - Update `websiteInfo` object with your name, job title, contact details

2. **Hero Section**
   - Modify the `heroContent` to change the hero section text and call-to-action buttons

3. **Navigation & Social Links**
   - Customize `navItems` for sidebar navigation
   - Update `socialLinks` with your own social media profiles

4. **Projects**
   - Add/modify your projects in the `projects` array
   - Each project should include an id, title, description, image, and technologies used

5. **Testimonials**
   - Replace the `testimonials` with your own client feedback

6. **Work Experience**
   - Update the `workExperience` array with your professional background
   - Each entry should include title, company, duration, and description

7. **Education**
   - Modify `education` with your educational background

8. **Contact Form**
   - **IMPORTANT**: Update the EmailJS configuration in the `emailJs` object:
     ```typescript
     emailJs: {
       serviceId: "YOUR SERVICE KEY", // Replace with your service ID
       templateId: "YOUR TEMPLATE ID", // Replace with your template ID
       publicKey: "YOUR PUBLIC KEY"    // Replace with your public key
     }
     ```

9. **Legal Content**
   - Customize `legalContent` for privacy policy, terms of service, and cookies policy

## Credits

Designed and developed by [Webpurposes Limited](https://webpurposes.co)

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE 3 - see the LICENSE file for details.

---

For any questions or support, please contact [info@webpurposes.co](mailto:info@webpurposes.co)

