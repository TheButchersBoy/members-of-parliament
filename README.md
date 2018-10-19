# Poll to Poll

A politically centered educational website aimed at making Australian Federal MP's more accountable for their actions by providing transparency for the decisions they make on behalf of their electorates. Our site is centered around the simplification and objectification of parliamentary matters presenting them in a way that is easier to understand for the otherwise uninformed voter. We hope to achieve this by focusing mainly on the process of voting on bills as we feel this is a true reflection of politicians behavior and comparing that to the surveyed views of their electorates in order to avoid the unconscious bias common with political commentary.


## Getting started

_Build_

```
npm install

cd /clients
npm install

*This must be performed in both root directory and ./clients folder.
```

_Development_

```
npm run dev

*Refer to "develop" branch as final production product."

```

## Design
Html, Css, React, Redux
- Website is both mobile and tablet friendly.
- We utilised boostrap for our css.

## Database
Node, Express

- Our databse is currently held with mlab.
- Database authentication is currently bound to node requests.

## File structure
```
├── package.json
├── server.js

/clients/
├── public
│   ├── favicon.io
│   ├── index.html
│   └── manifest.json
├── src
│   ├── actions
│   ├── components
│   ├── img
│   ├── reducers
│   ├── utils
│   ├── validation
│   ├── App.css
│   ├── App.js
│   ├── Index.css
│   ├── Index.js
│   ├── store.js
├── package.json

/config/
├── keys.js
├── keys_dev.js
├── keys_prod.js
├── passport.js

/models/
├── Electorates.js
├── Issue.js
├── Mp.js
├── Post.js
├── Postcode.js
├── Postcodes.js
├── Profile.js
├── Reos.js
├── Senators.js
├── Suburbs.js
├── User.js

/routes/
├── api
│   ├── issues.js
│   ├── mp.js
│   ├── posts.js
│   └── users.js

/validation/
├── is-empty.js
├── login.js
├── post.js
├── profile.js
├── register.js

```

## Team

```
Angelica, Nathan & Shadman.
```

# Coming soon....
- Emailing optional surveys out to users at election time to collect their preferences in order to provide them with relevant information to help them vote for the appropriate candiate.
