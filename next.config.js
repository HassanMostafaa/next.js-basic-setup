/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MONGO_CON_STR: `mongodb+srv://hassanAdmin:123321123321@basic-notes-cluster.ad4bq.mongodb.net/mainNotesDatabase?retryWrites=true&w=majority`,
  },
};

module.exports = nextConfig;
