# Pol to Poll

A politically centered educational website aimed at making Australian Federal MP's more accountable for their actions by providing transparency of the decisions they make on behalf of their electorates. Our site is centered around the simplification and objectification of parliamentary matters presenting them in a way that is easier to understand for the otherwise uninformed voter. We hope to achieve this by focusing mainly on the process of voting on bills as we feel this is a true reflection of politicians behavior and comparing that to the surveyed views of their electorates in order to avoid the unconscious bias common with political commentary.

## Get started

*Development*
```
npm install
npm start
```

*Build*
```
npm run build
```

## Design
1.First we made designs on a paper on how our front end would look like.
2.We then divided the layout into grids so we can structure the layout of the different sections.
3.We plan to use a homepage slideshow.
4.THe website should be mobile and tablet friendly.
5.We plan to organizie the data in a way that clients can peform search on the data


## Database
1. Identify the objects that would be used together and combine them in one collection.
2. Separate data that can be referred to from multiple places into its own collection.
3. Reference only when there are many to many relationships
4. Child data would only have one to one relationship with parent. 
5. We plan to avoid deepnesting in mongo rows/documents
6.Every document should be designed to be atomic.

## Coding
1. We plan to use descriptive variable names and comments
2. Every function or component should have only one purpose.
3. Prevent dependecy injection by letting user only interact with the public areas of the website and prevet from entering data to the website
4. We plan to make a consistent identation.
5. We plan to avoid long lines of code.
6. Use verbs for function names and nouns for classes and attributes
7. Perform testing on components.
8. Account for eror handling.

## File structure

```
./src/
├── assets
│   ├── reps-vp.pdf
│   └── temp.bmg
├── components
│   ├── Face
│   │   ├── Face.js
│   ├── Footer
│   │   ├── Footer.js
│   │   ├── styles.css
│   ├── Navigation
│   │   ├── Navigation.js
├── pages
│   ├── postcode
│   │   ├── Postcode.js
│   ├── singleMP
│   │   ├── singleMP.js
│   │   ├── style.css
```

## Team
```
Nathan, Angelica & Shadman.
```
