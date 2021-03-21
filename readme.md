# Repository Portal

## Development

- To run this project, create a copy of `.env.example` and rename it to `.env`.
  - I use this to configure the api url. If you want to use the quick one I threw together, feel free to set the contents of the `.env` file to `SNOWPACK_PUBLIC_API_URL=http://localhost:8080`, and init that server in a separate node process by running `npm run server:start`.
- Configure the `SNOWPACK_PUBLIC_API_URL=` value to whatever url the server needs.
- Run the project via `npm run dev`.
- Visit http://localhost:30000

**Quick Note**
This project leverages husky, commitizen, and cz-conventional-changelog to push commits, so you only need to run `git commit` to stage changes. To skip the automated hooks, run `git commit -m "message" --no-verify`
