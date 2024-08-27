# geographicdiversity-org

This is the repo for <https://geographicdiversity.org>, a resource site to assist geographic diversity efforts. This project is maintained by [Ethereum Costa Rica](https://ethereum.cr/) members.

## About

### Importance of Geographic Diversity
Geographic diversity is crucial for maintaining a resilient network. Nodes concentrated in specific regions face higher risks during geopolitical crises or natural disasters, which can compromise the security and availability of network data. By decentralizing node locations, we mitigate these risks and enhance overall network stability.

### Current Geographic Concentration Risks
Currently, approximately 35% of Ethereum nodes are in the United States, and 14% are in Germany. This concentration poses significant risks, as these regions are vulnerable to localized disruptions. Our initiative aims to address these imbalances and promote a more globally distributed network.

## Tech Stack
- Jekyll
- Node.js
- TypeScript
- Express

## Local Setup

### Frontend

1. Clone the repo (or fork the repo to your account)
2. Install dependencies: `bundle install`
3. Create a feature branch off of the latest version branch
4. Start the local server: `bundle exec jekyll serve`
5. Go to <http://localhost:4000/> to view changes

To build the site use `bundle exec jekyll build`. 

### Backend

1. Go to api folder: `cd api`
2. Install dependencies: `npm install`
3. Create a feature branch off of the latest version branch
4. Start the local server: `npm run start`
5. Go to <http://localhost:3000/api/getnodewatchdata> to view nodewatch data
6. Add `?fetch=true` in order to refresh the data: <http://localhost:3000/api/getnodewatchdata?fetch=true>

To build the site use `npm run build`.


## Resources:

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Liquid Syntax](https://shopify.github.io/liquid/basics/introduction/)
- [nodewatch.io](https://api.nodewatch.io)

## Updating Content

- Data: `_data/nodewatch.json`
- Rest of the content is within `index.md` as raw html

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lindsaymoralesb"><img src="https://avatars.githubusercontent.com/u/87027508?v=4?s=100" width="100px;" alt="Lindsay Morales"/><br /><sub><b>Lindsay Morales</b></sub></a><br /><a href="#code-lindsaymoralesb" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jsanchez556"><img src="https://avatars.githubusercontent.com/u/22351148?v=4?s=100" width="100px;" alt="blockchainer_cr"/><br /><sub><b>blockchainer_cr</b></sub></a><br /><a href="#code-jsanchez556" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ChrisFernandezVivas"><img src="https://avatars.githubusercontent.com/u/108043947?v=4?s=100" width="100px;" alt="ChrisFernandezVivas"/><br /><sub><b>ChrisFernandezVivas</b></sub></a><br /><a href="#code-ChrisFernandezVivas" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aguzmant103"><img src="https://avatars.githubusercontent.com/u/67167307?v=4?s=100" width="100px;" alt="aguzmant103"/><br /><sub><b>aguzmant103</b></sub></a><br /><a href="#projectManagement-aguzmant103" title="Project Management">📆</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->