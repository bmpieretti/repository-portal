# Repository Portal

## Development

- To run this project, create a copy of `.env.example` and rename it to `.env`.
  - I use this to configure the api url. If you want to use the quick one I threw together, feel free to set the contents of the `.env` file to `SNOWPACK_PUBLIC_API_URL=http://localhost:8080`, and init that server in a separate node process by running `npm run server:start`.
- Configure the `SNOWPACK_PUBLIC_API_URL=` value to whatever url the server needs.
- Run the project via `npm run dev`.
- Visit http://localhost:30000

**Quick Notes**
This project leverages husky, commitizen, and cz-conventional-changelog to push commits, so you only need to run `git add . && git commit` to stage changes. To skip the automated hooks, run `git commit -m "message" --no-verify`

I don't think styled-components are at their best when used as the default styling system, rather they should be used more
for shared components that need more customization than say a Dashboard page, but I love the dev experience using them and
didn't want to take the time to juggle two separate systems, nor learn on the fly whatever material UI is doing with styling nowadays as a replacement for them.

I also ditched the idea of a virtualized table, just too much effort for something like this, although I might give it a shot on a personal project in the future. Lists seem very well supported, but fluid tables don't seem to have a large amount of support as far as I found. react-virtualize relies heavily on having fixed width/height, and even using AutoSizer caused some weird jankiness with the scroll.
