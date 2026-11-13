# Mohd Abdullah Abrar — portfolio

A static portfolio inspired by the structure of https://ar-rafi-ishraq.github.io/.
Original styling and wording; project figures come from the supplied team reports.

## Publish to GitHub Pages — no installation required

1. Extract the downloaded ZIP on your computer.
2. Sign in to https://github.com as `abdullahabrar21`.
3. Create a **public** repository named exactly `abdullahabrar21.github.io`. If it already exists, download a backup before replacing its files.
4. In the repository, choose **Add file → Upload files** (or the upload link shown in a new empty repository).
5. Open the ZIP's `website` folder. Upload **the contents of this folder**, including the `assets` folder. Do not upload the ZIP or the enclosing `website` folder. `index.html`, `content.js`, `app.js`, and `styles.css` must appear at the repository's top level. Browser folder uploads work in Chrome/Edge.
6. Commit the uploaded files to `main`.
7. Open **Settings → Pages**. Select **Deploy from a branch**, then **main** and **/(root)**. Save.
8. Wait for publication, then visit https://abdullahabrar21.github.io/ . GitHub says publication can take up to 10 minutes.
9. Open the **Actions** tab if deployment fails. Confirm the repository name, publishing branch, root folder, and that `index.html` is at the top level.

Official instructions: https://docs.github.com/en/pages/quickstart

If your GitHub username is different, substitute it in the repository name and website URL. Also update the profile links in `content.js`.

## Preview before uploading

Open `index.html` in a modern browser after extracting the entire `website` folder. No server or build step is required. Keep the neighboring files and folders together.

## Edit your content on GitHub

1. Open `content.js` in your repository.
2. Click the pencil icon.
3. Edit the text inside quotes. Preserve commas, brackets, and quotes.
4. Click **Commit changes**. GitHub republishes the site.

`content.js` controls your name, biography, email, GitHub, LinkedIn, academic summary, project descriptions, responsibilities, experience, skills, and certifications.

To add a paragraph within a quoted string, use `\n`. Avoid raw line breaks inside quoted strings. A quote within text must be escaped as `\"`.

### Add your portrait

Upload a portrait to `assets/images/portrait.jpg`, then change `"photo": ""` to `"photo": "assets/images/portrait.jpg"` in `content.js`. Until then, the homepage uses a designed initials panel instead of a stock photograph.

### Edit research, headings, or CV labels

The research section and section headings are ordinary text in `index.html`. Search for `id="research"` to find the thesis section. Edit visible text while preserving the HTML tags. Appearance is controlled by `styles.css`; interaction code is in `app.js`.

### Add a project

Duplicate one complete object in the `projects` array in `content.js`. Give it a unique `id`, fill in the text, and upload a matching image to `assets/images/ID.webp`. Use an existing category or a new one; the filters update automatically. Add an optional `demo` URL only when it is valid. A missing demo URL hides that link.

### Replace a CV

Replace the appropriate PDF under `assets/cv/`, preserving its filename:
- `lecturer.pdf`
- `corporate.pdf`
- `research.pdf`

These are the supplied PDFs, unchanged. Their original links and wording may differ across versions. In particular, the research CV still contains the older GitHub link; update that PDF when convenient. The website itself uses `abdullahabrar21` from the lecturer CV. The corporate CV supplies the displayed contact email and LinkedIn URL.

## GitHub profile README

The separate `github-profile/README.md` belongs in a different public repository named `abdullahabrar21` — not the website repository. Create that repository, then replace its README with the supplied file. GitHub displays it on your profile. Pin your actual project repositories using GitHub's profile controls; no unverified repository URLs have been invented.

Official instructions: https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme

## Content and attribution

All featured projects are team projects. Confirmed personal roles are stated for the thesis, machine learning, CMOS, and SAP-1 projects. The fan and Tic-Tac-Toe descriptions present documented simulation work without asserting physical testing. The phase-shifter entry uses team-level attribution.

The thesis performance values are numerical, not experimentally measured. The CMOS circuit is a rule-based OR decision circuit, not a trained AI model. The diabetic-foot project is an academic prototype, not a clinically validated diagnostic tool.

Tennis tracking remains listed in the supplied research CV, but is not featured as a website project because no supporting report or confirmed personal repository was provided. Further projects can be added through `content.js`.

No contact-form server, third-party tracking, external font download, or package installation is needed. The site uses email links, local assets, and browser-native dialogs.
