import faunadb, { query as q } from "faunadb";

export const connectAsAdmin = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_KEY });

export const connectServer = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_KEY });

export const connectAsGuest = new faunadb.Client({ secret: process.env.FAUNADB_GUEST_KEY });


