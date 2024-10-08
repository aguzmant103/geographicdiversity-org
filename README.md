# geographicdiversity-org

This is the repo for <https://geographicdiversity.org>, a resource site to assist geographic diversity efforts. This project is maintained by [Ethereum Costa Rica](https://ethereum.cr/) members.

## About

### Importance of Geographic Diversity
Geographic diversity is crucial for maintaining a resilient network. Nodes concentrated in specific regions face higher risks during geopolitical crises or natural disasters, which can compromise the security and availability of network data. By decentralizing node locations, we mitigate these risks and enhance overall network stability.

### Current Geographic Concentration Risks
Currently, approximately 35% of Ethereum nodes are in the United States, and 14% are in Germany. This concentration poses significant risks, as these regions are vulnerable to localized disruptions. Our initiative aims to address these imbalances and promote a more globally distributed network.

## Tech Stack
### Frontend
- NextJS
- JavaScript
- TailwindCSS
### Backend
- Node.js
- TypeScript
- Express

## Local Setup

### Frontend

1. Clone the repo (or fork the repo to your account)
2. Go to the frontend folder: `cd frontend`
3. Install dependencies: `npm install`
3. Create a feature branch off of the latest version branch
4. Start the local server: `npm run dev`
5. Go to <http://localhost:3000/> to view changes

### Backend

1. Go to api folder: `cd api`
2. Install dependencies: `npm install`
3. Create a feature branch off of the latest version branch
4. Start the local server: `npm run start`
5. Go to <http://localhost:3001/api/getnodewatchdata> to view nodewatch data
6. Add `?fetch=true` in order to refresh the data: <http://localhost:3001/api/getnodewatchdata?fetch=true>

To build the site use `npm run build`.

## Resources:

- [NextJS](https://nextjs.org/docs)
- [nodewatch.io](https://api.nodewatch.io)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
			<td align="center" valign="top" width="14.28%"><a href="https://github.com/aguzmant103"><img src="https://avatars.githubusercontent.com/u/67167307?v=4?s=100" width="100px;" alt="aguzmant103"/><br /><sub><b>aguzmant103</b></sub></a><br /><a href="#projectManagement-aguzmant103" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lindsaymoralesb"><img src="https://avatars.githubusercontent.com/u/87027508?v=4?s=100" width="100px;" alt="Lindsay Morales"/><br /><sub><b>lindsaymoralesb</b></sub></a><br /><a href="#code-lindsaymoralesb" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jsanchez556"><img src="https://avatars.githubusercontent.com/u/22351148?v=4?s=100" width="100px;" alt="blockchainer_cr"/><br /><sub><b>blockchainer_cr</b></sub></a><br /><a href="#code-jsanchez556" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ChrisFernandezVivas"><img src="https://avatars.githubusercontent.com/u/108043947?v=4?s=100" width="100px;" alt="ChrisFernandezVivas"/><br /><sub><b>ChrisFernandezVivas</b></sub></a><br /><a href="#code-ChrisFernandezVivas" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->