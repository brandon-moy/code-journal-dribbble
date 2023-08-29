# Code Journal

A full-stack web application for users to share and discover projects from fellow developers.

## 🤔 Why I built this?

While working and teaching at LearningFuze, a full-immersion web development bootcamp, the first major project we have the students create is a simple "Code Journal," an application where users perform CRUD operations on entries. I wanted to create a more in-depth project in order to show students a similar application that is more developed using the CRUD operations in a design that they are more familiar with. While they may not be able to understand everything happening, it was a great way to show and inspire them to build great applications in the future.

### 🔗 Live Demo

Try out the application live <a href="https://code-journal.brandonmoy.com/">here</a>!

## 💻 Technologies Used

- Next13
- React
- TailwindCSS
- JavaScript
- JSX
- Google Cloud Console (for authorization)
- Grafbase/GraphQL
- TypeScript
- Cloudinary

## Features

- Users can sign in/up using their Google accounts
- Users can create an entry
- Users can view a list of entries
- Users can edit their entries
- Users can delete their entries
- Users can view a specific entries details
- Users can view more projects from the project creator on the details page
- Users can filter projects on the home page
- Users can view a user profile
- Users can update their account's image, GitHub url, and LinkedIn url

## Preview

### Users can create an entry, view a specific entries details, and view more projects from the project creator.

![Create, View details, View more projects](/public/add-and-view.gif "Creating, viewing details, and viewing more projects")

### Users can filter projects on the home page by category

![Filter projects](/public/category-filters.gif "Filtering projects by category")

### Users can view a profile page and update their profile settings

![User profile and settings](/public/user-settings-and-profile.gif "User profile and settings")

## Getting Started

### Things you will need:

- Cloudinary account (for image storing)
- Google Cloud account (for user account sign up/sign in)
- Grafbase account (our database)

1. Clone the repository

```
git clone https://github.com/brandon-moy/code-journal-dribbble.git
```

2. Install dependencies with Node Package Manager

```
npm install
```

3. Copy the .env files from the .env.example in the root and the grafbase directory

```
cp .env.example .env
cd grafbase
cp .env.example .env
cd ..
```

4. Update the TOKEN secrets!

- **NEXT_PUBLIC_GRAFBASE_API_URL/ NEXT_PUBLIC_GRAFBASE_API_KEY** from Grafbase

- **GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET** from Google Cloud

- **NEXTAUTH_SECRET** - create a secret! For extra security consider using something like https://www.cryptool.org/en/cto/openssl and run `openssl rand -base64 32` to create a random base64 string.

- **CLOUDINARY_NAME, CLOUDINARY_KEY, and CLOUDINARY_SECRET** from Cloudinary

- The **NEXTAUTH_SECRET** in grafbase directory should be the same as this **NEXTAUTH_SECRET**.

5. Start up the development server

```
npm run dev
```

6. Start the database in a new terminal and double check that the apiUrl in lib/actions.ts matches what grafbase provides you (it should be the same)

```
npx grafbase dev
```

7. Open the project in the browser at localhost:3000!
